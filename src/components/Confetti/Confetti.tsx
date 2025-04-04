import useGameContext from "context/GameContext";
import ReactConfetti from "react-confetti";
import useWindowSize from "hooks/useWindowSize";
import { ActionType } from "context/gameReducer";

function Confetti() {
  const [{ activeCheats }, dispatch] = useGameContext();

  const windowSize = useWindowSize();

  function disableConfetti() {
    dispatch({ type: ActionType.TOGGLE_CHEAT, payload: { confetti: false } })
  }

  return (
    <>
      {activeCheats.confetti &&
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          style={{ zIndex: 3 }}
          numberOfPieces={700}
          onConfettiComplete={() => disableConfetti()}
        />
      }
    </>
  );
}

export default Confetti;