import React from 'react'
import Contact from './Contact'
import "./ServicesStyle.css"


const Services = () => {
  return (
    <div className='bigparent'>
       
        <div className="icon-first">
        <i class="fa-solid fa-bowl-food"></i>
        <h2>QUALITY FOOD</h2>
        <p>We use only the freshest and highest-quality ingredients to prepare delicious and healthy meals. Every dish is made with care to ensure a flavorful and satisfying experience that you'll love.</p>
        </div>

        <div className="icon-second">
        <i class="fa-solid fa-pizza-slice"></i>
        <h2>SUPER TASTE</h2>
        <p>Our recipes are crafted by expert chefs, blending the finest ingredients to create dishes rich in flavor. With a perfect balance of tradition and creativity, every meal is a delightful experience.</p>
        </div>


        <div className="icon-third">
        <i class="fa-solid fa-truck"></i>
        <h2>FAST DELIVERY</h2>
        <p>Enjoy your favorite meals delivered fresh and fast to your doorstep. Our reliable service ensures that every order arrives on time, hot, and ready to be enjoyed without any delays.</p>
        </div>

    </div>
    
      
    
    
  )
        
}

export default Services