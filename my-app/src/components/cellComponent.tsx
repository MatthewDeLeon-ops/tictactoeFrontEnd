/*
Add onclick add text to the Square highlighted
*/
//!  React, component names must start with a capital letter

import React, { ReactNode } from 'react'
import '../components/cellsStyle.css'
interface squareBlocks {
  children: ReactNode
}

const TilesComponent: React.FC<squareBlocks> = ({ children }) => {
  return <div className="tiles">{children}</div>
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
