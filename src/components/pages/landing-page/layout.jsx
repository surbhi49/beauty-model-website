import '../../../assets/Styles/style.css';
import pink from '../../../assets/image/pink.jpg';
import voilet from '../../../assets/image/-min.jpg'


function Layout(){
      return(
          <>
  <div className='flexx'>
<div className='first-container'>
<h5>OUTFIT IDEAS</h5>
     <div className='line'></div>
     <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
   </div>
   <div className='second-container'>
    <img src={pink} />
    <span>Image from<a href='#'>Freepik</a></span>
   </div>
   <div className='inner-flex'>
   <h2>Fashion's past of uniquely drawing trends from Fashion Weeks</h2>
  
   <div className='colum'>
   <div className='imgs'>
    <img src={voilet} />
    </div>
    <div className='texting'>
    <h5>EXPERTS</h5>
    <div className='line'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
</div>


</div>



          {/* <div class="d-flex">
          
<div className="container">
  <div className="row ">

    <div class="col-4">
     <h5>OUTFIT IDEAS</h5>
     <div className='line'></div>
     <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
   </div>
    <div className="col-3"> 
    <img src={pink} />
    <span>Image from<a href='Freepik'></a></span>
    </div>
    <div className="col-5">
     <h2>Fashion's past of uniquely drawing trends from Fashion Weeks</h2>
   <div id='roww' className='row'>
     <div className='imgs'>
    <img src={voilet} />
    </div>
    <div className='texting'>
    <h5>EXPERTS</h5>
    <div className='line'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
    </div>
  </div>
  </div>
          </div> */}

          </>
      )
};

export default Layout;