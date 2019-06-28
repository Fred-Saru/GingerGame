
const getNewQuestion = () => {
    const answer = Math.round(20 + Math.random() * 20000);
    const answerList = [answer, answer - 100, answer + 100, answer + 500];

    return {
        answer,
        answerList
    };
};

export const triviaService = {
    getNewQuestion
};