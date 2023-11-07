import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '../src/components/gridComponent' // Import your Grid component

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe Game</h1>
        <Grid />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
