//!  React, component names must start with a capital letter

import React, { ReactNode, useState } from 'react'
import '../components/cellsStyle.css'

/* //* Using cellStyles.css for styling my components */

interface squareBlocks {
  children: React.ReactNode
}

interface RowProps {
  children: React.ReactNode
}

/* //? Renders a <div> with the class 'tiles' and  its children. */
//! The hover effect defined in my css file is applied to all elements with the class tiles, including those in my TilesComponent*/

const TilesComponent: React.FC<squareBlocks> = ({ children }) => {
  // State to track whether "X" should be drawn
  const [draw, setDraw] = useState<boolean>(false)
  // handleClick function to draw "X"
  const handleClick = () => {
    // Toggle between "X" and "O" on each click
    setDraw(!draw)
  }

  // Style for drawing "X"
  const inputStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '10mm',
  }

  return (
    <div className="tiles" onClick={handleClick}>
      {/* {drawX ? <span style={inputStyle}>X</span> : null}
      {drawO ? <span style={inputStyle}>O</span> : null} */}
      <div>
        {draw ? 'O' : 'X'}
      </div>
      {children}
    </div>
  )
}

//? Renders a <div> with a style object defining display properties. This functionally ensures that the squares are displayed in a row. */

const RowComponent: React.FC<RowProps> = ({ children }) => {
  const rowStyle: React.CSSProperties = {
    clear: 'both',
    display: 'flex', // Ensure that the squares are in a row
  }

  return <div style={rowStyle}>{children}</div>
}

//? Layout renders a <div> with the class 'board' containing each row segment which contains each tile in it.

const Layout = () => {
  return (
    <div className="board">
      <RowComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
      </RowComponent>
      <RowComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
      </RowComponent>
      <RowComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
        <TilesComponent> </TilesComponent>
      </RowComponent>
    </div>
  )
}

export default Layout
