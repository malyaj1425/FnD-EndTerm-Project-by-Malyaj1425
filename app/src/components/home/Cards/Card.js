import { useNavigate } from "react-router-dom";
import React from 'react'
import './Card.css';
export default function () {
  const navigation = useNavigate();
  function best() {
    navigation("/best");
  }
  function offer() {
    navigation("/offer");
  }
  function daily() {
    navigation("/daily");
  }
  return (
    
    <div>
        <div className="card-container">
            <div className='left-card' onClick={best}>
            <img src="https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg?w=1380&t=st=1665980482~exp=1665981082~hmac=5fd2b6eec52db4a5261e74dc26a6267310b8a35e6731a11a8e43b7a114428a53"/>
            <div className="centered">Offers</div>
            </div>
            <div className='right-card'>
                <div className='right-card1' onClick={offer}><img src="https://img.freepik.com/free-psd/top-view-delicious-veggies-paper-bag_23-2148322494.jpg?w=1060&t=st=1665980690~exp=1665981290~hmac=ad8435a5730e19624b1da94617c105e06d508bef6d9c04b2b5201c97a7a1bfae" /><div class="centeredr1">Best Seller</div></div>
                <div className='right-card2' onClick={daily}><img src="https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421132.jpg?w=1380&t=st=1665980900~exp=1665981500~hmac=cc1920d0daba41743ae9c3fa6aeee1997e797c9623f5f0e4394ba85984440ba7" /><div class="centeredr2">Daily Need</div></div>
            </div>
        </div>
    </div>
  )
}
