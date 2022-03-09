import React, { Component } from "react";
import './css/style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: 'Go!',
      numero: 0
    };
    this.timer = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    let statevar = this.state;
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      statevar.btn = 'Go!';
    }

    else {
      this.timer = setInterval(() => {
        statevar.numero += 0.1;
        this.setState(statevar);
      }, 100);
      statevar.btn = 'Pause';
    }
  }

  clear() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let statevar = this.state;
    statevar.numero = 0;
    statevar.btn = 'Go!';
    this.setState(statevar);
  }


  render() {
    return (
      <div className="container">
        <img alt='cronometroImg' src={require('./assets/cronometro.png')} />
        <a href="/#" className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a href="/#" className="btn" onClick={this.go}>{this.state.btn}</a>
          <a href="/#" className="btn" onClick={this.clear}>Clear</a>
        </div>
      </div>
    );
  }
}

export default App;
