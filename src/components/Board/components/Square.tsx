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
  grabbing: boolean;
  draggingEnabled: boolean;
  dragTo: { x: number, y: number };
}

const closedTourTip = "This is your starting point. Finish one step from here to complete a closed tour.";

const Square = ({ square, isCurrentSquare, isStartingPoint, onMove, grabbing, draggingEnabled, dragTo }: SquareProps) => {
  return (
    <Styled.Container
      className='square'
      $available={square.available}
      $closed={square.closed}
      $currentSquare={isCurrentSquare}
      $isKnightGrabbed={grabbing}
      id={square.id.toString()}
      onClick={square.available ? () => onMove(square) : undefined}
    >
      {isStartingPoint && !isCurrentSquare &&
        <Styled.TooltipWrapper>
          <Tooltip customIcon={Icon} tip={closedTourTip} />
        </Styled.TooltipWrapper>
      }
      {isCurrentSquare && (
        <Styled.KnightIcon
          src={knight}
          id="knight"
          alt="chess knight"
          draggable={false}
          $draggingEnabled={draggingEnabled}
          $isGrabbed={grabbing}
          $dragTo={dragTo}
        />
      )}
    </Styled.Container>
  );
}

export default Square;