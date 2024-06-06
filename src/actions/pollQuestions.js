import { saveQuestion, saveQuestionAnswer} from '../apis';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

function saveAnswer ({authedUser, qid, answer}) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

//ascynchronous action creator/invokes saving the answer
export function handleSaveAnswer (info) {
    return (dispatch) => {
        dispatch(saveAnswer(info));

        return saveQuestionAnswer(info)
        .catch((e) => {
            console.warn('Error in handleSaveAnswer:', e);
            dispatch(saveAnswer(info));
            alert('There was an error saving the answer. Try again.');
        });
    };
};


function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    };

};

function addQuestionToUser(question) {
    return {
        type: ADD_QUESTION_TO_USER,
        question: question,
      };
};



//ascynchronous action creator
export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        })
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(addQuestionToUser(formattedQuestion));
        })
    }
}


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};
