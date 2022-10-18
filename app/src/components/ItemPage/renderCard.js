import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Cardinfo from "./itemdata";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./item.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const RenderCard = ({card, index,handleClick}) => {


  
//   const handleClick = (data) => {
//     cart.push(data);
//     console.log(cart);
//   };
//   const [cart,setCart]=useState([...cart,card]);
  const x = card.price;
  const y = card.discount;
  var added="Add";
  
  var weight;

  if (
    card.category === "Fruits" ||
    card.category === "Foodgrains" ||
    card.category === "Vegetables"
  ) {
    weight = "/kg";
  } else if (card.category === "Oil") {
    weight = "/L";
  } else {
    weight = "";
  }

  var value;
  if (y > 0) {
    value = (
      <h4>
        <strike>Rs {x}</strike> Rs{" "}
        {card.price - card.price * (card.discount / 100)}
        {weight}
      </h4>
    );
  } else {
    value = (
      <h4>
        Rs {x}
        {weight}
      </h4>
    );
  }

  return (
    <Col id="clm">
      <Card
        style={{ width: "14rem", background: "white", margin: "10px" }}
        key={index}
        className="cardbody"
      >
        <div className="discount"></div>
        <Card.Img variant="right" src={card.image} className="img" />
        <Card.Body className="body">
          <Card.Title>
            <h1>{card.title}</h1>
          </Card.Title>
          <div className="pricetag">
            <div id="price" className="mrp">
              {value}
            </div>
            <button
              className="buy"
              onClick={()=>handleClick(card)}
            >
              {added}
            </button>
          </div>
          <Card.Text className="description">
            <p>{card.text}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RenderCard;