import React, { ReactNode, useState } from 'react'
import '../components/cellsStyle.css'

/* //* Using cellStyles.css for styling my components */

interface squareBlocks {
  draw: null | 'X' | 'O'
  onClick: () => void
  children: ReactNode
}

interface RowProps {
  children: React.ReactNode
}

interface TilesComponentProps extends squareBlocks {
  tileIndex: number
}
const TilesComponent: React.FC<TilesComponentProps> = ({
  draw,
  onClick,
  tileIndex,
  children,
}) => {
  const inputStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '10mm',
  }
  return (
    <div className="tiles" onClick={onClick} data-tile-index={tileIndex}>
      {draw ? <span style={inputStyle}>{children}</span> : null}
    </div>
  )
}
const RowComponent: React.FC<RowProps> = ({ children }) => {
  const rowStyle: React.CSSProperties = {
    clear: 'both',
    display: 'flex', // Ensure that the squares are in a row and scales with the html
  }
  return <div style={rowStyle}>{children}</div>
}

//? Layout renders a <div> with the class 'board' containing each row segment which contains each tile in it.
const Layout = () => {
  //* Create a new array with a length of 9, where all elements are initially set to null
  //* create a state variable (draw) and a function to update that state (setDraw).
  //* Specify the type of the state.
  const [draw, setDraw] = useState<Array<'X' | 'O' | null>>(Array(9).fill(null))

  //* second UseState that'll be used for caching the previous Draw State to alternate the new state.
  const [isXNext, setIsXNext] = useState<boolean>(true)

  //* Implemented a tileIndex to uniquely identify each tile
  const handleClick = (tileIndex: number) => {
    setDraw((prevDraw) => {
      const newDraw = [...prevDraw]
      newDraw[tileIndex] = isXNext ? 'X' : 'O'
      setIsXNext(!isXNext) //? Toggle the flag for the next click
      return newDraw
    })
  }
  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <RowComponent key={row}>
          {[0, 1, 2].map((col) => {
            const tileIndex = row * 3 + col
            return (
              <TilesComponent
                key={tileIndex}
                draw={draw[tileIndex]}
                onClick={() => handleClick(tileIndex)}
                tileIndex={tileIndex}
              >
                {draw[tileIndex]}
              </TilesComponent>
            )
          })}
        </RowComponent>
      ))}
    </div>
  )
}

export default Layout
