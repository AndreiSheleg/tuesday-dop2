import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import styles from "./components/Site.module.css";
import {S} from "./_stylesSC";


function App() {
    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={'/page/0'}>Page1 или любое назв. 1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page2 или любое назв. 2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page3 или любое назв. 3</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    {/*это и есть children*/}
                    <Outlet/>
                </div>
             </div>
            <div>ИНФОРМАЦИЯ FOOTER</div>
        </>
    );
}


export default App;
