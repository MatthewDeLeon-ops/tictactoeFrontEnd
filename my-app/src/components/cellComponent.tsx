//!  React, component names must start with a capital letter

import React, { ReactNode } from 'react'
import '../components/cellsStyle.css'
/* //* Using cellStyles.css for styling my components */

interface squareBlocks {
  children: ReactNode
}

interface RowProps {
  children: React.ReactNode
}

/* //? Renders a <div> with the class 'tiles' and  its children. */
//! The hover effect defined in my css file is applied to all elements with the class tiles, including those in my TilesComponent*/

const TilesComponent: React.FC<squareBlocks> = ({ children }) => {
  return <div className="tiles">{children}</div>
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

/* //* idea for implementing win loss condition */
/*
? Create Logic for the ordered Tiles for win/lose conditions
? ACROSS Tiles: [1,2,3] [4,5,6] [7,8,9]   [x or o] 
? diagonal: [7,5,3] [9,5,1]               [x or o]
? Vertical: [1,4,7] [2,5,8] [3,6,9]       [x or o]
! Any other combination is considered a loss
*/
