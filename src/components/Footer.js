import React from 'react'
import '../styles/Footer.css'

export default function Footer({setLink}) {
  
  const onLinkHomeClick = ()=>{
    document.documentElement.scrollTop = 0;
    setLink(1);
}
const onLinkAboutClick = ()=>{
    document.documentElement.scrollTop = 749;
    setLink(2);
}
const onLinkSkillClick = ()=>{
    document.documentElement.scrollTop = 1498;
    setLink(3);
}
const onLinkEducationClick = ()=>{
    document.documentElement.scrollTop = 2247;
    setLink(4);
}
const onLinkWorkClick = ()=>{
    document.documentElement.scrollTop = 2996;
    setLink(5);
}
const onLinkExperienceClick = ()=>{
    document.documentElement.scrollTop = 3875;
    setLink(6);
}
const onLinkContactClick = ()=>{
    document.documentElement.scrollTop = 4624;
    setLink(7);
}
  return (
    <div className='Footer'>
      <div className="footer-links">
        <div className="footer-links-link" id='footer-links-link1'>
          <p>Tanmay Patil</p>
          <li>Thank you for visiting my Portfolio. Connect me on social media.</li>
          <li>May you keep rising High. Connect with me over live chat!</li>
        </div>
        <div className="footer-links-link" id='footer-links-link2'>
          <p>Quick Links</p>
          <li onClick={onLinkHomeClick}>Home</li>
          <li onClick={onLinkAboutClick}>About</li>
          <li onClick={onLinkSkillClick}>Skills</li>
          <li onClick={onLinkEducationClick}>Education</li>
          <li onClick={onLinkWorkClick}>Work</li>
          <li onClick={onLinkExperienceClick}>Experience</li>
          <li onClick={onLinkContactClick}>Contact</li>
        </div>
        <div className="footer-links-link" id='footer-links-link3'>
          <p>Contact Info</p>
          <li><i class="fa-solid fa-envelope"></i> &nbsp;+91 9892419181</li>
          <li><i class="fa-solid fa-phone"></i> &nbsp;www.tspatil03@gmail.com</li>
          <li><i class="fa-solid fa-map-location-dot"></i> Thane, India - 400605</li>
          <li>
            <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-twitter"></i></a>
          </li>
        </div>
      </div>
      <div className="footer-copyright">
        Designed By &nbsp;<span>Tanmay Patil</span>
      </div>
    </div>
  )
}
