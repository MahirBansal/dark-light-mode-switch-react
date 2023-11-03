import React from 'react';
import ThemeToggler from './ThemeToggler';

const Header = () => {
    return (
        <header style={{ textAlign: "center" }}>
            <h1>Dark -Light Mode Switcher</h1>
            <ThemeToggler />
        </header>
    );
};

export default Header;
