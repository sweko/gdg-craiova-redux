import { Injectable } from '@angular/core';
import { ActionType, actions } from './actions';

export interface State {
    value: number;
}

export type Listener = () => void;

@Injectable()
export class Statemax {
    private state: State = {
        value: 10
    }

    private listeners: Listener[] = [];

    public register(listener: Listener) {
        this.listeners.push(listener);
    }

    private notifyListeners() {
        for (const listener of this.listeners) {
            listener();
        }
    }

    public doSomething(actionType: ActionType) {
        const action = actions.find(act => act.type === actionType)
        this.state = action.action(this.state);
        this.notifyListeners();
    }

    public getState() {
        return {
            ...this.state
        };
    }
}