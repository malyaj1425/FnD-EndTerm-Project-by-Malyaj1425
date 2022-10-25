import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Slider() {
  const navigation = useNavigate();

  function hide() {
    navigation("/items");
  }

  return (
    <div id="carousel">
      <MDBCarousel
        showIndicators
        showControls
        fade
        style={{ position: "relative", opacity: "1" }}
      >
        <button className="container-button" onClick={hide}>
          <span>Shop Now </span>
        </button>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://img.freepik.com/free-photo/beautiful-tasty-appetizing-ingredients-spices-red-chilli-pepper-grocery-cooking-healthy-kitchen_1220-1676.jpg?w=1060&t=st=1665979651~exp=1665980251~hmac=a7b7f041299671beb5fcdb115a0f0053a9a4d44c621ab78c539fab7cf14d185c"
          alt="..."
          style={{ height: "400px" }}
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://img.freepik.com/free-vector/background-organic-supermarket-with-watercolor_125540-704.jpg?w=1060&t=st=1665979888~exp=1665980488~hmac=88d5bc49aaf60d7b585bd3ffc2491e4d14257c3bb975df769fa1ce999c738a37"
          alt="..."
          style={{ height: "400px" }}
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://img.freepik.com/free-vector/online-grocery-app-isometric-landing-page_107791-2392.jpg?w=1380&t=st=1665979785~exp=1665980385~hmac=febf7c9bfc958511ce9f80b4b4bbf9f70f951b20a60497242e0b0242f62b602e"
          alt="..."
          style={{ height: "400px" }}
        ></MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}
