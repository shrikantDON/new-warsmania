import React from 'react';


import './globalLikeBostrap.css';




function SrinkRAPIMG(props) {
    


     let stl={


      backgroundImage: "url("+props.url+")"


     }


    return(<>
    
    <main>
  <div className="c-glitch" style={stl}>
    <div className="c-glitch__img" style={stl}></div>
    <div className="c-glitch__img" style={stl}></div>
    <div className="c-glitch__img" style={stl}></div>
    <div className="c-glitch__img" style={stl}></div>
    <div className="c-glitch__img" style={stl}></div>
  </div>

  
</main>

     </>)
    

}




export default SrinkRAPIMG;