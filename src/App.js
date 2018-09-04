  import React, { Component } from 'react';


class App extends Component {
  render() {
    return ( 
      <div style={divDeFora} >
        <h1>Timer</h1>
        <div>00:00</div>
        <div style={divDeDentro}>
        <button>+</button>
        <button>Start/Stop</button>
        <button>Resert</button>
        <button>-</button>
        </div>
    </div>
    );
  }
}

const titulo = {
  color: 'black',
  fontSize: '30pt',
  margin:'0'
}

const timer = {
  color: 'black',
  fontSize: '50pt',
  fontWeight: 'bolder'

}

const divDeDentro = {
  height: 300,
  width: 300,
  border:'2px solid black',
  display: 'flex',
  flexDirection: 'colum',
  alignItems: 'center',
  justifyContent: 'spaceAround'
}

const divDeFora = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'colum',
  backgroundColor: 'lightGrey'
}

export default App;
