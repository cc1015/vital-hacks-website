<script setup lang="ts">
import TabBar from "./components/TabBar.vue";
import Countdown from "./components/Countdown.vue";
import About from "./components/About.vue";
import Register from "./components/Register.vue";
import Timeline from "./components/Timeline.vue";
import Details from "./components/Details.vue";
import FAQ from "./components/FAQ.vue";
import Team from "./components/Team.vue";
</script>

<template>
  <header>
    <TabBar class="fixed top-0 left-0 w-full z-10"></TabBar>
  </header>

  <main class="pt-24">
    <div class="flex flex-col space-y-16">
      <section class="flex flex-col items-center justify-center">
        <img src="/main_logo.svg" alt="Main Logo" class="w-2/3" />
        <Countdown />
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
        <Register />
        <Timeline />
      </section>
      <section id="faq" class="scroll-mt-32">
        <FAQ />
      </section>
      <section id="team" class="scroll-mt-32">
        <Team />
      </section>
    </div>
  </main>

  <footer>
    <hr class="border-t-3" />
    <div class="mt-2 mb-8">&copy; Vital Hacks 2025</div>
  </footer>
</template>
