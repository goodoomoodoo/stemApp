import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style/Home.css';
import NavBar from './NavBar';
import Board from './Board';
import Caption from './Caption';
import Missionaries from './Missionaries';
import Footer from './Footer';

class Home extends React.Component
{
    render() 
    {
        return (
            <div>
                <NavBar />
                <Board />
                <Caption />
                <Missionaries />
                <Footer />
            </div>            
        );
    }
}

export default CSSModules( Home, styles, { allowMultiple: true } );