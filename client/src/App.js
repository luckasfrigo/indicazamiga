import React, { Component } from 'react'
import './App.css'
import blink from './assets/blink.gif'

export default class App extends Component {
  
  state = {
    loading: true,
  }

  render() {
    return (
      <div className='wrapper'>
        <img src={blink} alt="Indicazamiga" className="logo" />
      </div>
    )
  }
}