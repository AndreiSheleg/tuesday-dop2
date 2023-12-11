import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import styles from "./components/Site.module.css";
import {S} from "./_stylesSC";
import {useWindowSize} from "./helpers/useWindowSize";


function App() {

    //const [burger, setBurger] = useState(true)

const widthSize = useWindowSize()

    return (
        <>
            <div className={styles.header}><h1>HEADER - всегда, на каждой странице</h1></div>
            <div className={styles.body}>
                {widthSize > 900
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1 или любое назв. 1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2 или любое назв. 2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3 или любое назв. 3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>Protected PAGE</NavLink></S.NavWrapper>
                    </div>
                    : <div>=</div>
                }

                <div className={styles.content}>
                    {/*это и есть children*/}
                    <Outlet/>
                </div>
            </div>
            <div>ИНФОРМАЦИЯ FOOTER - всегда, на каждой странице</div>
        </>
    );
}


export default App;
