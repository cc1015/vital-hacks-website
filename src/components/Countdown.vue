<script>
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  components: {
    VueCountdown,
  },
  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear(), 2, 29, 8, 0, 0); 

    return {
      time: newYear - now,
      prevDays: 0,
      prevHours: 0,
      prevMinutes: 0,
      prevSeconds: 0,
    };
  },
  methods: {
    updateCountdown({ days, hours, minutes, seconds }) {
      if (days !== this.prevDays) {
        this.triggerFlip("days");
      }
      if (hours !== this.prevHours) {
        this.triggerFlip("hours");
      }
      if (minutes !== this.prevMinutes) {
        this.triggerFlip("minutes");
      }
      if (seconds !== this.prevSeconds) {
        this.triggerFlip("seconds");
      }

      this.prevDays = days;
      this.prevHours = hours;
      this.prevMinutes = minutes;
      this.prevSeconds = seconds;
    },
    triggerFlip(unit) {
      const flipCard = document.querySelector(`.${unit} .flip-card-inner`);
      if (flipCard) {
        flipCard.classList.add("flip");
        setTimeout(() => flipCard.classList.remove("flip"), 600);
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-center">
  <h3>HACKING BEGINS IN</h3>
    <vue-countdown
      :time="time"
      :interval="1000"
      v-slot="{ days, hours, minutes, seconds }"
      @update="updateCountdown"
    >
      <div class="flex gap-5">
        <!-- Days -->
        <div class="text-center days">
          <div class="w-40 h-40 perspective-1000">
            <div class="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d">
              <div class="absolute w-full h-full flex justify-center items-center text-6xl text-white border-4 shadow-lg rounded-2xl backface-hidden">
                {{ days }}
              </div>
            </div>
          </div>
          <span class="block mt-2 text-2xl text-white">Days</span>
        </div>

        <!-- Hours -->
        <div class="text-center hours">
          <div class="w-40 h-40 perspective-1000">
            <div class="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d">
              <div class="absolute w-full h-full flex justify-center items-center text-6xl text-white border-4 shadow-lg rounded-2xl backface-hidden">
                {{ hours }}
              </div>
            </div>
          </div>
          <span class="block mt-2 text-2xl text-white">Hours</span>
        </div>

        <!-- Minutes -->
        <div class="text-center minutes">
          <div class="w-40 h-40 perspective-1000">
            <div class="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d">
              <div class="absolute w-full h-full flex justify-center items-center text-6xl text-white border-4 shadow-lg rounded-2xl backface-hidden">
                {{ minutes }}
              </div>
            </div>
          </div>
          <span class="block mt-2 text-2xl text-white">Minutes</span>
        </div>

        <!-- Seconds -->
        <div class="text-center seconds">
          <div class="w-40 h-40 perspective-1000">
            <div class="relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d">
              <div class="absolute w-full h-full flex justify-center items-center text-6xl text-white border-4 shadow-lg rounded-2xl backface-hidden">
                {{ seconds }}
              </div>
            </div>
          </div>
          <span class="block mt-2 text-2xl text-white">Seconds</span>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>