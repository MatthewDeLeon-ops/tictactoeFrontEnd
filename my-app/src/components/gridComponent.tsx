import React from 'react'
import '../components/cellsStyle.css'

class Grid extends React.Component {
  render() {
    const numRows = 3
    const numCols = 3

    const cellStyle = {
      width: '200px',
      height: '200px',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
    }

    const grid = []

    for (let i = 0; i < numRows; i++) {
      const row = []
      for (let j = 0; j < numCols; j++) {
        const key = `${i}-${j}`
        row.push(
          <div key={key} style={cellStyle}>
            {i * numCols + j + 1}
          </div>,
        )
      }
      grid.push(
        <div key={i} style={{ display: 'flex' }}>
          {row}
        </div>,
      )
    }

    return <div className="grid">{grid}</div>
  }
}

export default Grid
