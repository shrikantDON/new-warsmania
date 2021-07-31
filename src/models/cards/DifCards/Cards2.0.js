


import stl2 from '../cards.module.css'



function Cards2(props) {


    return(


        <>

<figure className={stl2.article}>

<img src ={props.imgsrc}  alt="h"/>

<figcaption className={stl2.Figercap}>

    <h3>{props.title}</h3>

    <p>

      {props.SomeInfo}

    </p>

</figcaption>

</figure>
        </>
    );
    
}


export default Cards2;