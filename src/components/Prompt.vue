<template>
  <div class="hackathon-prompt">
    <h1 class="challenge-header">THE CHALLENGE</h1>
    <h1 class="text-center text-[#615fff]">PREVENTATIVE CARE</h1>

    <div class="prompt-box">
      <p>
        Preventative care focuses on addressing potential health issues before
        they develop into serious conditions, emphasizing
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-indigo-500"
          >early intervention</a
        >,
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-blue-500"
          >education</a
        >, and
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-gray-500"
          >monitoring</a
        >
        to improve overall well-being. Its importance cannot be overstated; by
        identifying risks and promoting healthy behaviors, preventative care
        reduces the burden of chronic diseases, lowers healthcare costs, and
        enhances the quality of life for individuals and communities.
      </p>
    </div>

    <div class="rectangles-container">
      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/education_icon.svg"
          alt="Education Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Preventative Care Education</h3>
        <p>
          Preventative care plays a crucial role in maintaining overall health
          and well-being. One significant challenge in this space is the lack of
          knowledge and education about preventative care and the healthcare
          system. Individuals might be unaware of the benefits of preventative
          care and what their healthcare plan may or may not cover. Those
          without a healthcare plan may incorrectly assume they do not have
          access to preventative care services. For these reasons and many more,
          preventative care education at the individual and systemic level can
          provide a foundation for healthier and longer lives. Your challenge is
          to build a product that supports education of preventative care
          options and how they can help individuals.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/access_icon.svg"
          alt="Access Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Access to Care</h3>
        <p>
          Physical barriers pose a tough challenge for preventative care. Long
          distances, in-person time constraints, and transportation limitations
          are just a few examples of such physical barriers. Individuals may be
          unaware of preventative care services in their immediate area, what
          public transportation is available for these services, or just might
          not have enough time to attend in-person appointments. Socioeconomic
          factors, physical disabilities, or caregiving responsibilities can
          further compound these challenges, leaving many without timely
          preventative care. Your challenge is to build a product that can
          bridge this physical gap and increase the access to preventative care.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/digital_icon.svg"
          alt="Digital Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Digital Health Monitoring</h3>
        <p>
          Digital health monitoring is transforming the way we understand and
          manage personal health, leveraging technology to track key metrics and
          provide real-time insights. From wearable devices that measure heart
          rates and sleep patterns to apps that monitor diet, stress, or
          physical activity, these tools empower individuals to make informed
          decisions about their well-being. By turning data into actionable
          insights, digital health monitoring helps identify early signs of
          health concerns, promote healthier habits, and bridge the gap between
          patients and preventative care. Your challenge is to design a digital
          health monitoring solution that is innovative, user-friendly, and
          impactful.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img src="/ai_icon.svg" alt="AI Icon" class="inline-block w-36 h-36" />
        <h3>Artificial Intelligence</h3>
        <p>
          Preventative care is the key to a healthier future, focusing on
          identifying risks and intervening before health issues arise. By
          promoting early detection and encouraging healthier lifestyles, it
          reduces the burden of chronic diseases and improves overall
          well-being. AI is revolutionizing this field by analyzing data to
          predict health risks, providing personalized recommendations, and
          enabling smarter, more proactive healthcare. Your challenge is to
          create an AI-driven software solution that enhances preventative care
          for individuals.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hackathon-prompt {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.challenge-header {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.prompt-box {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.prompt-box p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #2c3e50;
  margin: 0;
}

.rectangles-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 1.5rem; /* Spacing between rectangles */
}

.rectangle {
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.rectangle:hover {
  transform: translateY(-5px);
}

.rectangle h3 {
  color: #615fff;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.rectangle p {
  color: #ffffff;
  margin: 0;
}

@media (max-width: 768px) {
  .rectangles-container {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
}
</style>
