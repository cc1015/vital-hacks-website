<script setup lang="ts">
import TeamMember from "./TeamMember.vue";
</script>

<template>
  <div class="text-center">
    <h3 class="mb-6">Team</h3>
    <h6 class="text-lg font-semibold mb-6">Co-Executive Directors</h6>
    <div class="flex justify-center gap-8 mb-2">
      <div class="flex flex-col items-center">
        <TeamMember
          src="/adam.jpg"
          alt="Adam"
          caption="Adam Kwoh"
          contact="https://www.linkedin.com/in/adam-kwoh/"
        />
      </div>
      <div class="flex flex-col items-center">
        <TeamMember
          src="/virali.jpg"
          alt="Virali"
          caption="Virali Patel"
          contact="https://www.linkedin.com/in/viralipatel1025/"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mb-2">
      <div>
        <h6 class="text-lg font-semibold mt-2 mb-4">Event & Relations</h6>
        <div class="flex justify-center gap-8">
          <div class="flex flex-col items-center">
            <TeamMember
              src="/jakob.jpg"
              alt="Jakob"
              caption="Jakob Clark"
              contact="https://www.linkedin.com/in/jakob-clark-/"
            />
          </div>
          <div class="flex flex-col items-center">
            <TeamMember
              src="/thillai.jpg"
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
              src="/jaena.jpg"
              alt="JaeNa"
              caption="JaeNa Wray"
              contact="https://www.linkedin.com/in/jaenawray/"
            />
          </div>
          <div class="flex flex-col items-center">
            <TeamMember
              src="/aria.jpg"
              alt="Aria"
              caption="Aria Agarwal"
              contact="https://www.linkedin.com/in/aria-agarwal-4a11b629a/"
            />
          </div>
        </div>
      </div>
    </div>
    <h6 class="text-lg font-semibold">Software Engineers</h6>
    <div class="flex justify-center gap-8 mb-2">
      <div class="flex flex-col items-center">
        <TeamMember
          src="/curie.png"
          alt="Curie"
          caption="Curie Cha"
          contact="https://www.linkedin.com/in/curiecha"
        />
      </div>
      <div class="flex flex-col items-center">
        <TeamMember
          src="/vaishnavi.png"
          alt="Vaishnavi"
          caption="Vaishnavi Chebrolu"
          contact="https://www.linkedin.com/in/vaishnavi-chebrolu-79b8321b6/"
        />
      </div>
    </div>
  </div>
</template>
