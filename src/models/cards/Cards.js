import React from 'react';


import Card1 from './DifCards/Cards1.0.js';
import card1_1 from '../../SrcContent/cardsDeta/cardsTyp1.js';

import Card2 from './DifCards/Cards2.0.js';

import card2_2 from '../../SrcContent/cardsDeta/cardstyp2';

import  stl from "./cards.module.css";


import Card3 from './DifCards/card typ 3/Cards3.0.js';







 function creactCard2(val) {

   return( <Card2

    imgsrc={val.imgSrc}
  
    title={val.title}
  
    SomeInfo={val.SomeInfo}
  
  
     
  
  
      />);
     
 }





function creactCard1(val,index){


    return(
    <Card1
  
  
      src   ={val.src}
  
    title  ={val.title}

    id={index}

  

      
            />
    );
  
   }
  
  



function Cards( props){
    
        return(
<div className="wrapper">

<h2  className={stl.HedingTpy2}>

<strong>

some Indias famous wars

<span>
 <div className={stl.wrapper}>

 <div className={stl.cards}>


{ card1_1.map(creactCard1)}

</div>



<h2  ><strong >  some about world war</strong></h2>

<div className={stl.news}>

      
    


    {

     card2_2.map(creactCard2)

    }



</div> 

{/* <Card3/> */}


    </div></span></strong></h2>
</div>
        );
    
  }

export default Cards;