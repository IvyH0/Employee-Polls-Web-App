import {getInitialData} from '../apis';
import {receiveUsers} from './users';
import {receiveQuestions} from './pollQuestions';
import {setAuthedUser} from './authedUser';

import { receiveError } from './error';

const authedId = 'mtsamis';

export function handleInitialData (authedId) {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(receiveError(null))
                if (authedId) {
                    dispatch(setAuthedUser(authedId))
                }

            })
    }
}