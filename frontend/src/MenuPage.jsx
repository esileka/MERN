import React from 'react'
import {useParams} from "react-router-dom"
import dinner1 from './IMG/dinner1.jpeg';
import dinner2 from './IMG/dinner2.png';
import breakfast1 from './IMG/breakfast1.png';
import dinner3 from './IMG/dinner3.png';
import lunch1 from './IMG/lunch1.png';
import dinner4 from './IMG/dinner4.png';
import dinner5 from './IMG/dinner5.png';
import dinner6 from './IMG/dinner6.png';
import "./Menupagestyle.css"

const menuData={
    1:{
        image: dinner1,
        title: "ROASTED LAMB RUMP",
        desc: "A tender, juicy lamb dish roasted to perfection, served with aromatic herbs.",
        ingredients: ["Lamb rump", "Rosemary", "Garlic", "Olive oil", "Salt & Pepper"],
        price: "$18.99"
    },
    2: {
        image: dinner2,
        title: "CITRUS CURED SALMON",
        desc: "Fresh salmon cured with citrus flavors for a light and refreshing seafood experience.",
        ingredients: ["Salmon", "Lemon zest", "Dill", "Sea salt", "Olive oil"],
        price: "$22.50"
    },
    3: {
        image: breakfast1,
        title: "PAN SEARED SEA BASS",
        desc: "Crispy on the outside, tender inside, served with a flavorful sauce.",
        ingredients: ["Sea bass", "Butter", "Lemon", "Garlic", "Fresh parsley"],
        price: "$20.00"
    },
    4: {
        image: dinner3,
        title: "STUFFED STRAWBERRY",
        desc: "A delightful dessert with fresh strawberries filled with a creamy surprise.",
        ingredients: ["Strawberries", "Cream cheese", "Honey", "Vanilla extract"],
        price: "$10.99"
    },
    5: {
        image: lunch1,
        title: "BEEF BURGER MEAL",
        desc: "A classic juicy beef burger served with crispy fries and fresh toppings.",
        ingredients: ["Beef patty", "Lettuce", "Tomato", "Cheese", "Burger bun"],
        price: "$14.99"
    },
    6: {
        image: dinner4,
        title: "MUSSELS SOUP",
        desc: "A rich and hearty soup made with fresh mussels, herbs, and a savory broth.",
        ingredients: ["Mussels", "Garlic", "Tomato broth", "White wine", "Basil"],
        price: "$16.99"
    },
    7: {
        image: dinner5,
        title: "ITALIAN SPAGHETTI",
        desc: "Authentic Italian pasta served with a rich tomato sauce and parmesan cheese.",
        ingredients: ["Spaghetti", "Tomato sauce", "Garlic", "Parmesan", "Basil"],
        price: "$13.50"
    },
    8: {
        image: dinner6,
        title: "GRILLED FISH",
        desc: "Perfectly grilled fish fillet with a hint of lemon and fresh herbs.",
        ingredients: ["Fish fillet", "Lemon", "Garlic", "Olive oil", "Fresh herbs"],
        price: "$19.99"
    }
}

const MenuPage = () => {
    const {id} =useParams();
    const menu = menuData[id];

    if(!menu) return <p>Menu not found</p>
  return (
    <div lassName="menu-container">
            <h1 className="menu-title">{menu.title}</h1>
            <img  className="menu-image" src={menu.image} alt={menu.title} style={{ width: '400px', borderRadius: '10px' }} />
            <p className="menu-description">{menu.desc}</p>
            
            <h3 className="ingredients-title">Ingredients:</h3>
            <ul className="ingredients-list">
                {menu.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <h2 className="menu-price">Price: {menu.price}</h2>
        </div>
  );
};

export default MenuPage