<template>
  <div class="timeline-container">
    <div class="timeline mb-36">
      <div v-for="(item, index) in timelineItems" 
           :key="index" 
           class="timeline-item"
           :class="{ 'timeline-item-top': index % 2 === 0, 'timeline-item-bottom': index % 2 === 1 }">
        <div class="timeline-content ">
          <h4>{{ item.title }}</h4>
          <p class="description">{{ item.description }}</p>
          <p class="location">{{ item.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  data() {
    return {
      timelineItems: [
        {
          title: '3/13',
          description: 'Workshop I',
          location: 'EV024, 6-7PM'
        },
        {
          title: '3/20',
          description: 'Workshop II',
          location: 'EV024, 6-7PM'
        },
        {
          title: '3/22',
          description: 'Hackathon Registration Deadline',
          location: ''
        },
        {
          title: '3/27',
          description: 'Ideation Day',
          location: 'EV024, 6-7PM'
        },
        {
          title: '3/29',
          description: 'Hackathon',
          location: 'EV002, 9AM-7PM'
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-container {
  padding: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline {
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 240px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  height: 2px;
  width: 100%;
  background-color: white;
}

.timeline-item {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
}

.timeline-item::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  border-left: 2px dotted white; 
  background-color: transparent; 
}

.timeline-item-top::before {
  top: 50%;
}

.timeline-item-bottom::before {
  bottom: 50%;
}

.timeline-item-top {
  align-items: flex-start;
}

.timeline-item-bottom {
  align-items: flex-end;
}

.timeline-content {
  position: absolute;
  max-width: 180px;
  word-wrap: break-word;
}


.timeline-item-top .timeline-content {
  top: calc(50% + 50px);
}

.timeline-item-bottom .timeline-content {
  bottom: calc(50% + 50px);
}


.timeline-content h4 {
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  color: #615fff;
  margin-bottom: 4px;
}

.timeline-content .description {
  margin: 0;
  font-size: 24px;
  color: #cad5e2;
  font-weight: 500;
  margin-bottom: 2px;
}

.timeline-content .location {
  margin: 0;
  font-size: 20px;
  color: #6a7282;
  font-weight: 400;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

@media (max-width: 1024px) {
  .timeline {
    padding: 0 20px;
  }
  
  .timeline-content {
    max-width: 120px;
  }
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 0;
    min-height: auto;
    gap: 40px;
  }

  .timeline::before {
    width: 1px;
    height: 100%;
    top: 0;
    left: 0;
  }

  .timeline-item {
    width: 100%;
    margin-left: 20px;
  }

  .timeline-item::before {
    left: -50px;
    width: 20px;
    height: 1px;
    top: 50%;
  }

  .timeline-item::after {
    left: -20px;
  }

  .timeline-item-top,
  .timeline-item-bottom {
    align-items: flex-start;
  }

  .timeline-content {
    position: relative;
    top: 0;
    bottom: 0;
    left: 20px;
    max-width: 150px;
  }

  .timeline-item-top .timeline-content,
  .timeline-item-bottom .timeline-content {
    top: 0;
    bottom: 0;
  }
}

@media (max-width: 480px) {
  .timeline-container {
    padding: 10px;
  }

  .timeline {
    gap: 30px;
  }

  .timeline-content {
    max-width: 150px;
  }
}
</style>