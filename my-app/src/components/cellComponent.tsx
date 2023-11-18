/*
Build a single component right now.

Return a div, with 9 Squareren divs inside it. Each Square being a square.

Give the Squareren or “squares” some height and width, and a border. and boom you have your board 
*/
//!  React, component names must start with a capital letter

import React, { ReactNode, CSSProperties } from 'react'
import '../components/cellsStyle.css'
interface squareBlocks {
  children: ReactNode
}

const TilesComponent: React.FC<squareBlocks> = ({ children }) => {
  const squareStyle: CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'green', // Add the green background color here
    margin: '5px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '100px',
    color: 'black',
    border: '5px solid black',
  }

  return <div style={squareStyle}>{children}</div>
}

interface RowProps {
  children: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RowComponent: React.FC<RowProps> = ({ children }) => {
  const rowStyle: React.CSSProperties = {
    clear: 'both',
    display: 'flex', // Ensure that the squares are in a row
  }

  return <div style={rowStyle}>{children}</div>
}

const Layout = () => {
  return (
    <div>
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
