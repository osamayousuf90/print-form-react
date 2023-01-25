import React, { useRef ,useState , useEffect } from "react";
import "./App.scss";
import Pdf from "react-to-pdf";
import { pdfFromReact } from "generate-pdf-from-react-html";
import img from "./assets/img.png";
import qrCode from "./assets/qrCode.png";


const ref = React.createRef();

export default function App() {
  const [step, setStep] = useState(0)
  const btnRef = useRef()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setStep(1)
  //     btnRef.current.click();
  //   }, 0)
  // }, [])




  return (
    <div>

      {/* {step === 0 &&  */}
        <div  style={{height: "100vh", width : "100%",  opacity: "1"  , position: "relative", top: 0}}>
         <div className="element-to-print" ref={ref}>
          <div className="page">
          <div className="page_topImg">
            <img src={img} alt="Noo" />    
          </div>  
          <div className="page_top">
             <h2>ATTESTATION  D'ACCUIEL</h2>
             <p>PROOF OF ACCOMODATION</p>
             <span>(Document relative aux conditions d'entree et dee <br/> sejour des etrangers a Dibouti)</span>
          </div>

          {/* Pehla Box */}

         <div className="page_Twowrapper">
         <div className="page_userInfo">
            
            <div>
            <p className="underLine">Je.soussignme(e).the undersigned</p>
            <span className="textBold">ABOUBAKAR ABDILLAH</span>
            </div>

            <div style={{width : "400px"}} className="page_twoRow">
             
             <div>
             <p>Ne(e) le/Date of birth:</p>
            <span className="textBold">21/10/1996</span>
             </div>

            <div style={{marginLeft : "30px"}}>
            <p>A/Place of birth:</p>
            <span className="textBold">OBOCK</span>
            </div>

            </div>

            <div>
            <p>Nationalite/Nationality:</p>
            <span className="textBold" style={{marginRight : "150px"}}>DJIBOUTIENNE</span>
            </div>

           

            <div className="page_twoRow">
             
             <div>
             <p>Titularie du/Titular of:</p>
            <span className="textBold">Passport</span>
             </div>

            <div>
            <p>N:</p>
            <span className="textBold" style={{marginRight : "65px"}}> 175941 </span>
            </div>

            </div>
             
        </div>

        <div className="page_userInfo2">
            <div className="page_userInfo2Top"> <span>Le 27/09/2022</span> </div> 

            <div className="page_refSection">
              <div>Ref:</div>
              <input/>
            </div>

             <div className="page_deliverySection">
               <span>Delivree le/Issued:</span>
               <p className="textBold">12/09/2017</p>
             </div>

             <div className="page_deliverySection">
               <span>Telephone/Phone:</span>
               <p className="textBold">77723900</p>
             </div>
        </div>

         </div>

        {/* Dusra Box */}

        <br/>

        <div className="page_Twowrapper">
         <div className="page_userInfo2">
            
            <div>
            <p className="underLine">Atteste pouvoir accueillir being able to accomondate</p>
            </div>
            <div className="page_nameEnd">
            <span>ABOUBAKAR ABDILLAH</span>
            </div>

            <div style={{width : "400px"}} className="page_twoRow">
             
             <div>
             <p>Ne(e) le/Date of birth:</p>
            <span className="textBold">14/02/1997</span>
             </div>

            <div style={{marginLeft : "30px"}}>
            <p>A/Place of birth:</p>
            <span className="textBold">AFGOYE</span>
            </div>

            </div>

            <div className="page_nationalityInfo">
            <p>Nationalite/Nationality:</p>
            <span className="textBold" >DJIBOUTIENNE</span>
            </div>

           

            <div className="page_twoRow2">
             
             <div>
             <p>Titularie du/Titular of:</p>
            <span className="textBold">Passport</span>
             </div>

            <div>
            <p>N:</p>
            <span className="textBold"> Z0K6MW86T </span>
            </div>

            <div>
            <p>Adresse/Adress:</p>
            <span className="textBold"> ALLMAGNE </span>
            </div>

            </div>



            <div>

            </div>
             
        </div>

        {/* <div className="page_userInfo2">
            <div className="page_userInfo2Top"> <span>Le 27/09/2022</span> </div> 

            <div className="page_refSection">
              <div>Ref:</div>
              <input/>
            </div>

             <div className="page_deliverySection">
               <span>Delivree le/Issued:</span>
               <p>12/09/2017</p>
             </div>

             <div className="page_deliverySection">
               <span>Telephone/Phone:</span>
               <p>77723900</p>
             </div>
        </div> */}

         </div>


        {/* Thisra Box */}
        <div>
          <p>Conjoint(e)/Spouse : </p>
          <p>Accompagne(e) de son(ses) Enfant(s)/Acocompagne by children(s) : </p>
        </div>

        <div className="page_bottomHeadTop">
         
         <div>
          <p>Pendant/For :</p>
          <span className="textBold">30</span>
         </div>

        <div>
        <p>Jours/days :</p>
        <span className="textBold">3434</span>   
        </div> 


        <div>
        <p>Du/From :</p>
        <span className="textBold">24/20/2022</span>   
        </div> 


        <div>
        <p>Au/to :</p>
        <span className="textBold">24/2/2020</span>   
        </div> 


        </div>


        <div className="page_headingBottom">
          <span>L'hebergeant</span>
          <span>LE PREFIT DE LA VILLE DE DJIBOUTI</span>
        </div>

              

        <div className="page_headingBottom">
          <p>J'atteste sur i'honneur i'exactitude <br /> des renseignements portres ci-dessus. <br /> LU ET APPROUVE </p> 

          <div className="qrCode">
          <img src={qrCode} alt="No" />
          </div>
  

          <span style={{borderBottom : "2px solid black"}}>M OSMAN BILEH GUIREH</span>
        </div>

        <div className="page_footer">

        <span>NOTE:</span>

        <p className="textBold">L'article 58 de la lol n*115 du 03 Septembre 1996 prevoit que toute personne qui par aida direct ou indirect, facilite ou tente de faciliar I'entree, <br/>
        la circulation ou le sejour irregullar d'un etranger, eat passible d'une peine d'mprisonement de 2 mois & 3 ans et/lou une amande de 50000 a 300000 Ddj,
        </p>  

        </div>
        
        </div>
      </div>
        </div>
       
      {/* // } */}
    
      <Pdf style={{width: 500, height: "1000", background: 'red'}} targetRef={ref} filename="attestion.pdf">
        {({ toPdf }) => (
          <button style={{opacity : "0"}} ref={btnRef} className="button" onClick={toPdf}>
            Print
          </button>
        )}
      </Pdf>
    </div>
  );
}
