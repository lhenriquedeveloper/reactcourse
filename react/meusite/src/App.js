// Renderização Condicional

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
  }

  render() {
    return (
      <div>
        {this.state.status === 1 && <h1>Bem Vindo ao Sistema!</h1>}
        <div>
          <h2> React JS Course</h2>
        </div>
      </div>
    );
  }
}

export default App;
