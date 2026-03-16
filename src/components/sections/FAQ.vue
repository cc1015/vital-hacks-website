<script setup lang="ts">
import { ref } from "vue";
import { FAQ_ITEMS, type FAQItem } from "@/constants/faq";

interface FAQWithState extends FAQItem {
  isOpen: boolean;
}

const faqs = ref<FAQWithState[]>(
  FAQ_ITEMS.map((item) => ({
    ...item,
    isOpen: false,
  }))
);

const toggleFAQ = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <div>
    <h3 class="text-right text-7xl">FAQ</h3>
    <div v-for="(faq, index) in faqs" :key="index" class="border-b py-4">
      <button
        @click="toggleFAQ(index)"
        class="w-full flex justify-between items-center text-left text-lg font-semibold"
      >
        {{ faq.question }}
        <span>{{ faq.isOpen ? "−" : "+" }}</span>
      </button>
      <transition name="fade">
        <p v-if="faq.isOpen" class="mt-2 text-white">{{ faq.answer }}</p>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
