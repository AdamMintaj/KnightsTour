import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";
import Button from "components/ui/Button/Button";

import * as Styled from './Result.styled';

function Result() {
  const [{ counter, gameStatus }, dispatch] = useGameContext();

  function handleClick() {
    dispatch({ type: ActionType.RESET_GAME })
  }

  const winMessage = (
    <>
      Congratulations, you won!
      <br></br>
      <br></br>
      However, there are 19,591,828,170,979,903 other solutions. Want to play again?
    </>
  );

  const loseMessage = (
    <>You lost!
      <br></br>
      <br></br>
      But you've fought a fair battle of {counter} steps.</>
  );

  return (
    <Styled.Container>
      <p>
        {gameStatus === GameStatus.WON ? winMessage : loseMessage}
      </p>
      <Button onClick={handleClick}>
        {gameStatus === GameStatus.WON ? "play" : "try"} again
      </Button>
    </Styled.Container>
  );
}

export default Result;