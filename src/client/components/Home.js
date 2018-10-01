import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../style/Home.css';

class Home extends React.Component
{
    render() 
    {
        return (
            <div styleName='container'>App starts Here!!</div>
        );
    }
}

export default CSSModules( Home, styles, { allowMultiple: true } );