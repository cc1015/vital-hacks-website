<script setup lang="ts">
import { ref } from "vue";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

// Define FAQ data
const faqs = ref<FAQItem[]>([
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where developers, designers, and other tech enthusiasts come together to collaborate intensively on a project over a short period of time. Participants engage in rapid prototyping and collaboration to build a functional product that solves big issues.",
    isOpen: false,
  },
  {
    question: "Who can participate?",
    answer:
      "Northeastern University undergraduates of all majors, backgrounds, and experience levels are allowed to participate. Beginners are especialy encouraged to register!",
    isOpen: false,
  },
  {
    question: "What if I don't have a team?",
    answer:
      "When registering, there will be an option to select if you are searching for teammates. There will be questions about your personal experiences and preferences, and teammates will be matched based on those answers.",
    isOpen: false,
  },
  { question: "How long is the event?", answer: "This will be an 8-hour hackathon.", isOpen: false },
]);

// Toggle FAQ item
const toggleFAQ = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <div class="max-w-xl mx-auto my-6 text-left">
    <h3 class="text-center">FAQ</h3>
    <div v-for="(faq, index) in faqs" :key="index" class="border-b py-4">
      <button
        @click="toggleFAQ(index)"
        class="w-full flex justify-between items-center text-lg font-semibold"
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
/* Smooth fade-in animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
