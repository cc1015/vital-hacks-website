<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

const isMenuOpen = ref(false);
const isNavVisible = ref(true); // New ref for nav visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Toggle nav visibility function
const toggleNavVisibility = () => {
  isNavVisible.value = !isNavVisible.value;
};

// Lazy load components
const TabBar = defineAsyncComponent(() => import("./components/TabBar.vue"));
const Countdown = defineAsyncComponent(
  () => import("./components/Countdown.vue")
);
const About = defineAsyncComponent(() => import("./components/About.vue"));
const Register = defineAsyncComponent(
  () => import("./components/Register.vue")
);
const Timeline = defineAsyncComponent(
  () => import("./components/Timeline.vue")
);
const FAQ = defineAsyncComponent(() => import("./components/FAQ.vue"));
const Team = defineAsyncComponent(() => import("./components/Team.vue"));
const RegistrationClosed = defineAsyncComponent(
  () => import("./components/RegistrationClosed.vue")
);
const Details = defineAsyncComponent(() => import("./components/Details.vue"));
const Submit = defineAsyncComponent(() => import("./components/Submit.vue"));
const EventTimeline = defineAsyncComponent(
  () => import("./components/EventTimeline.vue")
);
const DownloadTimeline = defineAsyncComponent(
  () => import("./components/DownloadTimeline.vue")
);
const Prompt = defineAsyncComponent(() => import("./components/Prompt.vue"));
const Keynote = defineAsyncComponent(() => import("./components/Keynote.vue"));
</script>

<template>
  <!-- Nav Toggle Button -->
  <button
    @click="toggleNavVisibility"
    class="fixed right-4 z-50 bg-white/20 text-white px-3 py-1 rounded-lg backdrop-blur-sm hover:bg-white/30 transition"
    :class="isNavVisible ? 'top-24' : 'top-4'"
  >
    {{ isNavVisible ? "Hide ^" : "Show" }}
  </button>

  <header>
    <!-- Desktop Navigation -->
    <nav class="hidden lg:block" v-show="isNavVisible">
      <TabBar class="fixed top-0 left-0 w-full z-10"></TabBar>
    </nav>

    <!-- Mobile Navigation -->
    <nav
      v-show="isNavVisible"
      class="lg:hidden fixed top-0 left-0 w-full z-10 bg-[#001049] border-b border-gray-200"
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
        v-show="isMenuOpen && isNavVisible"
        class="bg-[#001049] border-t border-gray-800 fixed inset-0 overflow-y-auto mt-12"
        @click="toggleMenu"
      >
        <a href="#timeline" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Schedule</a
        >
        <a href="#speaker" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Keynote Speaker</a
        >
        <a href="#prompt" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Prompt</a
        >
        <a href="#submit" class="block px-4 py-2 text-white hover:bg-gray-800"
          >Submit</a
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

  <main
    :class="['transition-all duration-300', isNavVisible ? 'pt-24' : 'pt-4']"
  >
    <div class="flex flex-col space-y-16">
      <section class="flex flex-col items-center justify-center space-y-8">
        <img src="/main_logo.svg" alt="Main Logo" class="w-2/3 max-w-xl" />
        <h3>Hacking Ends In...</h3>
        <Countdown />
      </section>
      <section
        id="timeline"
        class="scroll-mt-16 md:scroll-mt-32 pb-20 hidden md:block text-center"
      >
        <EventTimeline />
        <a
          href="/flyer.pdf"
          target="_blank"
          class="text-white rounded-lg hover:bg-blue-500 text-xl"
        >
          Download Schedule
        </a>
      </section>
      <section
        id="timelineDownload"
        class="scroll-mt-16 md:scroll-mt-32 pb-20 md:hidden"
      >
        <DownloadTimeline />
      </section>
      <section id="speaker" class="scroll-mt-32">
        <Keynote />
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

/* Smooth transition for main content */
main {
  transition: padding-top 0.3s ease;
}
</style>
