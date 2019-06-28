import React from 'react';
import { connect } from 'react-redux';
import './Player.css';
import { questionActions } from '../../actions/question';
import Audio from '../../Audio';
import { Play } from './Button/Play';
import { Pause } from './Button/Pause';

class Player extends React.Component {

    oscillator = Audio.context.createOscillator();

    constructor(props) {
        super(props);

        Audio.masterGainNode.connect(Audio.context.destination);
        Audio.masterGainNode.gain.setValueAtTime(0, Audio.context.currentTime);
        this.oscillator.connect(Audio.masterGainNode);
        this.oscillator.start();

        this.props.dispatch(questionActions.getNewQuestion());

        this.state = {
            isPlaying: false
        };
    }
    
    componentDidUpdate(oldProps) {
        if(oldProps.frequency !== this.props.frequency) {
            this.stopSound();
        }
    }

    handlePlayerClick = () => {
        const { isPlaying } = this.state;
        const shouldBePlaying = !isPlaying;
        
        shouldBePlaying ? this.playSound() : this.stopSound();
    }

    playSound = () => {
        Audio.masterGainNode.gain.setTargetAtTime(0.1, Audio.context.currentTime, 0.025);
        this.setState({
            isPlaying: true
        });
    }

    stopSound = () => {
        Audio.masterGainNode.gain.setTargetAtTime(0, Audio.context.currentTime, 0.025);
        this.setState({
            isPlaying: false
        });
    }
    
    render() {
        const { isPlaying } = this.state;
        const { frequency } = this.props || 0;

        
        this.oscillator.frequency.setValueAtTime(frequency, Audio.context.currentTime);
        
        return (
            <div className="player-container">
                { isPlaying 
                    ? <Pause onPlayerClick={this.handlePlayerClick} />
                    : <Play onPlayerClick={this.handlePlayerClick} /> 
                }
                {/* <button className={`player-btn ${isPlaying ? 'playing' : ''}`} type="button" onClick={this.handlePlayerClick}>{ isPlaying ? "Stop" : "Start" }</button> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { question } = state;

    return {
        frequency: question.answer
    };
};

const connectedPlayer = connect(mapStateToProps)(Player);

export { connectedPlayer as Player};