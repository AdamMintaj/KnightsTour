import knight from 'assets/knight.png';
import { SquareData } from 'context/gameTypes';

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
    <Styled.Container
      $available={square.available}
      $closed={square.closed}
      $currentSquare={isCurrentSquare}
      $isKnightGrabbed={grabbing}
      id={square.id.toString()}
      className='square'
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
    </Styled.Container>
  );
}

export default Square;