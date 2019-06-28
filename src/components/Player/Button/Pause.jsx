import React from 'react';
import './Pause.css';

export class Pause extends React.Component {
    render() {
        return (
            <span className="btn-container" onClick={this.props.onPlayerClick}>
                <svg viewBox="0 0 60 60" className="pause">
                    <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M27,46h-8V14h8V46z M41,46h-8V14h8V46z"/>
                </svg>
            </span>
        );
    }
}