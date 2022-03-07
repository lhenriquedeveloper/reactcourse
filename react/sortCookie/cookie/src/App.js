import React, { Component } from 'react';
import './css/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases =
      [
        "Deixe de lado as preocupações e seja feliz.",
        "A vontade das pessoas é a melhor das leis.",
        "Nós somos o que pensamos.",
        "A maior barreira para o sucesso é o medo do fracasso.",
        "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
        "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.",
        "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
        "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
        "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.",
        "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.",
        "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas."
      ];
  }

  quebraBiscoito() {
    let state = this.state;
    let random = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '"' + this.frases[random] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img alt="sortCookie" src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Open Cookie!" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;
