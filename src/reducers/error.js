import { RECEIVE_ERROR } from "../actions/error";

export default function error(state = null, action) {
    switch (action.type) {
        case RECEIVE_ERROR:
            return action.error;
        default:
            return state;
    }
}