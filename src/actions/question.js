import { QUESTION_GET_SUCCESS, QUESTION_GET_FAILURE } from './actionTypes';
import { triviaService } from '../services/trivia';


const getNewQuestion = () => {
    const newQuestion = triviaService.getNewQuestion();
    return newQuestion != null ? { type: QUESTION_GET_SUCCESS, question: newQuestion } : { type: QUESTION_GET_FAILURE };
};

export const questionActions = {
    getNewQuestion
};