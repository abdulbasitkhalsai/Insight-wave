import React from 'react'
import OnlineLearning from '../online-learning-revolution/page'
import TechUpdate from '../tech-update/page'
import FullStack from '../the-full-stack-path/page'
import AIBeginner from '../ai-for-beginners/page'

const Technology = () => {
  return (
    <div>
      <article className='article'>
  <h1 className='primaryHeading'>Technology: Innovation Driving the Future</h1>
  <p className='content'>Technology is constantly evolving, shaping the world around us. From the rise of artificial intelligence to advancements in web development, staying ahead in tech is crucial for businesses and individuals alike. On this page, you'll find articles and insights that dive into the latest trends and breakthroughs.</p>
  
  <h2 className='heading1'>Featured Blogs on Technology</h2>
  <ul>
      <li><TechUpdate /></li>
      <li><OnlineLearning /></li>
      <li><FullStack /></li>
      <li><AIBeginner /></li>
  </ul>
<br />
<br />  
  <p className='content'>Explore these articles to stay informed about the latest developments in tech and how they can impact your life or business.</p>
</article>

    </div>


  )
}

export default Technology
