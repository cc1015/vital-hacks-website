<script setup lang="ts">
import TabBar from "./components/TabBar.vue";
import Countdown from "./components/Countdown.vue";
import About from "./components/About.vue";
import Register from "./components/Register.vue";
import FAQ from "./components/FAQ.vue";
import Team from "./components/Team.vue";
</script>

<template>
  <header>
    <div class="fixed top-0 left-0 w-full">
      <TabBar></TabBar>
    </div>
  </header>

  <main class="pt-48">
    <div class="flex flex-col space-y-32">
      <section id="hero" class="flex justify-between items-center">
        <h1 class="text-white font-extrabold text-9xl">
          <span class="block">ViTAL</span>
          <span class="block">Hacks</span>
          <span class="block">2025</span>
        </h1>
        <div>
          <Countdown />
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="register">
        <Register />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="team">
        <Team />
      </section>
    </div>
  </main>

  <footer>
    <hr class="border-t-3" />
    <div class="mt-2 mb-8">&copy; Vital Hacks 2025</div>
  </footer>
</template>
