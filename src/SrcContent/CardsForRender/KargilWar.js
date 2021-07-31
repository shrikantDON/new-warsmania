import  React from 'react';
import "./AllsWars.css";
import AOS from 'aos';

import AudioPlayer from '../../utilities/audioplayer/Audioplayer.js';

import "../../utilities/globalLikeBostrap.css";
import GlitchIMG from '../../utilities/glitchEFTonIMG.js';


import CardArtical from '../../utilities/Card_artical/Card_artical.js';

import ImagewSRINKrap from '../../../src/utilities/GLITCHimgWITHsrinkRAP.js';


import Vxplayer from '../../../src/utilities/vxAudioPlayer/vxplayer.js';


class KargilWar extends React.Component{

   
     constructor(props){

      super(props);
    


         
        this.state={  yes1:"false",
        yes:[false,false,false], };
 

     }

    static func( ){
   
   
       
      //  if(this.state.yes!== "true"){

        console.log("yes its working ");
   
        
   
              //  }
               
               
      }


      render(){

                
  var isTR=[false,false,false];
          
     
            
            
   
         
                window.addEventListener("scroll",()=>{

   
                  // console.log(window.scrollY)



                                               
      if(this.state.yes[1] ===false){        

        if(window.scrollY<2650){


          console.log("yes have false");
                                  
               //      window.removeEventListener("scroll",()=>{});
               
             
                    
                 }else{
                  
                  
  
                 isTR[1]=true;

                 this.setState((pre)=>({

                yes:[...isTR]

                 }))

                  console.log("yes have true");
                     // window.removeEventListener("scroll",func);
                    
                 }}
                             
      if(this.state.yes[0] ===false){        

                  if(window.scrollY<500){
   

                    console.log("yes have false");
                                            
                         //      window.removeEventListener("scroll",()=>{});
                         
                       
                              
                           }else{
                            
                            
            
                           isTR[0]=true;

                           this.setState((pre)=>({

                          yes:[...isTR]

                           }))
          
                            console.log("yes have true");
                               // window.removeEventListener("scroll",func);
                              
                           }}


                });
                console.log("gv")
              
            //          // or simply just AOS.init();
                         AOS.init(
         
                           {
         
                                 duration:2000,
         
                                 
                                 
         
                           }
                         );
         


// css classes for making ui 

//  smallINsmallWIDTH - make paragrafh responsine by 15 px font 

//resoHading -- hading responsive by 22px font

//reso2Hading-- hading responsive by 17 px font

//anotherReso-- a another artical css responsive by 16px font
//BigHead--  hading by 30px font

//smallHead -- sub hading by px font 
//  articalforInfo -- style for saying story or datiels
//aligtINcenter-- alingh the item in center whith responsivenis in horizontly









   



return (<>

       


<div   id="FirstDivConent"  >


<p  id="artical" className="smallINsmallWIDTH"   data-aos={"fade-left"}  data-aos-delay={"2800"}>


Kargil War or Kargil conflict happened between May and July 1999 within the Kargil district of Jammu and Kashmir.
 The war signifies an armed conflict between India and Pakistan.
 What was Kargil War 1999 was all about? What were the military and diplomatic challenges?
 Why the war took place? What is the history behind the Kargil War?


 {/**  glitch effect on Let's Have a Look in History -   start */}

 {/* <div className="contain">
  <h1 >Let's Have a Look in History -</h1>
  <h1>Let's Have a Look in History -</h1>
  <h1>Let's Have a Look in History -</h1>
</div> */}


<p class="logo-1  glow" >
Let's Have a Look in History -
    </p>

{/**  glitch effect on Let's Have a Look in History -   end */}
</p>
  <p   id="artical2"  data-aos={"fade-right"} className="smallINsmallWIDTH"  data-aos-delay={"3000"}>

  26 July is observed as Kargil Vijay Diwas annually to commemorate the sacrifices made by the 
  soldiers in the Kargil War. No doubt the war represents an example of high altitude warfare
   in mountainous terrain and constitutes significant logistical problems for the counter sides.
   <br/>
   <br/>
 
  <span className="BigHead" >Let's go in past
   </span>
    </p>


<br/>
<br/>
<br/>
<br/>




     <div className="contain">
     
  <h1 >Loction_</h1>
  <h1>Loction_</h1>
  <h1>Loction_</h1>
</div>
<br/>
  

      <h2  className={this.state.yes[0]===false?"j":"typing" }  style={{width:51+"ch",left:-5+'px'}}>
      
      Batalik Sector of KarKaun Village Kargil, 1999 May
      
      
      
      </h2>
  


      <br/>
<br/>

  <div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<div  data-aos={"fade-top"} >

<GlitchIMG  


img="https://images.newindianexpress.com/uploads/user/imagelibrary/2012/5/15/22/w600X390/24kargil01.jpg"




title="A MAN NAMED TASHI"

artical="---      A man named Tashi went a short distance from his house to find his missing yak.

Then suddenly his eyes fell on 6 gunmen dressed in black who were making a place to live in bunkers by removing stones.
"

 /></div>

<br/>


  
  <div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="Tashi was a little nervous seeing this,
 he went quickly and took this matter to the local Indian soldiers.
"


/>
</div>

<br/>
<br/>




  <div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="
When the Indian Army investigates this movement on Bungee Hill with its telescopic equipment, it comes to know about the presence of some people on Bungee Hill.
so


Soon a  team of four or five soldiers are sent from the
 army side to investigate the ongoing infiltration
  on Banji Hill.
"


/>
</div>
<br/>
<br/>
<br/>
<div className="contain">
     
     <h1 >kargil,banji hill_</h1>
     <h1>kargil,banji hill_</h1>
     <h1>kargil,banji hill_</h1>
   </div>
   <br/>
  <div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="5 jawans who came to Bungee Hilltop are captured and taken hostage by intruders, 
they are tortured and their bodies are cut into pieces inhumanely
 "


/>



<Vxplayer

 
uid="https://www.fesliyanstudios.com/play-mp3/7040"
ide="2"



/>
</div>
  
<br/>


<ImagewSRINKrap

 url="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/12/whatsapp-image-2018-12-31-at-11-1546236269.jpeg"




/>



<br/>
<br/>

<div className="contain">
     
     <h1 >Location_</h1>
     <h1>Location_</h1>
     <h1>Location_</h1>
   </div>
   <br/>
<h2  className={this.state.yes[1]===false?"j":"typing" }  style={{width:48.5+"ch",left:-5+'px'}}>
      
     6 may 1999 india new delhi , Ministry Of DEFENCE
      
      </h2>
  <div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="As soon as this news reached 
the Indian Defense Ministry in New Delhi,
 there was panic in the office."


/>
</div>


<br/>
<br/>
<br/>

<h2  className='smallHead' data-aos={"fade-right"} >that year's foreign ministry spokesman R.S. Jassal says</h2>

<br/>
<br/>

<br/>
<br/>


<div style={{position:"relative",top:100+'px'}}   data-aos={"fade-left"} >  
<AudioPlayer


uid="https://firebasestorage.googleapis.com/v0/b/warsmania-b16ef.appspot.com/o/AudioCutter_India_Vs_Pakistan__How_1999_Kargil_War_was_started_and_who_Won_it__(%5B1%5D.mp3?alt=media&token=bf80f487-14e0-453c-acd5-b17a8199cc2d"
ide="1"

aboutclip=" this is a very good line of ouur spoke master"
playertitle="spokeman rs jssal"
/> 
</div>




<div     data-aos={"fade-right"} 
className=" smallHead  " >

This was the first martyrdom in the war of Kargil and not knowing how many martyrs were left to be done.
</div>


<br/>
<br/>
<div className="contain">
     
     <h1 >Location_ </h1>
     <h1>Location_ </h1>
     <h1>Location_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

8 may 1999 pakistan islamabad
</div>









<div style={{position:"relative",top:100+'px'}}   data-aos={"fade-left"} >  
<GlitchIMG  


img="https://i.dawn.com/large/2020/06/5ee9714c93f04.jpg"




title="islamabad headqurters"

artical="When the news of the ongoing stir in the Indian Defense Ministry reached the Pakistan Islamabad Headquarters,
 this news caused panic in the Islamabad Head Quarters and because of this.
"

 />
</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="contain">
     
     <h1 >Date_ </h1>
     <h1>Date_ </h1>
     <h1>Date_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

9 may 1999 
</div>


<br/>
<br/>
<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="Pakistani army does heavy arty shelling in Kargil and starts firing 
shells in Kargil and then a Pakistani cannonball falls on the Indian Ammunition 
Depot made in Kargil where Indian ammunition is kept and there is a huge Explosion
 takes place And the Indian Ammunition Depot is completely ruined. And in this way 
 India has a loss of 127 crores on the first day itself.
"
/>
</div>

<br/>
<br/>

<div className="contain">
     
     <h1 >Date_ </h1>
     <h1>Date_ </h1>
     <h1>Date_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

10 may 1999 
</div>
<br/>



<div style={{position:"relative",top:100+'px'}}   data-aos={"fade-left"} >  
<GlitchIMG  


img="https://www.orfonline.org/wp-content/uploads/2018/08/vajpayee-1280x720.jpg"




title="india comes in action"

artical="By May 10, a lot of Pakistan's arty shelling had started taking place in Kargil,
 due to which there was a huge briefing in the Indian Cabinet Committee on Security, 
also known as the OPS room. And now it was necessary for the Indian Army to be alert.
"

 />
</div>
<br/>

<br/>
<br/>
<br/>
<br/>

<div className="contain">
     
     <h1 >Date_ </h1>
     <h1>Date_ </h1>
     <h1>Date_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

14 may 1999 
</div>
<br/>



<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="On May 14, a search contingent of the Jat Regiment of the Indian Army is sent,
 when the regiment reaches Kargil, it camps there and starts resting.
  the Pakistani army takes advantage
  of this and kidnaps Indian Captain Saurabh Kalia and some of his companions.
 What happened after that was against the rules of any war.
"
/>
</div>


<br/>
<p   id="artical2"  data-aos={"fade-right"} className="smallINsmallWIDTH"  data-aos-delay={"3000"}>
Saurabh Kalia
tortured by Pakistani army by burning body with cigarettes,piercing 
 ear Drum with hot rods, puncturing eyes before removing them ,breaking most of the teeth and bones ,
 fractures of the skull, cutting the libs, chipping of nose, chopping off limbs and private
  organs besides inflicting all sorts of physical and mental torture and finally shooting him dead 
  <br/>
  <br/>
  Saurabh Kalia was a brave son of Mother India.
    </p>

<br/>
<br/>
<ImagewSRINKrap

 url="https://im.indiatimes.in/content/2017/Aug/sourabh_kalia_1501668543.jpg"




/>


<br/>
<br/>

<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="Whatever happened to Indian Captain Saurabh Kalia was an
 inhuman and sad incident but now India has understood that this is not
  just a small infiltration on Kargil but there is 
a big conspiracy of Pakistani Army behind it.
"
/>
</div>

<br/>
<br/>

<p   id="artical2"  data-aos={"fade-right"} className="smallINsmallWIDTH"  data-aos-delay={"3000"}>
Pakistani infiltrators were sitting in more than 100 bunkers with huge ammunition in
 important areas like Muskok, Daras, Kagsar and Batalik in Indian kargkargil area. The
  main battle of Kargil was in Daras because it
The Indian National 
Highway No.1 was very close to it  . The Pakistani infiltrators intended
 to block this highway with the help of Daras so that Siachen would be 
 removed from India's possession. Because this was the only way to connect India
  with Siachen. Pakistanis sitting on the high hills of Daras could see very closely even the
 smallest movement
  on the highway and Pakistani intruders used to open fire at the slightest movement.
    </p>

<br/>
<br/>


<div     data-aos={"fade-left"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="Pakistani infiltrators had a large amount of ammunition .
you can see in this images

"
/>
</div>
<br/>

<br/>
<ImagewSRINKrap

 url="https://upload.wikimedia.org/wikipedia/commons/c/c5/Kargil_war-Captured_weapons_of_Pakistan.jpg"




/>

<br/>


<br/>

<div     data-aos={"fade-left"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="
Pakistani attackers were firing 50 bullets in response 
to one bullet. Such a person can do this only when his position is 
very good and he has a lot of ammunition. Pakistani attackers had a
 large number of stringer missiles, anti aircraft, machine guns, multi barrel guns, mm guns.


"
/>
</div>
<br/>

<CardArtical

artical="
After this painful incident with Jat Regiment Captain Saurabh
 Kalia and his comrades, it became clear that this was not
  a petty infiltration but a war of Pakistan.

  These incidents were sent to the Indian Defense Ministry on 18 May.

"
/>
<br/>
<br/>
<div className="contain">
     
     <h1 >Date_ </h1>
     <h1>Date_ </h1>
     <h1>Date_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

19 may 1999 
</div>
<br/>



<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="Now the Defense Ministry had understood that no one else but Pakistani 
infiltrators were behind all these incidents. And on 19 May 1999, the Indian Defense Ministry 
formally declares that the Kargil War begins. Now this war was about to take a big turn ahead
"
/>
</div>
<br/>
<br/>


<br/>


<br/>

<div className="contain">
     
     <h1 >Date_ </h1>
     <h1>Date_ </h1>
     <h1>Date_ </h1>
   </div>

   

<br/>

<div     data-aos={"fade-right"} 
className=" smallHead  " >

24 may 1999 
</div>
<br/>



<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="On the day of 24th May, in the Indian oops room, 
there was a big conversation between the top officers of the
 Indian Army, Air Force and Navy. In this dialogue, 
the Army sought help from the Indian Air Force and the Navy to win the war. 
Pakistani infiltrators had entered about 11 kilometers inside the Indian border by 27 May.                                                          his war was about to take a big turn ahead
"
/>
</div>                      
<br/>

<div     data-aos={"fade-right"} 
className="smallINsmallWIDTH  articalforInfo" >


<CardArtical

artical="In this way, the Indian Air Force
 started its Operation Safed Sagar on 26 May.
  And the next day on 27 May itself, one of its fighter aircraft 
mig27 was sent to the Kargil war, but on 27 May there was an accident.                                  
"
/>
</div>  
<br/>    

                                                                                                 
                                                                                                                                                                                                                                                                                             
                                                                                   
<br/>
<div style={{position:"relative",top:100+'px'}}   data-aos={"fade-left"} >  
<GlitchIMG  


img="https://c.ndtvimg.com/2019-03/e25e5rbg_mig-21-bison_625x300_01_March_19.jpg"




title="indian piloat nachiketa"

artical="As soon as the fighter plane enters the enemy territory, 
the pilot of the fighter plane Nachiketa thinks of attacking the enemies.
 But the enemy takes advantage of the height and attacks them with a stringer
  missile. This stringer missile collides with the fighter plane, before the
   plane explodes, the pilot of the aircraft Nachiketa opens his parasuit 
   and starts flying in the air. But they have an accident and their parachute 
   lands inside the Pakistani border. The Pakistanis
 capture Nachiketa, the pilot of the Indian fighter plane.
"

 />
</div>

<br/>
<br/>


<br/>
                                                                          
</div>


</>);

      }
}

export default KargilWar;