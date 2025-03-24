import { useEffect } from "react";
import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";

/**
 * Monitors the state of the board and counter and updates gameStatus when specified conditions are met.
 */
const useWatchGameStatus = () => {
  const [{ board, counter, activeCheats, gameStatus }, dispatch] = useGameContext();

  const noGamePlayed = counter === 0;
  const isGameWon = !board.some((cell) => cell.available) && board.every((cell) => cell.closed);
  // checking if gameStatus is LOST in isGameLost makes it impossible to continue an already lost game
  // by turning on the drag&drop cheat
  const isGameLost = gameStatus === GameStatus.LOST ||
    (!activeCheats.dragDrop && !board.some((cell) => cell.available));

  useEffect(() => {
    if (noGamePlayed)
      dispatch({ type: ActionType.SET_GAME_STATUS, payload: GameStatus.NO_GAME })
    else if (isGameWon)
      dispatch({ type: ActionType.SET_GAME_STATUS, payload: GameStatus.WON })
    else if (isGameLost)
      dispatch({ type: ActionType.SET_GAME_STATUS, payload: GameStatus.LOST })
    else
      dispatch({ type: ActionType.SET_GAME_STATUS, payload: GameStatus.IN_PROGRESS })
  }, [board, counter, activeCheats, dispatch])
}

export default useWatchGameStatus;