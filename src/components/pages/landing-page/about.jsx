import '../../../assets/Styles/style.css';
import image from '../../../assets/image/et.jpg'


function About(){

     return(
          <>
          <div className='container2'>
               <div className='shape'> </div>               
               
               <div className='row'>
                    <div className="col">
                   <img src={image} ></img>
                   
                    </div>
                    <div id="speacial" className="col">
                     <h2>New Emotions</h2>
                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <span>Image from <a href='#'>Freepik</a></span><br></br>
                   <div className='btn'>
                    <button>LEARN MORE</button>
                    </div>
              
                    </div>
               </div>
          </div>
          </>
     )
};


export default About;