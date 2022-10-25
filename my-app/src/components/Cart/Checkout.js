import React from "react";
import { useNavigate } from "react-router";
import Cart from "./Cart";
import './Cart.css'

const Checkout=()=>{
    const navigate=useNavigate();
    function home(){
        navigate("/");
        alert("Order Placed")
    }
    return(
<div className="bodybox">
<main className="mt-5">
<div className="container wow fadeIn">
<div className='Titleboxcart'>
        <h1 className='Titlecart'>Falkreath's Checkout Page</h1>
        </div>
<div className="row checkoutcard">
  <div className="col-md-8 mb-4 ">
    <div className="card divbox">
      <form className="card-body" onSubmit={home}>
        <div className="row">
          <div className="col-md-6 mb-2">
            <div className="md-form ">
              <input type="text" id="firstName" className="form-control"/>
              <label for="firstName" className="">First name</label>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="md-form">
              <input type="text" id="lastName" className="form-control"/>
              <label for="lastName" className="">Last name</label>
            </div>
          </div>
        </div>
        <div className="md-form mb-5">
          <input type="text" id="email" className="form-control" placeholder="youremail@example.com"/>
          <label for="email" className="">Email (optional)</label>
        </div>
        <div className="md-form mb-5">
          <input type="text" id="address" className="form-control" placeholder="1234 Main St"/>
          <label for="address" className="">Address</label>
        </div>
        <div className="md-form mb-5">
          <input type="text" id="address-2" className="form-control" placeholder="Apartment or suite"/>
          <label for="address-2" className="">Address 2 (optional)</label>
        </div>
        <div className="row">

          <div className="col-lg-4 col-md-12 mb-4">

            <label for="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required>
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>

          </div>
\
          <div className="col-lg-4 col-md-6 mb-4">

            <label for="state">State</label>
            <select className="custom-select d-block w-100" id="state" required>
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>

          </div>

          <div className="col-lg-4 col-md-6 mb-4">

            <label for="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required/>
            <div className="invalid-feedback">
              Zip code required.
            </div>

          </div>

        </div>

        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address"/>
          <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info"/>
          <label className="custom-control-label" for="save-info">Save this information for next time</label>
        </div>



        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
            <label className="custom-control-label" for="credit">Credit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label" for="debit">Debit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
            <label className="custom-control-label" for="paypal">Paypal</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required/>
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label for="cc-expiration">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
            <div className="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr className="mb-4"/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        
      </form>

</div>
</div>
<div className="col-md-4 mb-4">

    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge badge-secondary badge-pill">3</span>
    </h4>

    <ul className="list-group mb-3 z-depth-1">
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (INR)</span>
        <strong>Rs. {localStorage.getItem("tot")}</strong>
      </li>
    </ul>

<form className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
        </div>
      </div>
</form>
</div>
</div>
</div>
</main>
</div>
)
}
export default Checkout;
// project by malyaj singh 2010991425 g22 chitkara
