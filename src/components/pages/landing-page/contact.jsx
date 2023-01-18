import '../../../assets/Styles/style.css';
import pink from '../../../assets/image/rts.jpg';
import {FiFacebook } from "react-icons/fi";
import {BsTwitter } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
 import {BsLinkedin} from 'react-icons/bs';


 const mystyle ={
     color: "black",
     marginLeft:"20px",
     fontSize:"1.5em",
     marginTop:"30px"
}
function Contact(){
     return(
          <>
          <div className='container5'>
               <div className='box'>
                    <div className="one-side">
           <h1>Contact Us</h1>
           <div className='contact-icon'>
       <FiFacebook style={mystyle}  />
       
      <BsTwitter  style={mystyle} />
       <BsInstagram  style={mystyle}/>
       <BsLinkedin   style={mystyle} />
       </div>
           <div className="pink-line"></div>
           <div className='heading'>
               <h6 >1 (234) 567-891 </h6>
               <h6>1 (234) 987-654</h6>
               </div>
               <span>Image from <a href='#'>Freepik</a></span>
        
                    </div>
                    <div className="second-side">
                    <img src={pink} alt="" />
                    <p>MORBI CONVALLIS METUS EROS, SEMPER EFFICITUR AUCTOR. ETIAM SIT AMET CONVALLIS ERAT. CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA! MAECENAS GRAVIDA LACUS NEC DOLOR SUSCIPIT FAUCIBUS.</p>
                    </div>
               </div>
          </div>
          </>
     )
};


export default Contact;