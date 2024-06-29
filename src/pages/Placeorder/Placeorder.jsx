import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../Context/StoreContext'
const Placeorder = () => {
  const {gettotalcartamt}=useContext(StoreContext)
  return (
    <form className='place-order'>

      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        {/* <div className="multi-fields"> */}
          <input type="Email" placeholder='Email address' />
          <input type="text" placeholder='street' />
        {/* </div> */}
        {/* <div className="multi-fields">
          <input type="Email" placeholder='Email address' />
          <input type="text" placeholder='street' />
        </div> */}
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip-code' />
          <input type="text" placeholder='state' />
        </div>
        <input type="text" placeholder='phone ' />
      </div>
      <div className='place-order-right'>
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
              <p>Rs. {gettotalcartamt()?2:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {gettotalcartamt()?2+gettotalcartamt():0}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        
        </div>

      </div>
    </form>
  )
}

export default Placeorder
