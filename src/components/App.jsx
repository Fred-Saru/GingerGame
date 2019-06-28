import React from 'react';
import './App.css';

import { Answers } from './Answers/Answers';
import { Player } from './Player/Player';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Player />
                <Answers />
            </div>
        );
    }
}

export default App;