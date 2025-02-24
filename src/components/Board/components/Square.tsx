import knight from 'assets/knight.png';
import { SquareData } from 'context/gameTypes';

import './Square.css'
import * as Styled from './Square.styled';

interface SquareProps {
  square: SquareData;
  isCurrentSquare: boolean;
  onMove: (square: SquareData) => void;
  pickUp: (e: MouseEvent | TouchEvent) => void;
  drop: (square?: SquareData) => void;
  grabbing: boolean;
  draggingEnabled: boolean;
  dragTo: { x: number, y: number };
}

const Square = ({ square, isCurrentSquare, onMove, pickUp, drop, grabbing, draggingEnabled, dragTo }: SquareProps) => {

  const squareCursorStyle = {
    cursor: grabbing
      ? "grabbing"
      : square.available
        ? "pointer"
        : "auto",
  };

  function handleClick() {
    if (square.available) onMove(square);
  }

  function initiatePickUp(e: React.MouseEvent | React.TouchEvent) {
    if (draggingEnabled) pickUp(e.nativeEvent)
  }

  function initiateDrop(square?: SquareData) {
    if (draggingEnabled) drop(square)
  }

  return (
    <div
      className={`square 
      	${square.available ? "square--available" : ""} 
      	${square.closed ? "square--closed" : ""} 
      	${isCurrentSquare ? "square--currentSquare" : ""}`}
      style={squareCursorStyle}
      id={square.id.toString()}
      onClick={handleClick}
      onMouseUp={() => initiateDrop(square)}
      onTouchEnd={() => initiateDrop()}
    >
      {isCurrentSquare && (
        <Styled.KnightIcon
          src={knight}
          alt="chess knight"
          draggable={false}
          $draggingEnabled={draggingEnabled}
          $isGrabbed={grabbing}
          $dragTo={dragTo}
          onMouseDown={(e) => initiatePickUp(e)}
          onTouchStart={(e) => initiatePickUp(e)}
        />
      )}
    </div>
  );
}

export default Square;