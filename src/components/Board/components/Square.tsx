import knight from 'assets/knight.png';
import { SquareData } from 'context/gameTypes';
import { ReactComponent as Icon } from "assets/loop.svg";
import Tooltip from 'components/ui/Tooltip/Tooltip';

import * as Styled from './Square.styled';

interface SquareProps {
  square: SquareData;
  isCurrentSquare: boolean;
  isStartingPoint: boolean;
  onMove: (square: SquareData) => void;
  pickUp: (e: MouseEvent | TouchEvent) => void;
  drop: (square?: SquareData) => void;
  grabbing: boolean;
  draggingEnabled: boolean;
  dragTo: { x: number, y: number };
}

const closedTourTip = "This is your starting point. Finish one step from here to complete a closed tour.";

const Square = ({ square, isCurrentSquare, isStartingPoint, onMove, pickUp, drop, grabbing, draggingEnabled, dragTo }: SquareProps) => {

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
      {isStartingPoint && !isCurrentSquare &&
        <Styled.TooltipWrapper>
          <Tooltip customIcon={Icon} tip={closedTourTip} />
        </Styled.TooltipWrapper>
      }
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