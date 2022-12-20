import React from 'react';
import Navbar from './navbar';

const Proj = () => {
    return (
        <div>
             <Navbar/>
             <h1 className="pro  m-0" id="projects">Proje<span>cts</span></h1>
           
                <div className='row'>
                    <div className='col-5 '>
                      
                        <div class="card shadow-lg  bg-body rounded " style={{"width": "30rem","height":"75vh","margin-left":"350px"}}>
                        <h1>Food Order App</h1>
  <img src="https://media.istockphoto.com/id/1165063882/photo/restaurant-healthy-food-delivery-in-take-away-boxes.jpg?s=612x612&w=0&k=20&c=IOC4sN-T-cCobmHE13NY_ml27Us6VK81SdTpdoFO2uw=" class="card-img-top" alt="..."  style={{height:"400px"}}/>
  <div class="card-body">
    
    <p class="card-text">MongoDB , ExpressJs , ReactJs , NodeJs</p>
    {/* <h3 class="card-text">2.Source Code</h3> */}
    <p class="card-text">FrontEnd Source Code <a href="https://github.com/karthicK007V/Mern-project1-Frontend" class="btn btn-outline-primary">Go somewhere</a></p>
    <p class="card-text">BackEnd Source Code <a href="https://github.com/karthicK007V/Mern-project1-Backend" class="btn btn-outline-primary">Go somewhere</a></p>
    <p>Deploy Link    <a href="https://food-orders-management.netlify.app/" class="btn btn-outline-info">Go somewhere</a></p> 
   
  </div>
</div>

                    </div>
                    
                    <div className='col-5' style={{"margin-left":"150px"}}>
                   
                    <div class="card shadow-lg  bg-body rounded ms-3" style={{"width": "30rem","height":"75vh"}}>
                    <h1>Iphone Store</h1>
  <img src="https://media.gettyimages.com/id/1404082305/photo/customers-shop-at-the-apple-store-at-the-towson-town-center-mall-the-first-of-the-companys.jpg?s=612x612&w=gi&k=20&c=9AwZ9XDvPWGpEe6Jpz1z5AKLKAV2sfnC41ZMVTh0tSU=" class="card-img-top" alt="..." style={{height:"300px"}}/>
  <div class="card-body">
  <p class="card-text">MongoDB , ExpressJs , ReactJs , NodeJs</p>
    {/* <h3 class="card-text">2.Source Code</h3> */}
    <p class="card-text">FrontEnd Source Code <a href="https://github.com/karthicK007V/Mern-project2-frontend" class="btn btn-outline-primary" target="blank">Go somewhere</a></p>
    <p class="card-text">BackEnd Source Code <a href="https://github.com/karthicK007V/Mern-project2-backend" class="btn btn-outline-primary" target="blank">Go somewhere</a></p>
    <p>Deploy Link    <a href="https://iphone-store-clone.netlify.app/" class="btn btn-outline-info" target="blank">Go somewhere</a></p> 
   
  </div>
</div>
                        
                        </div>
                </div>

             </div>

   
    );
}

export default Proj;
