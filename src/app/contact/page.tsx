import React from 'react'

const Contact = () => {
  return (
    <div>
<article className='article'>
  <h1 className='primaryHeading'>Contact Us</h1>
  <p className='content'>We’d love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out to us through any of the following methods:</p>
  <hr />
  <h2 className='secondaryHeading'>Get in Touch</h2>
  <p className='content'>Email: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
  <p className='content'>Phone: +92 123 456 7890</p>
  <hr />
  <h2 className='secondaryHeading'>Visit Us</h2>
  <p className='content'>Address: 123 Technology Street, Innovation Park, Karachi, Pakistan</p>
  <hr />
  <h2 className='secondaryHeading'>Follow Us on Social Media</h2>
  <ul>
    <li className='contentList'><a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
    <li className='contentList'><a href="https://www.twitter.com/yourprofile" target="_blank">Twitter</a></li>
    <li className='contentList'><a href="https://www.facebook.com/yourprofile" target="_blank">Facebook</a></li>
  </ul>
  <hr />
  <p className='content'>We look forward to connecting with you!</p>
</article>

    </div>
  )
}

export default Contact
