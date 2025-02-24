import { useEffect } from "react";
import useGameContext from "context/GameContext";
import { getNewBoard, checkIfValidMove } from "../utils/helpers";
import { ActionType } from "context/gameReducer";

/**
 * This hook marks squares that can be visited in the next step whenever
 * currentSquare changes (when the player makes a move).
 * If there is no current square a new board is prepared.
 */
const useMarkAvailableSquares = () => {
  const [{ currentSquare, board }, dispatch] = useGameContext();

  useEffect(() => {
    if (currentSquare) {
      const updatedBoard = board.map((square) =>
        square.closed ?
          { ...square, available: false } :
          { ...square, available: checkIfValidMove(square, currentSquare) }
      )

      dispatch({ type: ActionType.UPDATE_BOARD, payload: updatedBoard })
    } else dispatch({ type: ActionType.UPDATE_BOARD, payload: getNewBoard() });
  }, [currentSquare]);
};

export default useMarkAvailableSquares;