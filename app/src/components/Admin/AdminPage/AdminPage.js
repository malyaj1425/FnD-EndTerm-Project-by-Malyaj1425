import React from 'react'
import './Admin.css'
import Add from './Add'
import Remove from './Remove'
import Update from './Update'
export default function AdminPage() {
  return (
    <div>
        <div className='Titlebox'>
        <h1 className='Title'>Falkreath's Admin Page</h1>
        </div>
        <div className='Container'>
            <div className='Box1'>
                <Add/>
            </div>
            <div className='Box2'>
                <div className='Box21'><Update/></div>
                <div className='Box22'><Remove/></div>
            </div>
        </div>
    </div>
  )
}
