// import React from 'react';
import { FaPhoneAlt,FaEnvelope } from 'react-icons/fa';

const Contact=()=>{
    return(
        <>
   <div className="main_contact">
       <div className="contact">
           <h2>Contact Me</h2>
           <div className="under_contact">
               <div className="left_contact">
                  <img src='./images/handshak3.png'/>
                  <h4><FaPhoneAlt /> 9174589122</h4>
                   <h4><FaEnvelope /> darashikoh94@gmail.com</h4>
               </div>
               <div className="right_contact">
                   <div className="form">
                       <input type='text' placeholder='Enter your name'></input><br />
                       <input type='number' placeholder='Enter your mobile'></input><br />
                       <input type='mail' placeholder='----@gmail.com' /><br />
                       <input type='button' value='submit' />
                   </div>
                   
               </div>
           </div>
       </div>
   </div>
        </>
    )

}
export default Contact;