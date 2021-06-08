import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../bll/store';
import {PATH} from '../../Routes';
import {logoutTC} from '../../bll/app-reducer';
import {Button, Palette, Size} from '../../components/common/button/Button';

export const Profile = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.app.isLoggedIn)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            <Button onClick={logoutHandler} size={Size.medium} palette={Palette.primary} title="Log out"/>
        </div>
    );
};



