import React from 'react';
import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../../style/NavBar.css';

class NavBar extends React.Component
{
    constructor( props )
    {
        super( props );
    }
    
    render()
    {
        return (
            <div styleName='nav-bar'>
                <div styleName='nav-bar-title'>
                    TITLE
                </div>

                <div styleName='nav-bar-first-el nav-bar-el'>
                    Item 1
                    <div styleName='nav-bar-dmenu'>
                        <ul>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </div>
                </div>

                <div styleName='nav-bar-el'>
                    Item 2
                    <div styleName='nav-bar-dmenu'>
                        <ul>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </div>
                </div>

                <div styleName='nav-bar-el'>
                    Item 3
                    <div styleName='nav-bar-dmenu'>
                        <ul>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </div>
                </div>

                <div styleName='nav-bar-el'>
                    Item 4
                    <div styleName='nav-bar-dmenu'>
                        <ul>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( CSSModules( NavBar, styles, { allowMultiple: true } ) );