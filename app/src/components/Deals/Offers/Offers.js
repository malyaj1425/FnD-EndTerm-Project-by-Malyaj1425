import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Cardinfo from "../../ItemPage/itemdata";
import RenderCard from "../../ItemPage/renderCard";
import '../../ItemPage/item.css';

const Offers = ({handleClick}) => {
    const find=(data)=>{
        return data.filter((RenderCard)=>RenderCard.rating>3.5);
      }
    return(
        <Container fluid="md">
      <br></br>
        <Row className="justify-content-md-center">
          {find(Cardinfo).map((card)=>(
            <RenderCard card={card} handleClick={handleClick}/>
          ))}
        </Row>
      </Container>
    )

}
export default Offers;