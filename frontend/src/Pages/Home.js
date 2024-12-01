import React from 'react'
import RevolutionSliderSection from '../Components/RevolutionSliderSection'
import ServicesSection from '../Components/ServicesSection'
import SolutionSection from '../Components/SolutionSection'
import '../css/style.css'
function Home() {
  return (
    <div class="home">
      <RevolutionSliderSection/>
      <ServicesSection/>
      <SolutionSection/>
    </div>
  )
}

export default Home
