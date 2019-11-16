import { Injectable } from '@angular/core';

export interface State {
    value: number;
}

@Injectable()
export class Statemax {
    state: State = {
        value: 10
    }
}