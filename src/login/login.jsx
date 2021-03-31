import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div>
                <h1>Login</h1>
                <div className={styles.button__container}>
                    <button className={`${styles.button} ${styles.google}`}>Google</button>
                    <button className={`${styles.button} ${styles.github}`}>Github</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;