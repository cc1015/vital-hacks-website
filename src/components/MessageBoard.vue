<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { supabase, type Message } from '../lib/supabase'

const BOARD_ENABLED = import.meta.env.VITE_BOARD_ENABLED === 'true'

const messages = ref<Message[]>([])
const newTag = ref<'participant' | 'mentor' | 'general'>('participant')
const newText = ref('')
const submitting = ref(false)
const error = ref('')
const feedEl = ref<HTMLElement | null>(null)

let pollInterval: ReturnType<typeof setInterval> | null = null

async function fetchMessages() {
  const { data, error: err } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: true })
    .limit(50)
  if (!err && data) {
    messages.value = data as Message[]
  }
}

async function scrollToBottom() {
  await nextTick()
  if (feedEl.value) {
    feedEl.value.scrollTop = feedEl.value.scrollHeight
  }
}

async function submitMessage() {
  const text = newText.value.trim()
  if (!text) return
  submitting.value = true
  error.value = ''
  const { error: err } = await supabase
    .from('messages')
    .insert({ tag: newTag.value, text })
  if (err) {
    error.value = 'Failed to send message. Try again.'
  } else {
    newText.value = ''
    await fetchMessages()
    scrollToBottom()
  }
  submitting.value = false
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const tagStyles: Record<string, string> = {
  participant: 'bg-blue-600 text-white',
  mentor: 'bg-green-600 text-white',
  general: 'bg-purple-600 text-white',
}

onMounted(async () => {
  if (!BOARD_ENABLED) return
  await fetchMessages()
  scrollToBottom()
  pollInterval = setInterval(async () => {
    const prev = messages.value.length
    await fetchMessages()
    if (messages.value.length !== prev) scrollToBottom()
  }, 3000)
})

onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval)
})
</script>

<template>
  <div class="max-w-2xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-2">Message Board</h2>
    <p class="text-center text-gray-400 mb-8">Need a mentor? Have an announcement? Post here.</p>

    <!-- Locked state -->
    <div v-if="!BOARD_ENABLED" class="rounded-xl border border-gray-700 bg-[#0a1a5c] p-10 text-center">
      <div class="text-5xl mb-4">🔒</div>
      <p class="text-xl font-semibold text-white">Available on event day</p>
      <p class="text-gray-400 mt-2">The message board will open when the hackathon begins.</p>
    </div>

    <!-- Active board -->
    <div v-else class="flex flex-col gap-4">

      <!-- Message feed -->
      <div
        ref="feedEl"
        class="rounded-xl border border-gray-700 bg-[#0a1a5c] h-96 overflow-y-auto p-4 flex flex-col gap-3"
      >
        <p v-if="messages.length === 0" class="text-gray-500 text-sm text-center mt-auto mb-auto">
          No messages yet. Be the first to post!
        </p>
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="flex flex-col gap-1 bg-[#001049] rounded-lg px-4 py-3"
        >
          <div class="flex items-center gap-2">
            <span
              class="text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
              :class="tagStyles[msg.tag]"
            >{{ msg.tag }}</span>
            <span class="text-xs text-gray-500 ml-auto">{{ formatTime(msg.created_at) }}</span>
          </div>
          <p class="text-white text-sm leading-relaxed break-all">{{ msg.text }}</p>
        </div>
      </div>

      <!-- Input form -->
      <div class="rounded-xl border border-gray-700 bg-[#0a1a5c] p-4 flex flex-col gap-3">
        <!-- Tag selector -->
        <div class="flex gap-2">
          <button
            v-for="tag in (['participant', 'mentor', 'general'] as const)"
            :key="tag"
            @click="newTag = tag"
            class="px-3 py-1.5 rounded-full text-sm font-semibold capitalize transition-all"
            :class="newTag === tag ? tagStyles[tag] : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
          >{{ tag }}</button>
        </div>

        <!-- Text input + send -->
        <div class="flex gap-2">
          <input
            v-model="newText"
            @keydown.enter.prevent="submitMessage"
            type="text"
            placeholder="Type a message..."
            maxlength="300"
            class="flex-1 bg-[#001049] border border-gray-700 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button
            @click="submitMessage"
            :disabled="submitting || !newText.trim()"
            class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
          >Send</button>
        </div>

        <p v-if="error" class="text-red-400 text-xs">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
