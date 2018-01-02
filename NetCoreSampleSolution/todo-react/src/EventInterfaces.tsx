import * as React from 'react';

export interface ItextChangeCallback {
    (e: React.SyntheticEvent<HTMLInputElement>): void;
}

export interface IitemsCallbacks {
    add(itemName: string): void;
    delete(id:number, index: number): void;
}
