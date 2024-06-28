import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/Storecontext';
import { StoreContext } from '../../Context/StoreContext'
const Fooditem = ({id,name,price,description,image} ) => {
    

    const{cartitems,addtocart,removefromcart}=useContext(StoreContext)


  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-img" />
            {!cartitems[id]
                ?<img className='add' onClick={()=>addtocart(id)}  src={assets.add_icon_white} alt="" />
                : <div className='food-item-counter'>
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p >{cartitems[id]}</p>
                    <img className='readd' onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Rs.{price*10}</p>
        </div>
    </div>
  )
}

export default Fooditem
