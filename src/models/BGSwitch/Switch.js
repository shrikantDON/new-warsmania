
import React from "react";

import  './switch.css';

import music from '../drawer/backgroundMusic.m4a';

let bm = new Audio();
function play(){
    console.log("djowjodjwo");

    bm.src = music;
    bm.play();
  
    bm.addEventListener('ended',()=>{
  
      console.log("ended");
  
      bm.play();
    })
  }

function Switch() {
    
  var t=false;

    function cheack() {

        

        var x=document.getElementById('toggle').value;

          if(t==false){
          t=true;
          play();

          }else{
     
              
            t=false;
            bm.pause();

          }

        console.log(x);
        
        
    }
            

  return(



    <>
        <input type="checkbox" id="toggle"    onClick={()=>{ cheack()}}/>
<label for="toggle" class="toggleWrapper">
    <div class="toggle"></div>
  </label>


    <div  id="swB">

 <h1 id="bgHint"> Background music</h1>
 
    
    </div>

    
    </>
  );

}

export default Switch;