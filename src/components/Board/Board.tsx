import { useState, useRef } from "react";
import { ActionType } from "context/gameReducer";
import { SquareData } from "context/gameTypes";
import useGameContext from "context/GameContext";
import Square from "./components/Square";

import * as Styled from './Board.styled';

export interface Position {
  x: number,
  y: number
}

const Board = () => {
  const [{ board, currentSquare, activeCheats, history }, dispatch] = useGameContext();
  // grabbing shows if the knight is being currently dragged around
  const [grabbing, setGrabbing] = useState(false);
  // dragTo keeps track of the cursor's position while dragging
  const [dragTo, setDragTo] = useState<Position>({ x: 0, y: 0 });
  const boardRef = useRef<HTMLTableSectionElement>(null);

  // This is the basic function that moves the knight around the board
  function moveTo(square: SquareData) {
    dispatch({ type: ActionType.MOVE_TO, payload: square })
  }

  // This is the function that starts the drag and drop action
  function pickUp(e: MouseEvent | TouchEvent) {
    const target = e.target as HTMLElement
    if (target.id !== "knight") return;

    setGrabbing(true);

    // for mouse events
    if (e instanceof MouseEvent) {
      setDragTo({ x: e.clientX, y: e.clientY });
    }
    // for touch events
    else if (e instanceof TouchEvent) {
      setDragTo({
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      });
    }
  }

  // This function tracks the knight's position when it's picked up and dragged around the board
  function drag(e: MouseEvent | TouchEvent) {
    // for mouse events
    if (e instanceof MouseEvent) {
      setDragTo({ x: e.clientX, y: e.clientY });
    }
    // for touch events
    else if (e instanceof TouchEvent) {
      setDragTo({
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      });

      // check if the knight is off board. For mouse events there's a listener on Board component
      if (!boardRef.current) return;

      const { left, right, top, bottom } = boardRef.current.getBoundingClientRect();

      if (dragTo.x < left || dragTo.x > right || dragTo.y < top || dragTo.y > bottom) {
        cancelDrop();
      }
    }
  }

  // This function handles drop when the knight is dragged around the board.
  function drop() {
    setGrabbing(false);

    const target = document.elementFromPoint(dragTo.x, dragTo.y);
    if (!target || !target.classList.contains("square")) return;
    const targetSquare = board[Number(target.id)];

    // prevent drop on a square that's already been visited
    if (targetSquare.closed) return;
    else moveTo(targetSquare);
  }

  // function to call when the mouse/touch leaves the board
  function cancelDrop() {
    setGrabbing(false);
  }

  return (
    <Styled.Container
      ref={boardRef}
      $isKnightGrabbed={grabbing}
      onMouseLeave={grabbing ? () => cancelDrop() : undefined}
      onMouseDown={activeCheats.dragDrop ? (e) => pickUp(e.nativeEvent) : undefined}
      onTouchStart={activeCheats.dragDrop ? (e) => pickUp(e.nativeEvent) : undefined}
      onMouseMove={grabbing ? (e) => drag(e.nativeEvent) : undefined}
      onTouchMove={grabbing ? (e) => drag(e.nativeEvent) : undefined}
      onMouseUp={grabbing ? drop : undefined}
      onTouchEnd={grabbing ? drop : undefined}
    >
      {board.map(square =>
        <Square
          key={square.id}
          square={square}
          isCurrentSquare={currentSquare ? currentSquare.id === square.id : false}
          isStartingPoint={history[0] === square.id}
          onMove={moveTo}
          grabbing={grabbing}
          draggingEnabled={activeCheats.dragDrop}
          dragTo={dragTo}
        />)}
    </Styled.Container>
  )
}

export default Board;