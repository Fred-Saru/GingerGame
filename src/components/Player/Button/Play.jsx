import React from 'react';
import './Play.css';

export class Play extends React.Component {
    render() {
        return (
            <span className="btn-container">
                {/* <svg viewBox="0 0 50 60" width="50" height="50" >
                    <polygon points="0,0 50,30 0,60" />
                </svg> */}
                <svg className="play" viewBox="0 0 60 60" onClick={this.props.onPlayerClick}>
                    <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"/>
                </svg>
            </span>
        );
    }
}