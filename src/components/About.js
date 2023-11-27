import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div className='About'>
      <div className="aboutHeading">
        <i class="fa-solid fa-user"></i>
        <div className="aboutHeadingContent">
          About Me
        </div>
      </div>
      <div className="aboutMain">
        <div className="aboutMain-img">
          <div className="aboutMain-img-content">
            <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image class="home__blob-img" x="50" y="60" href="assets/img/perfil.png" />
              </g>
            </svg>
            <div className="aboutMain-img-image"></div>
          </div>
        </div>
        <div className='aboutMain-content'>
          <div className="aboutMain-content-info">
            <p className='aboutMain-content-info-greet'>I'm Tanmay</p>
            <p className='aboutMain-content-info-job'>Full Stack Developer</p>
            <p className='aboutMain-content-info-p1'>I am a results-driven web developer with a strong background in creating dynamic and innovative websites. My passion for coding and problem-solving has led me to build various projects that showcase my skills in HTML, CSS, JavaScript, and more.</p>
            <p className='aboutMain-content-info-p2'>I thrive on learning new technologies and implementing them to bring ideas to life. With a keen eye for design and a commitment to creating seamless user experiences, I am dedicated to delivering high-quality web solutions.</p>
            <p className='aboutMain-content-info-p3'>Let's collaborate and turn your vision into reality. Feel free to explore my portfolio and get in touch with me for exciting opportunities!</p>
            <div className="aboutMain-content-info-contact">
              <p className='p-email'>Email: <a href="mailto:www.tspatil03@gmail.com">www.tspatil03@gmail.com</a></p>
              <p className='p-mob'>Mobile: <a href="tel:+9892419181">9892419181</a></p>
            </div>
            <a href="http://localhost:3000/resume.pdf" download style={{textDecoration: 'none'}}>
            <button className='aboutMain-content-info-btn'>Resume <i class="fa-solid fa-download"></i></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
// 479 467