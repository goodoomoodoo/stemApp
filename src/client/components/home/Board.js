import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style/Board.css';

class Board extends React.Component
{
    render()
    {
        return (
            <div styleName='board'>
                <div styleName='veil'>
                </div>
            </div>
        );
    }
}

export default CSSModules( Board, styles, { allowMultiple: true } );