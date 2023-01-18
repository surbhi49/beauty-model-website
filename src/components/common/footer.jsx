import '../../assets/Styles/style.css';
import footerlogo from '../../assets/image/default-logo.png';
import {FiFacebook } from "react-icons/fi";
import {BsTwitter } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
 import {BsLinkedin} from 'react-icons/bs';




 const mystyle ={
      color: "white",
      marginLeft:"20px",
      fontSize:"1.5em",
 }
 
function Footer (){

     return(
          <>
          <div className='container7'>
         <div className='logo'>
          <img src={footerlogo}  />
         </div>
         <div className='footer-content'>
      <p> Sample text. Click to select the text box. Click again or double click to start editing the text.</p>  
         </div>
       <div className='footer-icon'>
       <FiFacebook style={mystyle}  />
       
      <BsTwitter  style={mystyle} />
       <BsInstagram  style={mystyle}/>
       <BsLinkedin   style={mystyle} />
       </div>
          </div>
          <div className='footer-link'>
               <a href='#'> Website Templates </a>created with <a href='#'> Website Builder Software.</a>
          </div> 
          </>
     )
};


export default Footer;