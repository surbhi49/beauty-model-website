import '../../../assets/Styles/style.css';
import img1 from '../../../assets/image/sd.jpg';
import img2 from '../../../assets/image/gh.jpg';
import img3 from '../../../assets/image/ac.jpg';
import {FiFacebook } from "react-icons/fi";
import {BsTwitter } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
 import {BsLinkedin} from 'react-icons/bs';


 const mystyle ={
     color: "white",
     marginLeft:"20px",
     fontSize:"1.5em",
}
function Cate(){
     return (
          <>

          <div className='container3'>
          <div className='column1'>
          <img src={img1}></img>
          <div className='text1'>
               <p>SAMPLE TEXT. LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT NULLAM NUNC JUSTO SAGITTIS SUSCIPIT ULTRICES.</p>
         <p>IMAGE FROM <a href="#">Freepik</a></p>
         <div className='icons'>
         <FiFacebook style={mystyle}  />
       
       <BsTwitter  style={mystyle} />
        <BsInstagram  style={mystyle}/>
        <BsLinkedin   style={mystyle} />
         </div>
          </div>
          </div>
          <div className='column2'>
          <img src={img2}></img>
               </div>
               <div className='column3'>
              <div className='text2'><h5>FASHION TIPS</h5>
               <h1>15 ways to be more stylish</h1>
               </div>
               <img src={img3} alt="" />
               </div>
          </div>
          </>
     )
};

export default Cate;