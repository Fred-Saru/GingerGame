import { QUESTION_GET_SUCCESS, QUESTION_GET_FAILURE } from '../actions/actionTypes';


export function defaultQuestionState() {
    return {
            answer: "0",
            answerList: []
    };
}

export function questionReducer(state, action) {
    switch (action.type) {
        case QUESTION_GET_SUCCESS:
            return {
                ...action.question
            };
        case QUESTION_GET_FAILURE:
            return {
                ...defaultQuestionState()
            };
        default:
            return state;
    }
}