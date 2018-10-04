import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style/Footer.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div styleName='footer'>
                <div styleName='footer-item'>Info</div>
                <div styleName='footer-item'>Contact</div>
                <div styleName='footer-item'>Links</div>
            </div>
        );
    }
}

export default CSSModules( Footer, styles );