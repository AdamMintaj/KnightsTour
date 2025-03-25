import Board from "components/Board/Board";
import Result from "components/Result/Result";
import Controls from "components/Controls/Controls";
import Achievements from "components/Achievements/Achievements";
import useGameContext from "context/GameContext";
import useMarkAvailableSquares from "hooks/useMarkAvailableSquares";
import useWatchGameStatus from "hooks/useWatchGameStatus";
import { GameStatus } from "context/gameTypes";
import { ActionType } from "context/gameReducer";
import Confetti from "components/Confetti/Confetti";
import Richard from "components/Richard/Richard";
import { useEffect } from "react";

import * as Styled from './Game.styled';


function Game() {
  const [{ gameStatus }, dispatch] = useGameContext();

  useMarkAvailableSquares();
  useWatchGameStatus();

  /* This cleanup turns off visual effects when the component
   unmounts to prevent an ugly flash when it mounts back again */
  useEffect(() => {
    return () => {
      dispatch({ type: ActionType.TOGGLE_CHEAT, payload: { prize: false, confetti: false } })
    }
  }, [])

  const isGameFinished = gameStatus === GameStatus.WON || gameStatus === GameStatus.LOST;

  return (
    <Styled.Container>
      <Richard />
      <Confetti />
      <Styled.InnerContainer>
        <Styled.AsideContentWrapper>
          <Controls />
          <Achievements />
        </Styled.AsideContentWrapper>
        {isGameFinished ? <Result /> : <Board />}
      </Styled.InnerContainer>
    </Styled.Container>
  );
}

export default Game;