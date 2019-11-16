import { Injectable } from '@angular/core';

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

    public setState(newState: State) {
        this.state = newState;
        this.notifyListeners();
    }

    public getState() {
        return {
            ...this.state
        };
    }
}