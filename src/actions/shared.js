import {getInitialData} from '../apis';
import {receiveUsers} from './users';
import {receiveQuestions} from './pollQuestions';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'mtsamis';

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}