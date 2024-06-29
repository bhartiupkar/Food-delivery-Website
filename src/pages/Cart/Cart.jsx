import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const { cartitems, food_list, removefromcart,gettotalcartamt } = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>Rs. {item.price * cartitems[item._id]}</p>
                  <p onClick={() => removefromcart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </>
            )
          }


        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>

            <div className="cart-total-details">
              <p>Subotal</p>
              <p>Rs. {gettotalcartamt()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs. {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {gettotalcartamt()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>
        <div className="cart-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className='cart-promo-code-input'>
            <input type="text" placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
