import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'
import {PATH} from '../../Routes';

export const Header = React.memo(() => {
    return (
        <div className={style.header}>
            <NavLink to={PATH.LOGIN} className={style.link} activeClassName={style.active}>Login</NavLink>
            <NavLink to={PATH.PROFILE} className={style.link} activeClassName={style.active}>Profile</NavLink>

        </div>
    );
})

