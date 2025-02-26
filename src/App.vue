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

  <main class="pt-48">
    <div class="flex flex-col space-y-16">
      <section class="mt-96">
        <Countdown />
      </section>
      <section id="about" class="scroll-mt-32">
        <About />
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
