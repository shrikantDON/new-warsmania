import React, { useEffect } from 'react';

import './vxplayer.css';


function VxPlayer (props){

var idee=props.ide;


var ideeforpaly="playvx"+idee;

var ideeforpause="pausevx"+idee;
var ideeforplayer="plyervx"+idee;
var ideeforplaypauseunit="playpausevx"+idee;



let playing=false;


useEffect(() => {
 
 







document.getElementById(ideeforplayer).addEventListener("ended",()=>{



  var playbtn=document.getElementById(ideeforpaly);
  var pausebtn=document.getElementById(ideeforpause);


  document.getElementById(ideeforplayer).pause();  
  pausebtn.style.opacity=0;
  playbtn.style.opacity=1;
    

  playbtn.style.zIndex=4
  pausebtn.style.zIndex=2; 

    

playing=false;

  
})

document.getElementById(ideeforplaypauseunit).addEventListener("click",()=>{


  var playbtn=document.getElementById(ideeforpaly);
  var pausebtn=document.getElementById(ideeforpause);


  console.log("click on playpause unit")



      if(playing===false){
        document.getElementById(ideeforplayer).play();
    pausebtn.style.opacity=1;
    playbtn.style.opacity=0;

    playbtn.style.zIndex=2
    pausebtn.style.zIndex=4;       
       
    
    
   playing=true;





      }else{
  

        document.getElementById(ideeforplayer).pause();  
    pausebtn.style.opacity=0;
    playbtn.style.opacity=1;
      

    playbtn.style.zIndex=4
    pausebtn.style.zIndex=2; 

      

  playing=false;


      }
    

      


})

}, []);
  // function letsPlay() {
  //   d.play();
 
  //   document.getElementById(idee).classList.add("active");
  // }

 

 

return   (



          <>
     <audio id={ideeforplayer} src={props.uid}>


t


</audio>





    

     <div className="ppu" >


     <img className="vxIMG" src="https://s.alicdn.com/@sc04/kf/H38c9a00ece4e4ca3a8995a98403ad197J.png_300x300.png"></img>

<div  id={ideeforplaypauseunit}>



    
<img className="vxpause" id={ideeforpause} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"  ></img>
     <img   className="vxplay" id={ideeforpaly} src="https://i.pinimg.com/originals/cf/1e/1d/cf1e1d1625e760ef56dc610dad87462a.png" ></img>

</div>

     </div>


    




          </>
)








}






  







export default VxPlayer;