import React from 'react';
import './editor.css';
import firebase from "../services/firebase";




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";




class Edi extends React.Component {



  constructor(props) {
    super(props);
    this.state = {

      warlist: ["nodata"],
      currentWAR7: null,
      wardata : {},
       subHADINGtxtEN:[]
       ,
       
   currentnsbr : ["hello","hello1","hello2"]

    }


  }

  static wars = [];
  static currentWAR = null;


  componentDidMount() {


    var tryingformakingnewwar = false;

    function getsetdata() {






      firebase.firestore().collection('warslist').doc(document.getElementById("inputareaforhindi").value).set({
        mainHADING: document.getElementById("inputareaforhindi").value,
        nsbr: [],
        glowingTXTeng: [],

        glowingTXThindi: [],
        glitchLOCATIONttxt: [],

        hoverTXTwithGLITCHimgURL: [],

        hoverTXTwithGLITCHimgENG: [],
        hoverTXTwithGLITCHimgHINDI: [],
        glitchIMG: [],
        subHADINGtxtENG: [],

        subHADINGtxtHINDI: [],
        mainTXThindi: [],

        mainTXTeng: []
        ,


        mainMCplayer: [],
        subMCplayer: [],
        typTXT: []




      })



      firebase.firestore().collection("availebleWARname").doc("names").update({

        nameswar: firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value)
      })



      Edi.currentWAR = document.getElementById("inputareaforhindi").value;






    }



    document.getElementById("addwar").addEventListener("click", () => {



      tryingformakingnewwar = true;



    })









    function updatelightTXT() {



      const ref9 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref9.then((doc) => {

        temp = doc.data()['nsbr']
        console.log(temp)


        var val = 0;
        console.log(temp.length)

        for (let index = 0; index < temp.length; index++) {


          var str = temp[index];

          console.log(str);

          if (str.startsWith("lightTXT")) {

            console.log(str.startsWith("lightTXT"));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

          "glowingTXThindi": firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value),
          "glowingTXTeng": firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforenglish").value),

          'nsbr': firebase.firestore.FieldValue.arrayUnion("lightTXT" + val),
        })

        val = 0;

      })


    }




    function updateSUBHADING() {



      const ref4 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref4.then((doc) => {

      


        var val = 0;
       
        temp = doc.data()['nsbr']
        for (let index = 0; index < temp.length; index++) {

        
          var str = temp[index];

          console.log(str);

          if (str.startsWith("subhadingTXT")) {

            console.log(str.startsWith("subhadingTXT"));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

         

          'subHADINGtxtENG': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforenglish").value),


          'subHADINGtxtHINDI': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value),
          'nsbr': firebase.firestore.FieldValue.arrayUnion("subhadingTXT" + val),
        })

        val = 0;
       
        console.log(temp)
        console.log(temp.length)
      })



    }








    function updateglitchLOCATION() {



      const ref5 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref5.then((doc) => {

        temp = doc.data()['nsbr']
        console.log(temp)


        var val = 0;
        console.log(temp.length)

        for (let index = 0; index < temp.length; index++) {


          var str = temp[index];

          console.log(str);

          if (str.startsWith("glitchLOCATION")) {

            console.log(str.startsWith(""));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

          'glitchLOCATIONttxt': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value),

          'nsbr': firebase.firestore.FieldValue.arrayUnion("glitchLOCATION" + val),
        })

        val = 0;

      })



    }





    function updatetextHOVERimg() {






      const ref6 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref6.then((doc) => {

        temp = doc.data()['nsbr']
        console.log(temp)


        var val = 0;
        console.log(temp.length)

        for (let index = 0; index < temp.length; index++) {


          var str = temp[index];

          console.log(str);

          if (str.startsWith("TXThoverimg")) {

            console.log(str.startsWith("TXThoverimg"));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

          'hoverTXTwithGLITCHimgHINDI': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value),

          " hoverTXTwithGLITCHimgURL": firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforurl").value),

          "hoverTXTwithGLITCHimgENG": firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforenglish").value),

          'nsbr': firebase.firestore.FieldValue.arrayUnion("TXThoverimg" + val),
        })

        val = 0;

      })



    }






    function updateglitchIMG() {


      const ref7 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref7.then((doc) => {

        temp = doc.data()['nsbr']
        console.log(temp)


        var val = 0;
        console.log(temp.length)

        for (let index = 0; index < temp.length; index++) {


          var str = temp[index];

          console.log(str);

          if (str.startsWith("glitchIMG")) {

            console.log(str.startsWith("glitchIMG"));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

          'glitchIMG': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforurl").value),

          'nsbr': firebase.firestore.FieldValue.arrayUnion("glitchIMG" + val),
        })

        val = 0;

      })




    }





    function updatetypingTXT() {





      const ref8 = firebase.firestore().collection("warslist").doc(Edi.currentWAR).get();
      var temp = [];
      ref8.then((doc) => {

        temp = doc.data()['nsbr']
        console.log(temp)


        var val = 0;
        console.log(temp.length)

        for (let index = 0; index < temp.length; index++) {


          var str = temp[index];

          console.log(str);

          if (str.startsWith("typingtext")) {

            console.log(str.startsWith("typingtext"));
            val++;
          }

        }



        firebase.firestore().collection("warslist").doc(Edi.currentWAR).update({

          'typTXT': firebase.firestore.FieldValue.arrayUnion(document.getElementById("inputareaforhindi").value),

          'nsbr': firebase.firestore.FieldValue.arrayUnion("typingtext" + val),
        })

        val = 0;

      })






    }







    document.getElementById("nww").addEventListener("click", () => {




      console.log(Edi.currentWAR+" "+this.state.currentWAR7)


      if (Edi.currentWAR == null && tryingformakingnewwar === true) {

        getsetdata();

        this.setState({

          
          currentWAR7: Edi.currentWAR

        })
        tryingformakingnewwar = false;

      }




      if (document.getElementById("slct").value === "subhadingTXT" && Edi.currentWAR != null) {


        console.log("calling updating sub hading")
        updateSUBHADING()

      }









      if (document.getElementById("slct").value === "lighttext" && Edi.currentWAR != null) {

        updatelightTXT()
      }








      if (document.getElementById("slct").value === "glitchloction" && Edi.currentWAR != null) {

        updateglitchLOCATION();

      }







      if (document.getElementById("slct").value === "TXThoverimg" && Edi.currentWAR != null) {


        updatetextHOVERimg()


      }








      if (document.getElementById("slct").value === "glitchimg" && Edi.currentWAR != null) {



        updateglitchIMG();


      }







      if (document.getElementById("slct").value === "typingtext" && Edi.currentWAR != null) {
        updatetypingTXT()
      }











    })

    document.getElementById("exitwar").addEventListener("click", () => {


      Edi.currentWAR = null;



      this.setState({
        currentnsbr:[],
        currentWAR7: Edi.currentWAR
      })







    })


  }



  static removenum(str) {



    var num = str.replace(/[^0-9]/g, '');

    return num;
  }


  static getstr(str) {

    var gg = str.replace(/[0-9]/g, '');
    return gg;

  }


  static tiketisinhindi = null;


  


  render() {








    firebase.firestore().collection("availebleWARname").doc("names").get().then((querySnapshot) => {




      this.setState({

        warlist: querySnapshot.data()["nameswar"],

      })
    })




if(Edi.currentWAR != null){

  firebase.firestore().collection("warslist").doc(Edi.currentWAR).get().then((querySnapshot) => {




    this.setState({

      currentnsbr:querySnapshot.data()["nsbr"],

      subHADINGtxtEN: querySnapshot.data()["subHADINGtxtENG"],

    })
  })



}



















    function INeng() {




      

      
return(
  
        <div id="engrealprevdiv">



       

        </div>)
      
    }




    function INhindi() {
      // The `path` lets us build <Route> paths that are
      // relative to the parent route, while the `url` lets
      // us build relative links.


      return (<div>

      


      </div>)

      
      
    }







    return (<>













      <div id="editorbody">


        <div id="rendringwarnames" >





     






          <nav class="main-menu" >
            <ul>

 

              <li id="addwar" >
                <a href="#">
                  <i class=" fa fa-plus"></i>
                  <span class="nav-text">
                    <label for="modal" class="modal-btn">

                      add a new war

                    </label>
                  </span>
                </a>
              </li>


              {this.state.warlist.slice(0).reverse().map((item, i) => {


                return (




                  <li key={i} onClick={() => {




                    Edi.currentWAR = item;

                    this.setState({
                      currentWAR7: Edi.currentWAR
                    })




                  }}>
                    <a href="#">
                      <i class="fa fa-list fa-2x"></i>
                      <span class="nav-text">
                        {item}
                      </span>
                    </a>
                  </li>




                )
              })}

            </ul>

            <ul class="logout">
              <li>
                <a href="#">
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </nav>


        </div>
















        <div id="rendringwardata" >


          <div className="wardiv">




          {this.state.currentnsbr.map((item, i) => {

var nu=Edi.removenum(item)
if(item.startsWith("subhadingTXT")){



     

   return(
   
<h1>




<br/><br/>

<p   id="artical2"   className="smallINsmallWIDTH" >
{this.state.subHADINGtxtEN[nu]}
    </p>

</h1>)

}

})}





          </div>











{/* 
        {this.state.currentnsbr.slice(0).reverse().map((item,i)=>{


  

         console.log(item+"  "+i+" y");


 })}   */}







        </div>







        <input type="checkbox" id="modal" />



<label class="modal-bg"></label>
<div class="modal-content">
  <label class="close">
    <i class="fa fa-times" aria-hidden="true"></i>
  </label>
  <header>
    <h3>typ information here</h3>
  </header>
  <article class="content">
    <br />
    <br />
    <label for="inputareaforhindi">write in hindi here</label>
    <textarea key="inputareaforhindi" id="inputareaforhindi"></textarea>
    <br />
    <br />
    <label for="inputareaforenglish">write in english here</label>

    <textarea id="inputareaforenglish"></textarea>


    <br /><br />
    <label for="inputareaforurl">write url here</label>
    <textarea id="inputareaforurl"></textarea>

    <br /><br />
  </article>
  <footer>
    <a href="#" id="nww" class="button success">Accept</a>
    <label for="modal" class="button danger">Decline</label>
  </footer>
</div>








        <label class="select" for="slct">
          <select id="slct" required="required">
            <option value="notSelected" disabled="disabled" selected="selected"    >Select option</option>
            <option value="subhadingTXT">sub  hading</option>
            <option value="lighttext">light text</option>
            <option value="glitchloction"> glitch loction</option>
            <option value="TXThoverimg"> text hover img</option>
            <option value="glitchimg">glitch img</option>
            <option value="typingtext">typing text</option>

          </select>
          <h1 id="nwadd" >
            <label for="modal" class="modal-btn">
              +
            </label></h1>




        </label>
        <button id="exitwar">exit</button>
        <h3 id="selectedwar">{this.state.currentWAR7 === null ? "no war is selected" : this.state.currentWAR7}</h3>








      </div>







    </>)
  }
}


export default Edi;









