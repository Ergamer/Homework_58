import React, { Component } from 'react';
import './App.css';
import Choice from "./components/Choice/Choice"
import Modal from "./components/UI/Modal"
import Button from "./components/UI/Button/Button"
import Alert from "./components/UI/Alert/Alert"

class App extends Component {

  films = [
    {name: 'Scream', price: 150, location: 'Ала-Тоо',
        time: "20-00", place: '2 ряд, 10 кресло', id: 1, foto: "img/Scream.jpg"},
    {name: 'Lion_King', price: 150, location: 'Россия',
        time: "10-00", place: '7 ряд, 12 кресло', id: 2, foto: "img/Lion_King.jpg"}
];

  state = {
    hiddenModal: true
  };
  chooseFilm = (id) => {
    this.films.findIndex(film => film.id === id);
    this.setState({hiddenModal: false})
  };

  changeModal = (id) => {
      this.setState({hiddenModal: true})
  };

  emptyAlert = () => {

  };
  render() {
    return (
      <div className="App">
        <Modal show={this.state.hiddenModal} clicked={this.changeModal}>
          <h2>Ви таки согласны?</h2>
          <Button btnType="Continue">Таки да</Button><Button btnType="Canceled" clicked={this.changeModal}>Нет</Button>
        </Modal>
        <Choice films={this.films} chooseFilm={this.chooseFilm}/>
        <Alert type='primary'>Primary</Alert>
          <Alert type='success'>Success</Alert>
          <Alert type='danger'>Danger</Alert>
          <Alert type='warning' dismiss={this.emptyAlert}>Warning</Alert>
      </div>
    );
  }
}

export default App;
