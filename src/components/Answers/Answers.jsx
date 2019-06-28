import React from 'react';
import { connect } from 'react-redux';
import './Answers.css';
import { questionActions } from '../../actions/question';

class Answers extends React.Component {
    
    handleAnswerClick = (proposition) => {
        const { answer } = this.props;
        
        if(proposition === answer) {
            console.log("You win !!!");
            
        } else {
            console.log("You loose !!!");
        }

        this.props.dispatch(questionActions.getNewQuestion());
    }

    render() {
        const { answerList } = this.props;

        return (
            <div className="answers-container">
                <ul>
                {answerList && answerList.map((prop) => {
                    return (
                        <li key={prop}>
                            <button type="button" onClick={() => this.handleAnswerClick(prop)}>{prop}</button>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { question } = state;
    const { answer, answerList } = question;

    return {
        answer,
        answerList
    };
};

const connectedAnswers = connect(mapStateToProps)(Answers);
export { connectedAnswers as Answers};