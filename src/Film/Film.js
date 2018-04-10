import React, { Component } from 'react'
import './Film.css'

class Film extends Component {

  render() {
    return (
      <div className="film-item">
        <div className="film-title" style={{backgroundColor: this.props.color}}> 
          Título: {this.props.title}
        </div>
        <div className="film-description"> 
          Descripción: {this.props.description}
        </div>
      </div>
    )
  }

}

export default Film
