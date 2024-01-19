import React from 'react'
import '../components/cellsStyle.css'

class Grid extends React.Component {
  render() {
    const numRows = 3
    const numCols = 3

    //* Defining styling properties for the grid dimensions (numRows and numCols) and styling for the cells in the grid */
    const cellStyle = {
      width: '200px',
      height: '200px',
      // border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
    }

    const grid: any[] = []

    //* Generation of the grid
    //* use nested loops to generate a 3x3 grid of cells. Each cell is a <div> element with a unique key and styled using the cellStyle. The content of each cell is determined by the formula {index * numCols + j + 1}, which generates sequential numbers for each cell. The generated rows are wrapped in an outer <div> with a display: 'flex' style to ensure they are displayed in a row */
    for (let index = 0; index < numRows; index++) {
      const row: any[] = []
      for (let j = 0; j < numCols; j++) {
        const key = `${index}-${j}`
        row.push(
          <div key={key} style={cellStyle}>
            {index * numCols + j + 1}
          </div>,
        )
      }
      grid.push(
        <div key={index} style={{ display: 'flex' }}>
          {row}
        </div>,
      )
    }

    //* Rendering the Grid Component
    return <div className="grid">{grid}</div>
  }
}

//* making the component accessible to other parts of code
export default Grid
