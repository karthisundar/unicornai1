import React, {  useEffect } from 'react';
import './NLP.css';
import nlp from './nlp.jpg';
import ReactPlayer from "react-player";
import WOW from 'wowjs';
import 'animate.css';



function NLP() {
    
    
      
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
        return(
            <div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
            <h1>NLP</h1>
            
            <div >
            <p>
            Businesses use massive quantities of unstructured, text-heavy data and need a way to efficiently process it. A lot of the information created online and stored in databases is natural human language, and until recently, businesses could not effectively analyze this data. This is where natural language processing is useful.

            </p>
            </div>
            <div>
            <img className="img-fulid" id="detail" src={nlp}  />
            </div>
            
            <div >
            
            <ReactPlayer
        url="https://www.youtube.com/watch?v=fNxaJsNG3-s"
      />
      </div>
               
        </div>
    )
}

        
    



export default NLP;
