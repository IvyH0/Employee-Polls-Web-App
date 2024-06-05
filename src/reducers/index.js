import { combineReducers } from 'redux';

import users from './users';
import questions from './pollQuestions';
import authedUser from './authedUser';
import error from './error';

export default combineReducers({
    users,
    questions,
    error,
    authedUser, 
});