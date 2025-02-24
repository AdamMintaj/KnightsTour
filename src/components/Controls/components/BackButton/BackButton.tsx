import { useState, useEffect } from "react";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";
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

  // const lockedButtonStyle = {
  //   cursor: "auto",
  //   backgroundColor: "rgb(188, 167, 157)",
  //   boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  // };

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
    <button
      // className={"controls__button"}
      onClick={handleClick}
    // style={isLocked ? lockedButtonStyle : {}}
    >
      go back
      {activeCheats.backsteps && !activeCheats.unlimitedBacksteps && (
        <span className="backstepsCounter">({backstepsLeft})</span>
      )}
    </button>
  );
}

export default BackButton;