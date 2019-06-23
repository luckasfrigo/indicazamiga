import React, { Component } from 'react'
import io from 'socket.io-client'
import OAuth from './components/OAuth'
import { API_URL } from './config'
import './App.css'
import blink from './assets/blink.gif';

const socket = io(API_URL)
const providers = ['google', 'facebook']

export default class App extends Component {
  
  state = {
    loading: true
  }

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })  
        }
      })
  }

  render() {
    const buttons = (providers, socket) => 
      providers.map(provider => 
        <OAuth 
          provider={provider}
          key={provider}
          socket={socket}
        />
      )
    
    return (
      <div className='wrapper'>
        <div className='container'>
          {this.state.loading
            ? <img src={blink} alt="Indicazamiga" className="logo"/>
            : buttons(providers, socket)
          }
        </div>
      </div>
    )
  }
}