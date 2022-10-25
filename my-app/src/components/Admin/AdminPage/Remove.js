import React from "react";
import "./Admin.css";
export default function Remove() {
  function validate() {
    var pass = document.forms["frm"]["pass"].value;
    
    if (pass === "123") {
      alert("Enter Valid Password");
      return false;
    } else {
      alert("Product Removed");
    }
  }
  return (
    <div className="Remove">
      <h2>Remove Product</h2>
      <form method="post" name="frm">
        <label>Enter Product ID: </label>
        <br></br>
        <input type="number" placeholder="ID" required></input>
        <br></br>
        <label>Enter Admin Password: </label>
        <br></br>
        <input type="password" placeholder="Password" required name="pass"></input>
        <br></br>
        <input type="submit" value="REMOVE" id="submitbutton"></input>
      </form>
    </div>
  );
}
// project by malyaj singh 2010991425 g22 chitkara
