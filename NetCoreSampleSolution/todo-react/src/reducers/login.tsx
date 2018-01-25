import { TodoAction } from "../actions/index";
import { LOGIN } from "../types/index";

export function login(state:string = '', action:TodoAction) {
    switch(action.type){
        case LOGIN:
            return state;
        default:
            return state;
    }
}