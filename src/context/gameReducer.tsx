import { SquareData, GameState, GameStatus, StatisticsData, CheatsData } from "./gameTypes";
import { getNewBoard, getUpdatedBoard } from "utils/helpers";

export enum ActionType {
  MOVE_TO = "moveTo",
  UPDATE_BOARD = "updateBoard",
  SET_GAME_STATUS = "setGameStatus",
  RESET_GAME = "resetGame",
  UPDATE_STATISTICS = "updateStatistics",
  UNDO_MOVE = "undoMove",
  TOGGLE_CHEAT = "toggleCheat",
  TOGGLE_EASY_MODE = "toggleEasyMode"
}

interface MoveToAction {
  type: ActionType.MOVE_TO,
  payload: SquareData
}

interface UpdateBoardAction {
  type: ActionType.UPDATE_BOARD,
  payload: SquareData[]
}

interface SetGameStatusAction {
  type: ActionType.SET_GAME_STATUS,
  payload: GameStatus
}

interface ResetGameAction {
  type: ActionType.RESET_GAME,
}

interface UpdateStatisticsAction {
  type: ActionType.UPDATE_STATISTICS,
  payload: StatisticsData
}

interface UndoMoveAction {
  type: ActionType.UNDO_MOVE
  payload: {
    squareToOpenId: number[],
    lastVisitedSquare: SquareData | null
  }
}

interface ToggleCheatAction {
  type: ActionType.TOGGLE_CHEAT,
  payload: CheatsData
}

interface ToggleEasyModeAction {
  type: ActionType.TOGGLE_EASY_MODE
}

export type ReducerAction = MoveToAction | UpdateBoardAction | SetGameStatusAction | ResetGameAction | UpdateStatisticsAction | UndoMoveAction | ToggleCheatAction | ToggleEasyModeAction;

export function reducer(state: GameState, action: ReducerAction): GameState {
  switch (action.type) {
    case ActionType.MOVE_TO:
      return {
        ...state,
        currentSquare: action.payload,
        board: getUpdatedBoard(state.board, [action.payload.id]),
        history: [...state.history, action.payload.id],
        counter: state.counter + 1
      }
    case ActionType.UPDATE_BOARD:
      return {
        ...state,
        board: action.payload
      }
    case ActionType.SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload
      }
    case ActionType.RESET_GAME:
      return {
        ...state,
        board: getNewBoard(),
        history: [],
        currentSquare: null,
        counter: 0,
        gameStatus: GameStatus.NO_GAME
      }
    case ActionType.UPDATE_STATISTICS:
      return {
        ...state,
        gameStatistics: action.payload
      }
    case ActionType.UNDO_MOVE:
      return {
        ...state,
        board: getUpdatedBoard(state.board, [], action.payload.squareToOpenId),
        currentSquare: action.payload.lastVisitedSquare,
        history: state.history.slice(0, state.history.length - 1),
        counter: state.counter === 0 ? 0 : state.counter - 1
      }
    case ActionType.TOGGLE_CHEAT:
      return {
        ...state,
        activeCheats: action.payload
      }
    case ActionType.TOGGLE_EASY_MODE:
      return {
        ...state,
        easyMode: !state.easyMode
      }
    default:
      return state;
  }
}