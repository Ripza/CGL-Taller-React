import React, { Component } from 'react'
import Film from './../Film/Film'

class FilmList extends Component {

  buildFilms(){
    return this.props.films.map((film) => {
      return(
        <Film title={film.title} description={film.description} color={this.props.color} />
      )
    })
  }

  render() {
    return (
      <div className="films-container">
        {this.buildFilms()}
      </div>
    )
  }

}

export default FilmList
