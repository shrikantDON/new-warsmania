

import React from "react";

import  stl3 from './card3.module.css';




function card3(props) {



    return(

        <>
<div className={stl3.wrapper}>
        <div className={stl3.card}>
            <img className={stl3.imgCssS} src=" https://drive.google.com/uc?export=view&id=0BzFF7FmbJUo5MWhVdXk1UUIyanM  "></img>
            <div className={stl3.descriptions}>
                <h1  className={stl3.HedingCss}>John Wick 3</h1>
                <p  className={stl3.about}>
                    After gunning down a member of the High Table -- the shadowy internat
                </p>
                <button className={stl3.BtnCss}>
                    <i className="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>
    </div>







        </>
    );
    
}


export default card3



















