<script setup lang="ts">
import { ref, onMounted } from "vue";
import VueCountdown from "@chenfengyuan/vue-countdown";

const now = new Date();
const target = new Date(Date.UTC(now.getFullYear(), 2, 29, 21, 30, 0)); // March 29, 5:30 PM ET -> 9:30 PM UTC
let timeRemaining = target.getTime() - now.getTime();
const time = ref(timeRemaining > 0 ? timeRemaining : 0);

const prevDays = ref(0);
const prevHours = ref(0);
const prevMinutes = ref(0);
const prevSeconds = ref(0);

const updateCountdown = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  if (days !== prevDays.value) triggerFlip("days");
  if (hours !== prevHours.value) triggerFlip("hours");
  if (minutes !== prevMinutes.value) triggerFlip("minutes");
  if (seconds !== prevSeconds.value) triggerFlip("seconds");

  prevDays.value = days;
  prevHours.value = hours;
  prevMinutes.value = minutes;
  prevSeconds.value = seconds;
};

const triggerFlip = (unit: string) => {
  const flipCard = document.querySelector(`.${unit} .flip-card-inner`);
  if (flipCard) {
    flipCard.classList.add("flip");
    setTimeout(() => flipCard.classList.remove("flip"), 600);
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center z-0">
    <vue-countdown
      :time="time"
      :interval="1000"
      v-slot="{ days, hours, minutes, seconds }"
      @update="updateCountdown"
    >
      <div class="flex gap-2 md:gap-6">
        <!-- Hours -->
        <div class="text-center hours">
          <div class="w-20 h-20 md:w-40 md:h-40 perspective-1000">
            <div class="relative w-full h-full text-center">
              <div
                class="absolute w-full h-full flex justify-center items-center text-5xl md:text-8xl text-white border-4 rounded-2xl border-indigo-500 custom-text"
              >
                {{ hours }}
              </div>
            </div>
          </div>
          <span class="block mt-2 md:text-2xl text-white">hours</span>
        </div>

        <!-- Minutes -->
        <div class="text-center minutes">
          <div class="w-20 h-20 md:w-40 md:h-40 perspective-1000">
            <div class="relative w-full h-full text-center">
              <div
                class="absolute w-full h-full flex justify-center items-center text-5xl md:text-8xl text-white border-4 rounded-2xl border-indigo-500 custom-text"
              >
                {{ minutes }}
              </div>
            </div>
          </div>
          <span class="block mt-2 md:text-2xl text-white">minutes</span>
        </div>

        <!-- Seconds -->
        <div class="text-center seconds">
          <div class="w-20 h-20 md:w-40 md:h-40 perspective-1000">
            <div class="relative w-full h-full text-center">
              <div
                class="absolute w-full h-full flex justify-center items-center text-5xl md:text-8xl text-white border-4 rounded-2xl border-indigo-500 custom-text"
              >
                {{ seconds }}
              </div>
            </div>
          </div>
          <span class="block mt-2 md:text-2xl text-white">seconds</span>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>
