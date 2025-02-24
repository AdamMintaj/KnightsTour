import useGameContext from "context/GameContext";
import ReactConfetti from "react-confetti";
import useWindowSize from "hooks/useWindowSize";
import { ActionType } from "context/gameReducer";

function Confetti() {
  const [{ activeCheats }, dispatch] = useGameContext();

  const windowSize = useWindowSize();

  function disableConfetti() {
    const updatedActiveCheats = {
      ...activeCheats, confetti: false
    }
    dispatch({ type: ActionType.TOGGLE_CHEAT, payload: updatedActiveCheats })
  }

  return (
    <>
      {activeCheats.confetti &&
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={700}
          onConfettiComplete={() => disableConfetti()}
        />
      }
    </>
  );
}

export default Confetti;