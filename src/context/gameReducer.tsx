export interface GameState {
  exampleValue: string;
}

export enum ActionType {
  EXAMPLE_ACTION = "example-action"
}

export interface ReducerAction {
  type: ActionType;
  payload?: any;
}

export function reducer(state: GameState, action: ReducerAction) {
  switch (action.type) {
    case ActionType.EXAMPLE_ACTION:
      return {
        ...state,
        exampleValue: action.payload
      }
    default:
      return state;
  }
}