import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import React,{useState} from "react";
import Cardinfo from "./itemdata";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import "./item.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RenderCard from "./renderCard";

const Itemcards = ({handleClick}) => {
  const [query,setQuery]=useState("");
  
  const find=(data)=>{
    return data.filter((RenderCard)=>RenderCard.category.toLowerCase().includes(query));
  }
  
  return (
    <div className="bodyman">
      <br></br>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        CATEGORY
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={()=>{setQuery("")}}>All</Dropdown.Item>
        <Dropdown.Item href="#/action-1" onClick={()=>{setQuery("vegetables")}}>Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{setQuery("fruits")}}>Fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setQuery("foodgrains")}}>Foodgrains</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setQuery("oil")}}>Oils</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setQuery("spices")}}>Spices</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setQuery("dairy")}}>Dairy</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={()=>{setQuery("bakery")}}>Bakery</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <Container>
      <br></br>
        <Row className="d-flex justify-content-center">
          {find(Cardinfo).map((card)=>(
            <RenderCard card={card} handleClick={handleClick} />
          ))}
          {/* {Cardinfo.map(renderCard)} */}
        </Row>
      </Container>
    </div>
  );
};

export default Itemcards;
