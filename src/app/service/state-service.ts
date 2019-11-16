import { Injectable } from '@angular/core';

export interface State {
    value: number;
}

export type Listener = () => void;

@Injectable()
export class StateMex {

    private listeners: Listener[] = [];

    private state:State = {
        value: 10
    };

    public getState() {
        // todo make immutable
        return { ...this.state};
    }

    public registerListener(listener: Listener) {
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


}