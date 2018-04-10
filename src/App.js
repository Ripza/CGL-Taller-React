import React, { Component } from 'react'
import logo from './logo.svg'
import Axios from 'axios'

import './App.css'

import FilmList from './FilmList/FilmList'

class App extends Component {

  state = {
    loading: true,
    films: [],
    color: 'aquamarine'
  }

  fetchFilms(){
    Axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      console.log(response);
      this.setState({films:response.data});
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  handleChangeColor = () => {
    this.setState({color:'red'})
  }

  componentDidMount(){
    this.fetchFilms()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a la  ... ayudantía React (?) </h1>
          <button  onClick={this.handleChangeColor}> Cambiar Color! </button>
        </header>
        <div className="App-intro">
          <FilmList films = {this.state.films} color = {this.state.color} />
        </div>
      </div>
    )
  }


}

export default App
