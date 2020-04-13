import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './navigation';
import Game from './game';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route path="/board">
                            <label>board</label>
                        </Route>
                        <Route path="/game">
                            <Game/>
                        </Route>
                        <Route path="/">

                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

