import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style/Caption.css';

class Caption extends React.Component
{
    render()
    {
        return (
            <div styleName='caption'>
                <h1>
                    CAPTION
                </h1>
                <h4>
                    Some description here
                </h4>
            </div>
        );
    }
}

export default CSSModules( Caption, styles );