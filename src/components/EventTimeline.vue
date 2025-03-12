<template>
  <div class="px-16">
    <div class="text-center pb-8">
      <h3>Event Schedule</h3>
    </div>
    <div class="timeline-wrapper">
      <!-- Header Timeline -->
      <div class="timeline-header">
        <div class="hour-bar">
          <div
            v-for="hour in hours"
            :key="hour.value"
            class="hour"
            :style="getHourStyle(hour)"
          >
            {{ hour.label }}
          </div>
        </div>
      </div>

      <div class="timeline-content">
        <!-- Hour Dividers -->
        <div class="hour-dividers">
          <div
            v-for="hour in hours"
            :key="hour.value"
            class="hour-divider"
            :style="getHourDividerStyle(hour.value)"
          ></div>
        </div>

        <!-- Add special dividers -->
        <div class="special-dividers">
          <div class="special-divider" :style="getHourDividerStyle(9.5)">
            <div class="special-divider-line"></div>
            <div class="special-divider-label">HACKING BEGINS</div>
          </div>
          <div class="special-divider" :style="getHourDividerStyle(13.5)">
            <div class="special-divider-line"></div>
            <div class="special-divider-label">LUNCH</div>
          </div>
          <div class="special-divider" :style="getHourDividerStyle(17.5)">
            <div class="special-divider-line"></div>
            <div class="special-divider-label">HACKING ENDS</div>
          </div>
        </div>

        <!-- Add custom event labels -->
        <div class="event-labels">
          <div class="event-label" :style="getEventLabelStyle(9.5)"></div>
          <div class="event-label" :style="getEventLabelStyle(17.5)"></div>
        </div>

        <!-- Time Ticker -->
        <div class="time-ticker" :style="getTickerPosition">
          <div class="ticker-line"></div>
          <div class="ticker-time">{{ currentTimeFormatted }}</div>
        </div>

        <div class="stages-container">
          <div v-for="(stage, index) in stages" :key="index" class="stage">
            <div class="stage-label">{{ stageLabels[index] }}</div>
            <div class="activities">
              <div
                v-for="activity in stage.activities"
                :key="activity.name"
                class="activity"
                :style="getActivityStyle(activity)"
              >
                {{ activity.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventTimeline",
  data() {
    return {
      currentTime: new Date(),
      hours: [
        { value: 8, label: "8 AM" },
        { value: 9, label: "9 AM" },
        { value: 10, label: "10 AM" },
        { value: 11, label: "11 AM" },
        { value: 12, label: "12 PM" },
        { value: 13, label: "1 PM" },
        { value: 14, label: "2 PM" },
        { value: 15, label: "3 PM" },
        { value: 16, label: "4 PM" },
        { value: 17, label: "5 PM" },
        { value: 18, label: "6 PM" },
        { value: 19, label: "7 PM" },
      ],
      stages: [
        {
          activities: [
            {
              name: "Check-in Breakfast",
              startHour: 8.25,
              endHour: 9.15,
            },
            {
              name: "Intro",
              startHour: 9.15,
              endHour: 9.63,
            },
            {
              name: "Hacking",
              startHour: 9.65,
              endHour: 17.5,
            },
            {
              name: "Closing Ceremony",
              startHour: 17.55,
              endHour: 19,
            },
          ],
        },
        {
          activities: [
            {
              name: "Hacking",
              startHour: 9.65,
              endHour: 17.5,
            },
          ],
        },
        {
          activities: [
            {
              name: "Relaxing Tunes + Coloring",
              startHour: 10.6,
              endHour: 17.5,
            },
          ],
        },
        {
          activities: [
            {
              name: "Just Dance",
              startHour: 13.6,
              endHour: 15.05,
            },
            {
              name: "Devpost Workshop",
              startHour: 15.05,
              endHour: 16.05,
            },
          ],
        },
      ],
      stageLabels: ["EV024", "EV002", "EV008", "EV010"],
    };
  },
  computed: {
    estTime() {
      const now = new Date();
      const estOffset = -4 * 60; // EST is UTC-5 (in minutes)
      return new Date(now.getTime() + estOffset * 60 * 1000);
    },
    getTickerPosition() {
      const hours =
        this.estTime.getUTCHours() + this.estTime.getUTCMinutes() / 60;

      // Only show ticker between 8 AM and 7 PM EST
      if (hours < 8 || hours > 19) {
        return { display: "none" };
      }

      const totalHours = 19 - 8; // 7 PM - 8 AM
      const position = ((hours - 8) / totalHours) * 100;

      return {
        left: `${position}%`,
      };
    },
    currentTimeFormatted() {
      const now = new Date();

      return now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York", // Explicitly set the timezone to EST
      });
    },
  },
  mounted() {
    // Update time every minute
    this.timer = setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  },
  beforeUnmount() {
    // Clean up timer
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    getActivityStyle(activity) {
      const totalHours = 19 - 8;
      const startPercent = ((activity.startHour - 8) / totalHours) * 100;
      const width =
        ((activity.endHour - activity.startHour) / totalHours) * 100;

      return {
        backgroundColor: "#615fff",
        position: "absolute",
        left: `${startPercent}%`,
        width: `${width}%`,
        margin: "4px 0",
        height: "70px",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        borderRadius: "4px",
      };
    },
    getHourDividerStyle(hour) {
      const totalHours = 19 - 8;
      const position = ((hour - 8) / totalHours) * 100;

      return {
        left: `${position}%`,
      };
    },
    getHourStyle(hour) {
      const totalHours = 19 - 8;
      const position = ((hour.value - 8) / totalHours) * 100;

      return {
        left: `${position}%`,
      };
    },
    getEventLabelStyle(hour) {
      const totalHours = 19 - 8;
      const position = ((hour - 8) / totalHours) * 100;

      return {
        left: `${position}%`,
      };
    },
  },
};
</script>

<style scoped>
.timeline-wrapper {
  margin-left: 80px;
  margin-right: 20px;
}

.timeline-header {
  position: relative;
  margin-bottom: 60px;
}

.hour-bar {
  display: flex;
  margin: 2px 0px;
  position: relative;
  height: 30px;
  border-top: 1px solid;
  border-bottom: 1px solid;
}

.hour {
  padding: 4px;
  text-align: left;
  color: white;
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
}

.timeline-content {
  position: relative;
  margin-top: 20px;
}

.hour-dividers {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
}

.hour-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.3);
}

.time-ticker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  z-index: 2;
  pointer-events: none;
}

.ticker-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #ff4444;
}

.ticker-time {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4444;
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
}

.stages-container {
  position: relative;
  margin-top: 20px;
}

.stage {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.stage-label {
  width: 120px;
  color: white;
  padding-right: 15px;
  text-align: right;
  margin-left: -135px;
}

.activities {
  flex: 1;
  position: relative;
  height: 80px;
  margin: 4px 0;
}

.activity {
  position: absolute;
  color: white;
  z-index: 1;
  box-sizing: border-box;
  font-size: 1rem;
}

.event-labels {
  position: relative;
  height: 20px;
  margin-top: 10px;
}

.event-label {
  position: absolute;
  transform: translateX(-50%);
  color: white;
  font-size: 2rem;
  white-space: nowrap;
}

.special-dividers {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
}

.special-divider {
  position: absolute;
  top: 0;
  bottom: 0;
}

.special-divider-line {
  position: absolute;
  top: -55px;
  bottom: 0;
  width: 0;
  border-left: 2px dashed white;
}

.special-divider-label {
  position: absolute;
  top: -55px;
  margin-top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: bold;
  white-space: nowrap;
  background-color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: #001049;
}

.px-16 {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
