import Board from "components/Board/Board";
import Result from "components/Result/Result";
import Controls from "components/Controls/Controls";
import Achievements from "components/Achievements/Achievements";
import useGameContext from "context/GameContext";
import useMarkAvailableSquares from "hooks/useMarkAvailableSquares";
import useWatchGameStatus from "hooks/useWatchGameStatus";
import useUpdateStats from "hooks/useUpdateStats";
import { GameStatus } from "context/gameTypes";
import Confetti from "components/Confetti/Confetti";

import * as Styled from './Game.styled';

function Game() {
  const [{ gameStatus }] = useGameContext();

  useMarkAvailableSquares();
  useUpdateStats();
  useWatchGameStatus();

  const isGameFinished = gameStatus === GameStatus.WON || gameStatus === GameStatus.LOST;

  return (
    <Styled.Container>
      <Confetti />
      <Controls />
      <Achievements />
      {isGameFinished ? <Result /> : <Board />}
    </Styled.Container>
  );
}

export default Game;