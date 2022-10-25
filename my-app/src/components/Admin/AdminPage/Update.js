import React from 'react'
import './Admin.css'
export default function Update() {
    function validate(){
        var getpid=document.forms["frm"]["id"].value;
        var disc=document.getElementById("disc");
        var disc_choosen=disc.options[disc.selectedIndex].text;
        if(getpid==="1"){
            alert("Enter Valid ID");
            return false;
        }
        else{
            alert("Discount Applied")
        }
    }
  return (
    <div className="Update">
        <h2>Add Discount</h2>
    <form name="frm" onSubmit={validate}>
            <label>Enter Product ID: </label><br></br>
            <input type="number" placeholder='ID' required id="pid" name="id"></input><br></br>
            <label>Apply Discount </label><br></br>
            <select id="disc">
                <option>0%</option>
                <option>5%</option>
                <option>10%</option>
                <option>20%</option>
                <option>30%</option>
                <option>40%</option>
                <option>50%</option>
            </select><br></br> 
            <input type="submit" value='ADD' id="submitbutton"></input>
    </form>
    </div>
  )
}
// project by malyaj singh 2010991425 g22 chitkara

