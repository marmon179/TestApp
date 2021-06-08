import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../bll/store';
import {PATH} from '../../Routes';
import {fetchUserTC, logoutTC, UserType} from '../../bll/app-reducer';
import {Profile} from './Profile';

export const ProfileContainer = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.app.isLoggedIn)
    const user = useSelector<AppStateType, UserType>(state => state.app.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserTC())
    }, [])

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC(),)
    }, [dispatch])

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <Profile user={user} logoutHandler={logoutHandler}/>
    );
}



