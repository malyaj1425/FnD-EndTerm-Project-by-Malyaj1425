import React from "react";
import './Feed.css'
export default function Feedback() {
  return (
    <div>
      <div className="Titleboxcart">
        <h1 className="Titlecart">Feedback</h1>
      </div>
      <div className="feedbackbox">
        <form className="Feedform">
            <textarea rows="10" className="textareas"></textarea><br></br>
            <input type="submit" value="SUBMIT" className="Feedsubmit"></input>
        </form>
      </div>
    </div>
  );
}
// project by malyaj singh 2010991425 g22 chitkara

