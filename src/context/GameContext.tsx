import { createContext, useReducer, useContext } from "react";
import { reducer, GameState, ReducerAction } from './gameReducer';

const initialGameState: GameState = {
  exampleValue: "dupa"
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

export default function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}