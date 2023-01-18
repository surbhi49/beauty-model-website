import '../../../assets/Styles/style.css';
import girlimg from '../../../assets/image/rty.jpg';


function Home(){


     return(
          <>
          <div className='bg-clr'>
        <div className='container'>

          <div className='img'>
            <img src={girlimg}>

            </img>
            <div className='content'>
            <h5>ABOUT US</h5>
            <h2>Fashion  Trends <br></br> 2021</h2>
            <p>Images from <a href='#'>Freepik</a> </p>
          </div>
          </div>
         
        </div>
     
</div>   
     </>
     )
};

export default Home;