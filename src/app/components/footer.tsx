import React from 'react'

const Footer = () => {
  return (
<footer>
  <div className="footer-container">
    <div className="footer-links">
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/technology">Technology</a></li>
        <li><a href="/lifestyle">Lifestyle</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <p>Follow Us:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/insight-wave" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.twitter.com/insight-wave" target="_blank">Twitter</a></li>
        <li><a href="https://www.facebook.com/insightwave" target="_blank">Facebook</a></li>
      </ul>
    </div>
    <div className="footer-info">
      <p>&copy; 2024 Insight Waves. All rights reserved.</p>
      <p>Email: <a href="mailto:info@yinsightwaves.com">info@insightwaves.com</a></p>
    </div>
  </div>
</footer>

  )
}

export default Footer
