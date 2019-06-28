import { defaultQuestionState, questionReducer } from './question';

function defaultState() {
    return {
        question: defaultQuestionState()        
    };
}

export default function rootReducer(state = defaultState(), action) {
    return {
        question: questionReducer(state.question, action),
    }
}