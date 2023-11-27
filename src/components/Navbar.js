import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar({ link, setLink }) {
    const onBarsClick = ()=>{
        if(document.getElementById('menu').checked === true){
            document.getElementById('bars').style.display = 'none'
            document.getElementById('xmark').style.display = 'block'
        }
    }
    const onXmarkClick = ()=>{
        if(document.getElementById('menu').checked === false){
            document.getElementById('bars').style.display = 'block'
            document.getElementById('xmark').style.display = 'none'
        }
    }
    
    const onLinkHomeClick = ()=>{
        document.documentElement.scrollTop = 0;
    }
    const onLinkAboutClick = ()=>{
        document.documentElement.scrollTop = 749.7999877929688;
    }
    const onLinkSkillClick = ()=>{
        document.documentElement.scrollTop = 1498.5999755859375;
    }
    const onLinkEducationClick = ()=>{
        document.documentElement.scrollTop = 2247.39990234375;
    }
    const onLinkWorkClick = ()=>{
        document.documentElement.scrollTop = 2997;
    }
    const onLinkExperienceClick = ()=>{
        document.documentElement.scrollTop = 3875.39990234375;
    }
    const onLinkContactClick = ()=>{
        document.documentElement.scrollTop = 4625;
    }
    return (
        <div className="Navbar">
            <div className="nav-logo">
                <div className="logo">Tanmay</div>
            </div>
            <input type='checkbox' id='menu'/>
            <div className="nav-links">
                <div className="nav-links-list" id='ul'>
                    <Link to="/" onClick={onLinkHomeClick} smooth className={`${link === 1 ? 'active' : ''}`}>Home</Link>
                    <Link to="/" onClick={onLinkAboutClick} smooth className={`${link === 2 ? 'active' : ''}`}>About</Link>
                    <Link to="/" onClick={onLinkSkillClick} smooth className={`${link === 3 ? 'active' : ''}`}>Skills</Link>
                    <Link to="/" onClick={onLinkEducationClick} smooth className={`${link === 4 ? 'active' : ''}`}>Education</Link>
                    <Link to="/" onClick={onLinkWorkClick} smooth className={`${link === 5 ? 'active' : ''}`}>Work</Link>
                    <Link to="/" onClick={onLinkExperienceClick} smooth className={`${link === 6 ? 'active' : ''}`}>Experience</Link>
                    <Link to="/" onClick={onLinkContactClick} smooth className={`${link === 7 ? 'active' : ''}`}>Contact</Link>
                    {/* <Link to="/" onClick={onLinkHomeClick} smooth className={`${link === 1 ? 'active' : ''}`}>Home</Link>
                    <Link to="/" onClick={onLinkAboutClick} smooth className={`${link === 2 ? 'active' : ''}`}>About</Link>
                    <Link to="/" onClick={onLinkSkillClick} smooth className={`${link === 3 ? 'active' : ''}`}>Skills</Link>
                    <Link to="/" onClick={onLinkEducationClick} smooth className={`${link === 4 ? 'active' : ''}`}>Education</Link>
                    <Link to="/" onClick={onLinkWorkClick} smooth className={`${link === 5 ? 'active' : ''}`}>Work</Link>
                    <Link to="/" onClick={onLinkExperienceClick} smooth className={`${link === 6 ? 'active' : ''}`}>Experience</Link>
                    <Link to="/" onClick={onLinkContactClick} smooth className={`${link === 7 ? 'active' : ''}`}>Contact</Link> */}
                </div>
            </div>
            <label htmlFor="menu" className='label'>
                <i class="fa-solid fa-bars" onClick={onBarsClick} id='bars'></i>
                <i class="fa-solid fa-xmark" onClick={onXmarkClick} id='xmark'></i>
            </label>
        </div>
    )
}