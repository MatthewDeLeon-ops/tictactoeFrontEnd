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
    backgroundColor: 'grey',
    margin: '5px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '100px',
    color: 'black',
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
        <TilesComponent>Square 1</TilesComponent>
        <TilesComponent>Square 2</TilesComponent>
        <TilesComponent>Square 3</TilesComponent>
      </RowComponent>
      <RowComponent>
        <TilesComponent>Square 4</TilesComponent>
        <TilesComponent>Square 5</TilesComponent>
        <TilesComponent>Square 6</TilesComponent>
      </RowComponent>
      <RowComponent>
        <TilesComponent>Square 7</TilesComponent>
        <TilesComponent>Square 8</TilesComponent>
        <TilesComponent>Square 9</TilesComponent>
      </RowComponent>
    </div>
  )
}

export default Layout
