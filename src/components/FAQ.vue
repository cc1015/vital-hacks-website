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
      "Undergraduates in the Greater Boston area of all majors, backgrounds, and experience levels are allowed to participate. Beginners are especialy encouraged to register!",
    isOpen: false,
  },
  {
    question: "What if I don't have a team?",
    answer:
      "When registering, there will be an option to select if you are searching for teammates. There will be questions about your personal experiences and preferences, and teammates will be matched based on those answers.",
    isOpen: false,
  },
  {
    question: "How long is the event?",
    answer:
      "This is an 8-hour hackathon. Hacking begins at 9AM and ends at 5:30PM. Check-in will begin at 8:15AM and speaker event and closing ceremonies will conclude at 7PM.",
    isOpen: false,
  },
  {
    question: "Are the workshop and ideation events mandatory?",
    answer:
      "No. Attendance at the workshop(s) and ideation event is not necessary for hackathon participation. Feel free to attend just one or both workshops as well as the ideation event.",
    isOpen: false,
  },
  {
    question: "When is the registration deadline?",
    answer: "3/22 @ 11:59PM EST or until capacity is reached.",
    isOpen: false,
  },
  {
    question: "Should I participate or be a mentor?",
    answer:
      "All experience levels are welcome to participate, but if you are a beginner looking to break into health tech, we encourage you to participate in the hackathon. If you have a little bit more experience and feel comfortable serving as a technical guide to students throughout the event, we encourage you to be a mentor!",
    isOpen: false,
  },
]);

// Toggle FAQ item
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
