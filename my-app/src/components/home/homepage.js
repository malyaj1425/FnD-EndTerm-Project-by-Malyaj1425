
import React, { Component } from 'react'
import {useState} from 'react'
import Card from './Cards/Card';
import Slider from './Slider/Slider'
import Banner from './Banner/Banner';
import Footer from '../header/Footer';




export default function Homepage()
{
    const[active,setActive]=useState("First");
    return (
      <div>
        {/* <nav>
        <button onClick={()=>setActive("First")}>one</button>
        <button onClick={()=>setActive("Second")}>two</button>
        <button onClick={()=>setActive("Third")}>three</button>
        </nav>
        {active==="First" && <Slider/>}
        {active==="Second" && <Card/>}
        {active==="Third" && <Banner/>} */}
        <Slider/>
        <Card/>
        <Banner/>
      </div>
    )
  }

