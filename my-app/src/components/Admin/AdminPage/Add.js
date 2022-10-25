import React from 'react'
import './Admin.css'
export default function Add() {
  return (
    <div className="Add">
        <h2>Add Product</h2>
    <form>
            <label>Enter Product ID: </label><br></br>
            <input type="number" placeholder='ID'></input><br></br>
            <label>Enter Product Title: </label><br></br>
            <input type="text" placeholder='Title'></input><br></br>
            <label>Choose Product Category: </label><br></br>
            <select>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>FoodGrains</option>
                <option>Oil</option>
                <option>Bakery</option>
                <option>Spices</option>
            </select><br></br>
            <label>Enter Product Description: </label><br></br>
            <textarea placeholder='description'></textarea><br></br>
            <label>Enter Price: </label><br></br>
            <input type="number" placeholder='Price'></input><br></br>
            <label>Do you want to put this product in daily need section?</label><br></br>
            <select><option>yes</option><option>no</option></select><br></br>
            <label>Choose Product Image:</label><br></br>
            <input type="file" id="images"></input><br></br>  
            <input type="submit" value='ADD' id="submitbutton"></input>
    </form>
    </div>
  )
}
