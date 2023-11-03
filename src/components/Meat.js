import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from './Theme';
import logo from '../img/25231.png'

const Meat = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <div
            style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
            }}
        >
            <h3>Click on the icon above to see changes.</h3>
            <img src={logo} alt="image"></img>
        </div>
    );
}

export default Meat;