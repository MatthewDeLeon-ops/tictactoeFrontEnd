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

const ParentComponent = () => {
  return (
    <div>
      <TilesComponent>Square 1</TilesComponent>
      <TilesComponent>Square 2</TilesComponent>
      <TilesComponent>Square 3</TilesComponent>
      <TilesComponent>Square 4</TilesComponent>
      <TilesComponent>Square 5</TilesComponent>
      <TilesComponent>Square 6</TilesComponent>
      <TilesComponent>Square 7</TilesComponent>
      <TilesComponent>Square 8</TilesComponent>
      <TilesComponent>Square 9</TilesComponent>
    </div>
  )
}

export default ParentComponent
