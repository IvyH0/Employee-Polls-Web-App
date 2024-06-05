export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export function receiveError (error) {
    return {
        type: RECEIVE_ERROR,
        error,
    };
}