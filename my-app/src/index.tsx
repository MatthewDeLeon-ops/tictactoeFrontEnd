import React from 'react'
import ReactDOM from 'react-dom'
import ParentComponent from '../src/components/cellComponent'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root'),
)
