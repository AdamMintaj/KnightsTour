import { useState, useEffect } from "react";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";
import Button from "components/ui/Button/Button";
import useGameContext from "context/GameContext";

function BackButton() {
  const [{ history, board, gameStatus, currentSquare, activeCheats, counter }, dispatch] = useGameContext();
  const [backstepsLeft, setBackstepsLeft] = useState(3);

  // reset backstepsLeft when a new game starts
  useEffect(() => {
    if (counter === 0) setBackstepsLeft(3);
  }, [counter]);

  // set backstepsLeft to 3 if the player disables unlimited backsteps during a game
  useEffect(() => {
    setBackstepsLeft(3);
  }, [activeCheats.unlimitedBacksteps]);

  const isButtonLocked = !activeCheats.backsteps && !activeCheats.unlimitedBacksteps;

  function handleClick() {
    if (isButtonLocked) return;
    if (counter === 0) return;
    if (gameStatus !== GameStatus.IN_PROGRESS) return;

    setBackstepsLeft((prevBacksteps) => Math.max(prevBacksteps - 1, 0));

    if (activeCheats.unlimitedBacksteps || backstepsLeft > 0) {
      goBack();
    }
  }

  function goBack() {
    const squareToOpen = currentSquare ? [currentSquare.id] : [];
    const lastVisitedSquare = board.find(square => square.id === history[history.length - 2]) ?? null;

    dispatch({
      type: ActionType.UNDO_MOVE,
      payload: { squareToOpenId: squareToOpen, lastVisitedSquare: lastVisitedSquare }
    })
  }

  return (
    <Button onClick={handleClick} disabled={isButtonLocked}>
      go back
      {activeCheats.backsteps && !activeCheats.unlimitedBacksteps && `(${backstepsLeft})`}
    </Button>
  );
}

export default BackButton;