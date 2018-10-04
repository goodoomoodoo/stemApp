import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';

class App extends React.Component 
{
    render()
    {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

export default App;