import React from 'react';
import {Button, Palette, Size} from '../../components/common/button/Button';
import style from './Profile.module.scss'
import {UserType} from '../../bll/app-reducer';

type PropsType = {
    user: UserType
    logoutHandler: () => void
}

export const Profile: React.FC<PropsType> = React.memo(({user, logoutHandler}) => {
    return (
        <div className={style.wrapper}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <Button onClick={logoutHandler} size={Size.medium} palette={Palette.primary} title="Log out"/>
        </div>
    );
})



