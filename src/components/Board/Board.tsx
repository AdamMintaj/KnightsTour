import { useState } from "react";
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
  const [{ board, currentSquare, activeCheats }, dispatch] = useGameContext();
  // grabbing shows if the knight is being currently dragged around
  const [grabbing, setGrabbing] = useState(false);
  // dragTo keeps track of the cursor's position while dragging
  const [dragTo, setDragTo] = useState<Position>({ x: 0, y: 0 });

  // This is the basic function that moves the knight around the board
  function moveTo(square: SquareData) {
    dispatch({ type: ActionType.MOVE_TO, payload: square })
  }

  // This is the function that starts the drag and drop action
  function pickUp(e: MouseEvent | TouchEvent) {
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

      // check if the target is off board. For mouse events there's a listener on Board component
      const target = document.elementFromPoint(dragTo.x, dragTo.y);
      if (!target ||
        !(
          target.classList.contains("square") ||
          target.classList.contains("board")
        )
      ) cancelDrop();
    }
  }

  // This function handles drop when the knight is dragged around the board.
  // Passing square as parameter works only for mouse events. Since TouchEnd is binded with TouchStart the target square has to be determined in a different way
  function drop(square?: SquareData) {
    if (!grabbing) return;

    setGrabbing(false);

    let targetSquare = square;

    // for touch events
    if (!targetSquare) {
      const target = document.elementFromPoint(dragTo.x, dragTo.y);
      if (!target || !target.classList.contains("square")) return;
      targetSquare = board[Number(target.id)];
    }

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
      className="board"
      style={{ cursor: grabbing ? "grabbing" : "auto" }}
      onMouseLeave={grabbing ? () => cancelDrop() : undefined}
      onMouseMove={grabbing ? (e) => drag(e.nativeEvent) : undefined}
      onTouchMove={grabbing ? (e) => drag(e.nativeEvent) : undefined}
    >
      {board.map(square =>
        <Square
          key={square.id}
          square={square}
          isCurrentSquare={currentSquare ? currentSquare.id === square.id : false}
          onMove={moveTo}
          grabbing={grabbing}
          draggingEnabled={activeCheats.dragDrop}
          dragTo={dragTo}
          pickUp={pickUp}
          drop={drop}
        />)}
    </Styled.Container>
  )
}

export default Board;