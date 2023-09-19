import React from 'react'
import Navbar from './Navbar';

 const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
             <div className='banner_content'>
           <div className='container'>
               <div className='banner__text'>
               <h3>Pizza Delivery</h3>
               <h1>MAESTRO PIZZINI</h1>
               <p>"Pizzaiolo" redirects here. For the restaurant chain, see Pizzaiolo (restaurant chain).
For other uses, see Pizza (disambiguation).
               </p>
               <div className='banner_btn'>
                   <a href='' className='btn btn-smart'>
                       DILEVERY NOW</a>
               </div>

       
               </div>
              
      
           </div>
       </div>
    
        </div>
    )
}

export default Header;
