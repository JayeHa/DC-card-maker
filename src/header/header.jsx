import React from 'react';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt=""/>
            <h2 className={styles.title} >Business Card Maker</h2>
        </header>
    );
};

export default Header;