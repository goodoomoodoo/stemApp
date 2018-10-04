import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style/Missionaries.css';

class Missionaries extends React.Component
{
    render()
    {
        return (
            <div styleName='missionaries'>
                <h2>Our Statement</h2>
                <p>A very very long text... text... text...</p>
            </div>
        )
    }
}

export default CSSModules( Missionaries, styles );