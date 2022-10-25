import React, { useState } from "react";
import Cardinfo from "../ItemPage/itemdata";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RenderCard from "../ItemPage/renderCard";


function Search({handleClick}) {
  const [query, setQuery] = useState("");
  const find=(data)=>{
    return data.filter((RenderCard)=>RenderCard.title.toLowerCase().includes(query.toLowerCase()) || RenderCard.category.toLowerCase().includes(query.toLowerCase()));
  }
  //   console.log(Cardinfo.filter(renderCard=>renderCard.title.toLowerCase().includes("p")));
  
  return (
    <>
      <div>
        <br></br>
        <input
          type="text"
          placeholder="Search..."
          className="Search"
          onChange={(e) => setQuery(e.target.value)}
          style={{width:"100%"}}
        />
        
        <Container fluid="md">
        <div className='Titleboxcart'>
        <h1 className='Titlecart'>Falkreath's Finest</h1>
        </div>
        
          <Row className="justify-content-md-center">
          {/* {Cardinfo.filter((renderCard) =>
            renderCard.title.toLowerCase().includes(query)
          ).map(renderCard)} */}
          {find(Cardinfo).map((card)=>(
            <RenderCard card={card} handleClick={handleClick}/>
          ))}
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default Search;
