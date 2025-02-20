<template>
  <figure class="mr-4 text-center">
    <img :src="src" :alt="alt" class="team-image" />
    <figcaption>
      {{ caption }}
      <a :href="contact" target="_blank">
        <img src="/linkedin_white.svg" alt="LinkedIn" class="inline-block w-5 h-5" />
      </a>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  alt: {
    type: String,
    default: "Team member",
  },
  caption: String,
  contact: String, 
});
</script>
