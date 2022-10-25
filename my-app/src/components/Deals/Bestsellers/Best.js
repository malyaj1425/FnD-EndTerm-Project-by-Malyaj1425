import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Cardinfo from "../../ItemPage/itemdata";
import RenderCard from "../../ItemPage/renderCard";

import '../../ItemPage/item.css';

const Best = ({handleClick}) => {
    const find=(data)=>{
        return data.filter((RenderCard)=>RenderCard.discount>0);
      }
    return(
        <Container fluid="md">
          <div className='Titleboxcart'>
        <h1 className='Titlecart'>Falkreath's Top Offers</h1>
        </div>
        <Row className="justify-content-md-center">
          {find(Cardinfo).map((card)=>(
            <RenderCard card={card} handleClick={handleClick}/>
          ))}
        </Row>
      </Container>
    )

}
export default Best;
// project by malyaj singh 2010991425 g22 chitkara
