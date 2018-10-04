import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';

// TODO: switch to hydrate if server side rendered
ReactDOM.render(
    <Router>
        <Route component={ App } />
    </Router>,
    document.getElementById( 'root' )
);