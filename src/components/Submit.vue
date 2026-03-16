<template>
  <div class="mb-8 flex flex-col items-center">
    <!-- Submit Button -->
    <a
      href="https://vital-hacks-2026.devpost.com/?_gl=1*dfxco8*_gcl_au*MTMzODAyMDQ2LjE3NzM2ODg2Nzk.*_ga*OTEyMjkxMjEuMTc3MzY4ODY4MA..*_ga_0YHJK3Y10M*czE3NzM2ODg2NzkkbzEkZzEkdDE3NzM2ODg4MjUkajQzJGwwJGgw"
      target="_blank"
      class="w-full max-w-xs border-2 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <button class="block w-full text-center text-2xl md:text-3xl p-3">
        Submit
      </button>
    </a>

    <!-- Info Icon with Tooltip -->
    <div class="relative flex items-center justify-center mt-4" id="info-icon">
      <a href="/devpost_info.pdf" target="_blank">
        <img src="/info.svg" alt="Info" class="w-8 h-8 cursor-pointer" />
      </a>
      <!-- Tooltip -->
      <div
        id="tooltip"
        class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50"
      >
        Click to View Submission Manual
        <!-- Tooltip Arrow -->
        <div
          class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const infoIcon = document.getElementById("info-icon");
    const tooltip = document.getElementById("tooltip");

    if (infoIcon && tooltip) {
      // Show tooltip on hover
      infoIcon.addEventListener("mouseenter", () => {
        tooltip.classList.remove("opacity-0");
        tooltip.classList.add("opacity-100");
      });

      // Hide tooltip when not hovering
      infoIcon.addEventListener("mouseleave", () => {
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");
      });
    }
  },
};
</script>
