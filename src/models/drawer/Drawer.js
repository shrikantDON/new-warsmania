import React from 'react';
import './drawer.css';

import  Cards from "../cards/Cards.js";
import Slider from "../slide_show/Slider.js";

import BGMswitch from "../BGSwitch/Switch.js";


import SearchBar from "../search bar/Searchbar.js";




import music from './backgroundMusic.m4a';
import { Link } from 'react-router-dom';






class Drawer extends React.Component{

  componentDidMount(){
    
  }

    render(){
      
        return (
            <>
            <nav className="menu" style={{hue: 227.42120705273322,zIndex:500000}} >
              <input className="menu__toggle" type="checkbox" id="menu-toggle" />
              <label className="menu__toggle-label" for="menu-toggle"></label>
              <label className="menu__toggle-label menu__toggle-label--closer" for="menu-toggle">
                <svg className="menu__icon" preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                </svg>
                <svg className="menu__icon" preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                </svg>
              </label>
              <ul className="menu__content">
                <li className="menu__item" style={{x: 24, y: 23}}><a className="menu__link" href="#HOME"  >play backgroundMusic</a></li>
                <li className="menu__item" style={{x: 64, y: 40}}><a className="menu__link" href="#ABOUT">ABOUT</a></li>
               
             <Link to="/createwar" ><li className="menu__item" style={{x: 70, y: 74}}><a className="menu__link" href="#WORK">editor</a></li></Link>  
             <li className="menu__item" style={{x: 17, y: 68}}><a className="menu__link" href="#CONTACT">CONTACT</a></li>
             
             
             
              </ul>
            </nav>

{/*             
            <video autoPlay muted="muted" loop  id="vidB">

<source  src={vid} type="video/mp4">


</source>
</video> */}

<BGMswitch/>
<SearchBar/>
            <Slider/>
            <Cards/>

        


{/* 
creating cardtype 1 whith map method */}


            




             
            <svg style={{position:" absolute", left: 100+"%"}}>
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="BLUR"></feGaussianBlur>
                  <feColorMatrix in="BLUR" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="GOO"></feColorMatrix>
                  <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
              </defs>
            </svg>
       </> );
    }
}



export default Drawer;