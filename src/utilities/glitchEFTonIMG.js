import React from 'react';



function GlitchOnIMG(props){



  var style={

    background:"url("+ props.img +")" 

  }

return(<>

<div class="IMGarea">


<div class="glitch">
  <div class="glitch__item" style={style}></div>
  <div class="glitch__item" style={style}></div>
  <div class="glitch__item" style={style}></div>
  <div class="glitch__item"  style={style}></div>
  <div class="glitch__item" style={style}></div>

</div >




    <div class="info">
      <h1>{props.title}</h1>
      <p>{props.artical}</p>
    
    
    </div>
  </div>


</>)

}

export default GlitchOnIMG;