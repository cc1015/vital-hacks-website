<template>
  <div class="hackathon-prompt">
    <div class="flex content-center text-center justify-center">
      <h1 class="challenge-header">THE CHALLENGE</h1>
      <a href="/prompt.pdf" target="_blank">
      </a>
    </div>
    <h1 class="text-center text-[#615fff]">HEALTHCARE LITERACY</h1>

    <div class="prompt-box">
      <p>
        Healthcare literacy is a critical determinant of health outcomes, 
        enabling individuals to
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-indigo-500"
          >understand</a
        >,
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-blue-500"
          >access</a
        >, and
        <a
          class="text-[#2c3e50] font-bold underline underline-offset-4 decoration-4 decoration-gray-500"
          >act</a
        >
        on information related to their care. Despite its importance, many people face barriers due to complex medical 
        language, inaccessible resources, high costs, or limited access to local healthcare services.
      </p>
    </div>

    <div class="flex justify-center">
    <a
    href="/schedule.pdf"
    target="_blank"
    class="text-white rounded-lg hover:bg-blue-500 text-xl">
    Download Prompt
    </a>
    </div>

    <div class="rectangles-container">
      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/cost_icon.svg"
          alt="Cost Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Healthcare Cost Literacy</h3>
        <p>
          Healthcare costs are often confusing, unpredictable, and poorly 
          communicated to patients. One significant challenge in this space 
          is the lack of clear, upfront information about the price of services, 
          procedures, and medications. Individuals might avoid necessary care out 
          of fear of unexpected bills or financial hardship. Even insured patients
          may not know what portion of costs they are responsible for until after 
          care is received. Due to these pressing issues, increasing transparency 
          around healthcare costs can empower individuals to make informed decisions, 
          reduce financial stress, and improve trust in the healthcare system. 
          Your challenge is to build a product that improves the clarity, 
          accessibility, and understanding of healthcare costs for patients.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/disability_icon.svg"
          alt="Disability Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Disability Health Literacy</h3>
        <p>
          People with disabilities often face significant barriers in 
          accessing health information that is accurate, accessible, and 
          relevant to their needs. These barriers include digital 
          inaccessibility, communication gaps, and design exclusion. Additionally, 
          healthcare providers may lack training or tools to effectively 
          communicate complex health information to patients with cognitive, 
          sensory, or communication disabilities, leading to lower health outcomes, medication errors, and 
          preventable complications. Your challenge is to build a product that supports 
          accessible, inclusive, and effective healthcare education for people 
          with disabilities. You may choose to focus on a specific target 
          audience (such as patients with disabilities, family caregivers, 
          or healthcare providers) or design a solution that serves multiple stakeholders.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img
          src="/rural_icon.svg"
          alt="Rural Icon"
          class="inline-block w-36 h-36"
        />
        <h3>Rural Health Literacy</h3>
        <p>
          Many health resources 
          and education materials are designed for urban centers, where population 
          is denser. These resources and educational materials fail to address specific 
          realities experienced by rural communities, such as agricultural risks, 
          long travel times to hospitals, and lack of specialty care. In this way, 
          geographic isolation and connectivity barriers may prevent rural residents 
          from obtaining timely, accurate, and culturally relevant information about 
          their health. Increasing health literacy in rural communities can empower 
          individuals to take charge of their health and bridge gaps in care. 
          Your challenge is to build a product that strengthens access to healthcare 
          education and resources for rural populations.
        </p>
      </div>

      <div class="rectangle">
        <!-- Icon Placeholder -->
        <img src="/data_icon.svg" alt="Data Icon" class="inline-block w-36 h-36" />
        <h3>Health Data Literacy</h3>
        <p>
          Health data is increasingly generated from electronic health records, 
          wearable devices, and patient-reported outcomes, yet individuals 
          often struggle to understand or access their own information. 
          One significant challenge in this space is the lack of clear communication 
          about how health data is used, shared, and interpreted. Patients may feel 
          excluded from decision-making about their care due to unfamiliarity with 
          medical terms, privacy concerns, or limited ability to analyze data themselves. 
          Your challenge is to build a product that helps individuals better access, 
          understand, and engage with their personal health data.
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
  font-size: 1.1rem;  
  line-height: 1.7;    
}

@media (max-width: 768px) {
  .rectangles-container {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
}
</style>
