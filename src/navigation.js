import React from 'react';
import {useHistory} from 'react-router';

export default function Navigation() {
    let history = useHistory();

    function handleClick(path) {
        history.push(path);
    }

    return (
        <div>
            <button onClick={() => handleClick("/board")}>Board</button>
            <button onClick={() => handleClick("/game")}>Game</button>
        </div>
    )
}
