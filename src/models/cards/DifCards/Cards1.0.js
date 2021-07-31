


import  stl1 from '../cards.module.css';
import {onclickCard} from '../../../utilities/onclickCard.js';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Cards1(props){



    return(



        <>



    <figure className={stl1.card} >

        <img src={props.src} alt=""/>

        <figcaption  className={stl1.fig}     onClick={()=>{
            onclickCard(  window.open("/fgreejjrgrgfrmberdm?q="+props.id))
        
     }} > 
        
  
  
  {props.title}
   </figcaption>

    </figure>
  </>
    );




}

export default Cards1;