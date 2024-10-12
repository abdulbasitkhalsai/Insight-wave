import React from 'react'
import WorkLife from '../work-life-harmony/page'
import NailNiche from '../nail-your-niche/page'
import InnovationTeamwork from '../innovation-through-teamwork/page'
import BreakFear from '../break-the-fear/page'

const LifeStyle = () => {
  return (
    <div>
<article className='article'>
  <h1 className='primaryHeading'>Lifestyle: Balancing Work, Life, and Growth</h1>
  <p className='content'>In the modern world, finding a balance between work and personal life is key to achieving happiness and success. Our lifestyle section explores topics that focus on well-being, productivity, and personal growth. Whether you&apos;s a great day for coding!</p>
  <p className='content'>You&apos;re striving for work-life harmony or searching for your niche, we've got you covered.</p>
  
  <h2 className='heading1'>Featured Blogs on Lifestyle</h2>
  <ul>
      <li><WorkLife /></li>
      <li><NailNiche /></li>
      <li><InnovationTeamwork /></li>
      <li><BreakFear/></li>
  </ul>
  
  <p className='content'>Dive into these blogs to find inspiration and practical advice for leading a balanced and fulfilling life.</p>
</article>

    </div>
  )
}

export default LifeStyle
