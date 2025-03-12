<script setup lang="ts">
import TabBar from "./components/TabBar.vue";
import Countdown from "./components/Countdown.vue";
import About from "./components/About.vue";
import Register from "./components/Register.vue";
import Timeline from "./components/Timeline.vue";
import Details from "./components/Details.vue";
import FAQ from "./components/FAQ.vue";
import Team from "./components/Team.vue";
import RegistrationClosed from "./components/RegistrationClosed.vue";
import Submit from "./components/Submit.vue";
import EventTimeline from "./components/EventTimeline.vue";
import Prompt from "./components/Prompt.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <!-- Desktop Navigation -->
    <nav class="hidden md:block">
      <TabBar class="fixed top-0 left-0 w-full z-10"></TabBar>
    </nav>

    <!-- Mobile Navigation -->
    <nav
      class="md:hidden fixed top-0 left-0 w-full z-10 bg-[#001049] border-b border-gray-200"
    >
      <div class="flex justify-between items-center px-4 py-3">
        <img src="/white_logo.svg" alt="Logo" class="h-8" />
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMenuOpen"
        class="bg-[#001049] border-t border-gray-800"
        @click="toggleMenu"
      >
        <a href="#about" class="block px-4 py-2 text-white hover:bg-gray-800"
          >About</a
        >
        <a href="#register" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Register</a
        >
        <a href="#faq" class="block px-4 py-2 text-white hover:bg-gray-800"
          >FAQ</a
        >
        <a href="#team" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Team</a
        >
      </div>
    </nav>
  </header>

  <main class="pt-24">
    <div class="flex flex-col space-y-16">
      <section class="flex items-center justify-center gap-x-24">
        <img src="/main_logo.svg" alt="Main Logo" class="w-1/2 max-w-xl" />
        <div class="flex flex-col items-center">
          <h2 class="text-xl3 font-bold">Hacking Ends In...</h2>
          <Countdown class="scale-85"></Countdown>
        </div>
      </section>
      <section id="timeline" class="scroll-mt-32 pb-20">
        <EventTimeline />
      </section>
      <section id="prompt" class="scroll-mt-32">
        <Prompt />
      </section>
      <section id="submit" class="scroll-mt-32">
        <Submit />
      </section>
      <section id="about" class="scroll-mt-32 pb-20">
        <div class="relative mt-12">
          <img
            src="/angled_down_node_icon.svg"
            alt="Node Icon"
            class="w-50 absolute -top-12 -left-8"
          />
          <About class="relative z-5" />
          <img
            src="/angled_up_node_icon.svg"
            alt="Node Icon"
            class="absolute -right-8 -bottom-12"
          />
        </div>
      </section>
      <section id="register" class="scroll-mt-32">
        <RegistrationClosed />
      </section>
      <section id="faq" class="scroll-mt-32">
        <FAQ />
      </section>
      <section id="team" class="scroll-mt-32">
        <Team />
      </section>
    </div>
  </main>

  <footer class="px-4">
    <hr class="border-t-3" />
    <div class="mt-2 mb-8">&copy; Vital Hacks 2025</div>
  </footer>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
