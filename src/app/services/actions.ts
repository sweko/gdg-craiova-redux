import { State } from './state-management-service';

export enum ActionType {
    IncrementValue = 'IncrementValue',
    DecrementValue = 'DecrementValue'
}

export interface Action {
    type: ActionType;
    action: (state: State) => State;
  }

const incrementValue = {
    type: ActionType.IncrementValue,
    action: (state) => ({
        ...state,
        value: state.value + 1
    })
};

const decrementValue = {
    type: ActionType.DecrementValue,
    action: (state) => ({
        ...state,
        value: state.value - 1
    })
};

export const actions = [incrementValue, decrementValue];