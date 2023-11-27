import React from 'react'
import '../styles/Education.css'

export default function Education() {
  return (
    <div className='Education'>
      <div className="educationHeading">
        <i class="fas fa-graduation-cap"></i>
        <div className="educationHeadingContent">
          Education
        </div>
      </div>
      <div className="educationMain">
        <div className="educationMain-content">
          <a href="https://vit.edu.in/" target='_blank' rel='noreferrer'>
          <div className="institute">
            <div className="institute-img" id='bengg'></div>
            <div className="status">
              <p className='qualification'>Bachelor of Engineering in Computer Engineering</p>
              <p className='institute-name'>Vidyalankar Institute Of Technology | MU</p>
              <p className='institute-year'>Year: &nbsp;&nbsp;&nbsp; 2021-2025</p>
              <p className='institute-status'>Status: <span>Pursuing</span></p>
            </div>
          </div>
          </a>
          <a href="https://www.vpmthane.org/" target='_blank' rel='noreferrer'>
          <div className="institute">
            <div className="institute-img" id='hsc'></div>
            <div className="status">
              <p className='qualification'>HSC Science</p>
              <p className='institute-name'>B. N. Bandodkar College of Science | MSBSHSE</p>
              <p className='institute-year'>Year: &nbsp;&nbsp;&nbsp; 2019-2021</p>
              <p className='institute-status'>Status: <span>Completed</span></p>
            </div>
          </div>
          </a>
          <a href="https://www.jnanvikasmandal.com/New%20English%20School%20and%20Jr-College/index.html" target='_blank' rel='noreferrer'>
          <div className="institute">
            <div className="institute-img" id='ssc'></div>
            <div className="status">
              <p className='qualification'>SSC</p>
              <p className='institute-name'>New English School & Jr. College | MSBSHSE</p>
              <p className='institute-year'>Year: &nbsp;&nbsp;&nbsp; 2006-2019</p>
              <p className='institute-status'>Status: <span>Completed</span></p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}
