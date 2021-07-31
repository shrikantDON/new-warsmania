

import React from "react";
import deta from './SrcContent/cardsDeta/cardstyp2.js';
import h from './SrcContent/cardsDeta/cardsTyp1.js';
import Card from    "./models/cards/DifCards/Cards2.0.js";
import Card1 from "./models/cards/DifCards/Cards1.0.js";
import './utilities/globalLikeBostrap.css';
import KargilWar from './SrcContent/CardsForRender/KargilWar.js';
import "aos/dist/aos.css";
import './index.css';
import { useState } from "react";
import AudioPlayer from '../src/utilities/audioplayer/Audioplayer.js';
import firebase from ".././src/services/firebase";
import { func } from "prop-types";
import { useEffect } from "react";



    

 function  ShowCardContent(){


//       console.log(this.props.location);
// console.log(this.props.location.search);
var f;
var c;


   
    const [tite,settite]=useState("");
function geti(){



  const ref= firebase.firestore().collection("warslist").doc("kargilwar").get()
  var temp;
  ref.then((doc)=>{ 
    console.log(doc.data()['wartitle'])
    temp = doc.data()['wartitle']
    settite(temp);
  })
}

   
  useEffect(()=>{
 
  geti();
  
    
        },[]);
    

//some java script for css

      return(<>
      



      <a href="#modal-opened" class="link-1" id="modal-closed"><img className="infoI"  src="https://img.pngio.com/help-info-information-notice-icon-information-sign-png-512_512.png"></img></a>

<div class="modal-container" id="modal-opened">
  <div class="modal">

    <div class="modal__details">
      <h1 class="modal__title">Modal Title</h1>
      <p class="modal__description">Sentence that will tell user what this modal is for or something.</p>
    </div>

    <p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dic gvkjgjid eoti rtiurtuott55
    trt rtreoutyruitr r]
    r trtri0tuogr]t rt\
    r  t th5rtkrgr
    tr  uo5riuet
    r5 rg ouyrpigr
    t5 yrgipr yp[5
    f yu5tot
    46 rgiro5t
    
    g 5b6o=rko54igtyiojinj rtb0iip mbnopmnry 
        mhrt 4uohg oiygio uhjhoujfiji uogi o gfg joghoin ortiy ofgofdhoitg igvohbj  ghjghoeiojpodffjk 
        ghioiojhoitrouryonbljgh sr oi0 jibgy50igip vyrbi0 jjup-rt[ d-g-gh0ury y t-0hoi0 uty hpog 6-ou -r
         tyrt -tyuo-foybouiu[oeryuh o b -yk -0-=i0
         
    g 5b6o=rko54igtyiojinj rtb0iip mbnopmnry 
        mhrt 4uohg oiygio uhjhoujfiji uogi o gfg joghoin ortiy ofgofdhoitg igvohbj  ghjghoeiojpodffjk 
        ghioiojhoitrouryonbljgh sr oi0 jibgy50igip vyrbi0 jjup-rt[ d-g-gh0ury y t-0hoi0 uty hpog 6-ou -r
         tyrt -tyuo-foybouiu[oeryuh o b -yk -0-=i0
         
    g 5b6o=rko54igtyiojinj rtb0iip mbnopmnry 
        mhrt 4uohg oiygio uhjhoujfiji uogi o gfg joghoin ortiy ofgofdhoitg igvohbj  ghjghoeiojpodffjk 
        ghioiojhoitrouryonbljgh sr oi0 jibgy50igip vyrbi0 jjup-rt[ d-g-gh0ury y t-0hoi0 uty hpog 6-ou -r
         tyrt -tyuo-foybouiu[oeryuh o b -yk -0-=i0
         
    g 5b6o=rko54igtyiojinj rtb0iip mbnopmnry 
        mhrt 4uohg oiygio uhjhoujfiji uogi o gfg joghoin ortiy ofgofdhoitg igvohbj  ghjghoeiojpodffjk 
        ghioiojhoitrouryonbljgh sr oi0 jibgy50igip vyrbi0 jjup-rt[ d-g-gh0ury y t-0hoi0 uty hpog 6-ou -r
         tyrt -tyuo-foybouiu[oeryuh o b -yk -0-=i0 56=-o0potpr5re repellendus.</p>



    <a href="#modal-closed" class="link-2"></a>

  </div>
</div>

<div id="wape">
<h3 className="hHading"  > {tite}</h3>  
<div id="mainDivOfContnt">







<KargilWar/>



</div>



    
</div>





      </>)



     }



   
     



export default  ShowCardContent;

