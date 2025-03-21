import { createContext, useReducer, useContext } from "react";
import { reducer, ReducerAction } from './gameReducer';
import { GameState, GameStatus } from "./gameTypes";
import { getNewBoard, getStatistics } from "utils/helpers";

const initialGameState: GameState = {
  board: getNewBoard(),
  currentSquare: null,
  gameStatus: GameStatus.NO_GAME,
  history: [],
  counter: 0,
  gameStatistics: getStatistics(),
  activeCheats: {
    unlimitedBacksteps: false,
    dragDrop: false,
    prize: false,
    backsteps: false,
    confetti: false
  },
  easyMode: false
}

type GameContextType = [GameState, React.Dispatch<ReducerAction>];

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextValue, dispatch] = useReducer(reducer, initialGameState);

  return (
    <GameContext.Provider value={[contextValue, dispatch]}>
      {children}
    </GameContext.Provider>
  );
}

/**
 * Global context containing game related data
 * 
 * - `board` (SquareData[]): an object with all 64 squares and their current state
 * - `currentSquare` (SquareData | null): square where the player currently stands or null if no game is played at the moment
 * - `gameStatus` ("won" | "lost" | "inProgress" | "noGame"): current state of the game
 * - `history` (number[]): an array of IDs of all visited squares, chronologically
 * - `counter` (number): number of moves made so far
 * - `gameStatistics` (StatisticsData): an object with statistics of all played games
 * - `activeCheats` (CheatsData): an object with the current state of all cheats (enabled/disabled)
 * - `easyMode` (boolean): a boolean indicating whether the game's easy mode is on 
 * 
 * @returns tuple with the current game state and the dispatch function to update it
 */
export default function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}