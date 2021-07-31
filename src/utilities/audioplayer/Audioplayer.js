import React, { useEffect } from 'react';

import './audioplayer.css';

import $ from 'jquery';




function AudioPlayer (props){

var idee=props.ide;


var ideeforpaly="play"+idee;

var ideeforpause="pause"+idee;
var ideeforplayer="plyer"+idee;
var ideeforplaypauseunit="playpause"+idee;
let ideeforforward ="forward"+idee;
let ideeforbackward="backward"+idee ;

let iddeforcurrenttime="currenttime"+idee;
let ideefortotalduration="totalduration"+idee;


let playing=false;


useEffect(() => {
 
 

  
 
    if(document.getElementById(ideeforplayer).duration>60){

       

 var dinsece=  parseInt(document.getElementById(ideeforplayer).duration/60)*60-parseInt(document.getElementById(ideeforplayer).duration)==0? "00": parseInt(document.getElementById(ideeforplayer).duration/60)*60-parseInt(document.getElementById(ideeforplayer).duration);


     
     document.getElementById(ideefortotalduration).innerText=parseInt(document.getElementById(ideeforplayer).duration/60)+"."+dinsece;




    }else{





      
      document.getElementById(ideefortotalduration).innerText="00."+ parseInt(document.getElementById(ideeforplayer).duration);


    }
    


    document.getElementById(ideeforbackward).addEventListener("click",()=>{


      console.log("click on back ward btn ");

      var ply=document.getElementById(ideeforplayer);

      if(ply.currentTime-3>=2){


  console.log("going to update time by -2 seconds")

           
           ply.currentTime=ply.currentTime-2;
            

      }else{



        console.log("cANT UPDATE TIME by adding -2 seconds")
      }



    })



  document.getElementById(ideeforplayer).ontimeupdate=()=>{




if(document.getElementById(ideeforplayer).currentTime>60){

       



       
  document.getElementById(iddeforcurrenttime).innerText=parseInt(document.getElementById(ideeforplayer).currentTime/60)  +"."    +  (parseInt(document.getElementById(ideeforplayer).currentTime)-((parseInt(document.getElementById(ideeforplayer).currentTime/60))*60));


}else{




  document.getElementById(iddeforcurrenttime).innerText="00."+parseInt(document.getElementById(ideeforplayer).currentTime)


}

  }

document.getElementById(ideeforforward).addEventListener("click",()=>{

console.log(" click on forward btn")


var ply=document.getElementById(ideeforplayer);

if(ply.currentTime+4<ply.duration){

console.log("going to update time to 2 seconds");


ply.currentTime=ply.currentTime+2;



}else{



  console.log("cANT UPDATE TIME by adding 2 seconds")
}






})








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

      

      <audio id={ideeforplayer} src={props.uid} preload>


      sorry no enternet


      </audio>

 <div class="con">
 
  <main  className="mainplayerdiv">
    <div class="album-art">
      <img  preload
      src="https://upload.wikimedia.org/wikipedia/en/0/00/TheVines_WinningDays.jpg" alt="" />
    </div>
    <div class="player">


     <img className="forwrad"  id={ideeforforward}  src="https://lh3.googleusercontent.com/proxy/drsttGk3wO_T08HZoJUNs7q1yI5AgNzdid0KsHDTAPgPw2pCb1G-2jrh94np41057iobHmdoZ-OheKoFMXFDqCTjJJnMLLO3cLu_UeaMBNXZOKvhqzCUDAbitox8a9Gz5H52RKkD"></img>



     <div  className="playpauseUnit" id={ideeforplaypauseunit}>





     <img className="pause" id={ideeforpause} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png"  ></img>
     <img   className="play" id={ideeforpaly} src="https://lh3.googleusercontent.com/proxy/y4HDg5VyKn_hKz47o5HksjWIb9uqCvcpiRgUPzBB_yYwSryK0P4g8Ik8gvCz8XPSHsmASpqGOgX0ldOWPmZMH-iCadnTen59lGU84zwrRhW_LRVK54K1tZiN2pmyAwmpjesjuE4_OOdwLQ" ></img>


     </div>


     <img class="backward" id={ideeforbackward}  src="https://findicons.com/files/icons/2315/default_icon/256/media_fast_backward.png"></img>
    </div>
  </main>
  <footer>

    




      
  <div  className="currenttime" id={iddeforcurrenttime}>00.00</div>
    <div className="totalduration" id={ideefortotalduration}>00</div>
   

    <div class="title">{props.playertitle}
    </div>


    <div class="time-tracker">
    {props.aboutclip}
    </div>
  </footer>
</div>

          </>
)








}






  







export default AudioPlayer;