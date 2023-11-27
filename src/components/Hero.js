import React from 'react'
import '../styles/Hero.css'

export default function Hero({ link, setLink }) {
    const handleAboutClick = ()=>{
        document.documentElement.scrollTop = 749;
        setLink(2)
    }
    return (
        <div className='Hero'>
            <div className="hero-intro">
                <div className="hero-intro-content">
                    <p className="greet">Hi</p>
                    <p className="name">I'm <span>Tanmay Patil</span></p>
                    <p className='info'>A Passionate <span>Web Developer</span></p>
                    <button className='aboutBtn' onClick={handleAboutClick}>About me &nbsp;<i class="fa-solid fa-arrow-down"></i></button>
                    <div className="links">
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-github"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-twitter"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-telegram"></i></a>
                        <a href="http://google.com" rel='noreferrer' target='_blank'><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <div className="hero-img-content"></div>
                <div className='hero-img-profile'></div>
            </div>
        </div>
    )
}
