export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER';

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
};

export function loginUser (id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id)); 
        localStorage.setItem('authedUser', JSON.stringify(id));
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch({ type: LOGOUT_USER });
        localStorage.removeItem('authedUser');
    };
}
