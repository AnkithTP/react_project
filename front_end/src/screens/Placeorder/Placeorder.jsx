import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';


const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="place-order-container">
      {/* Delivery Information Section */}
      <div className="delivery-information">
        <h2>Delivery Information</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="input-group">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="tel" placeholder="Phone" />
        </form>
      </div>

      {/* Cart Totals Section */}
      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <div className="totals-row">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <div className="totals-row">
          <p>Delivery Fee</p>
          <p>₹{deliveryFee}</p>
        </div>
        <div className="totals-row total">
          <p>Total</p>
          <p>₹{total}</p>
        </div>
        <button className="proceed-btn">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
