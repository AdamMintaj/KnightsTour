import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";
import Button from "components/ui/Button/Button";

// import "./Result.scss";

function Result() {
  const [{ counter, gameStatus }, dispatch] = useGameContext();

  function handleClick() {
    dispatch({ type: ActionType.RESET_GAME })
  }

  const winMessage = (
    <>
      congrats, you won!
      <br></br>
      <br></br>
      however, there are 19,591,828,170,979,903 other solutions. want to
      play again?
    </>
  );
  const loseMessage = (
    <>you lost! but you've fought a fair battle of {counter} steps.</>
  );
  return (
    <div className="result">
      <p className="result__text">
        {gameStatus === GameStatus.WON ? winMessage : loseMessage}
      </p>
      <Button onClick={handleClick}>
        {gameStatus === GameStatus.WON ? "play" : "try"} again
      </Button>
    </div>
  );
}

export default Result;