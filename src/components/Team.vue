<script setup lang="ts">
import TeamMember from "./TeamMember.vue";
</script>

<template>
  <div class="text-center">
    <h3 class="mb-6">Team</h3>
    <h6 class="text-lg font-semibold mb-6">ViTAL Hacks Director</h6>
    <div class="flex justify-center gap-8 mb-2">
      <div class="flex flex-col items-center">
        <TeamMember
          src="/members/aria.jpg"
          alt="Aria"
          caption="Aria Agarwal"
          contact="https://www.linkedin.com/in/aria-agarwal-4a11b629a/"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mb-2">
      <div>
        <h6 class="text-lg font-semibold mt-2 mb-4">Event & Relations</h6>
        <div class="flex justify-center gap-8">
          <div class="flex flex-col items-center">
            <TeamMember
              src="/members/jakob.jpg"
              alt="Jakob"
              caption="Jakob Clark"
              contact="https://www.linkedin.com/in/jakob-clark-/"
            />
          </div>
          <div class="flex flex-col items-center">
            <TeamMember
              src="/members/thillai.jpg"
              alt="Thillai"
              caption="Thillai Sudhakar"
              contact="https://www.linkedin.com/in/thillai-sudhakar/"
            />
          </div>
        </div>
      </div>

      <div>
        <h6 class="text-lg font-semibold mt-2 mb-4">Project Organizers</h6>
        <div class="flex justify-center gap-8">
          <div class="flex flex-col items-center">
            <TeamMember
              src="/members/oscar.jpg"
              alt="Aria"
              caption="Oscar Ji"
              contact="https://www.linkedin.com/in/oscar-ji/"
            />
          </div>
          <div class="flex flex-col items-center">
            <TeamMember
              src="/members/jaena.jpg"
              alt="JaeNa"
              caption="Jaena Wray"
              contact="https://www.linkedin.com/in/jaenawray/"
            />
          </div>
        </div>
      </div>
    </div>
    <h6 class="text-lg font-semibold">Software Experts</h6>
    <div class="flex justify-center gap-8 mb-2">
      <div class="flex flex-col items-center">
        <TeamMember
          src="/members/curie.JPG"
          alt="Curie"
          caption="Curie Cha"
          contact="https://www.linkedin.com/in/curiecha"
        />
      </div>
      <div class="flex flex-col items-center">
        <TeamMember
          src="/members/vaishnavi.png"
          alt="Vaishnavi"
          caption="Vaishnavi Chebrolu"
          contact="https://www.linkedin.com/in/vaishnavi-chebrolu-79b8321b6/"
        />
      </div>
    </div>
  </div>
</template>
