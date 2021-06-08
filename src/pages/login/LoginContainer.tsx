import React from 'react';
import * as yup from 'yup';
import {Login} from './Login';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedTC} from '../../bll/app-reducer';
import {AppStateType} from '../../bll/store';
import {useCallback} from 'react';


export const LoginContainer = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.app.isLoggedIn)
    const loading = useSelector<AppStateType, boolean>(state => state.app.loading)
    const buttonDisable = useSelector<AppStateType, boolean>(state => state.app.buttonDisable)

    const initialValues: initialValueType = {
        clientId: 1,
        email: '',
        password: ''
    }

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: yup.string()
            .min(4, 'Password must be at least 4 characters')
            .required('Password is required'),

    })

    const onSubmit = useCallback((values: initialValueType) => {
        dispatch(setIsLoggedTC(values))
    }, [dispatch])
    return (
        <div>
            <Login
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                isLoggedIn={isLoggedIn}
                loading={loading}
                buttonDisable={buttonDisable}
            />

        </div>
    );
};
//types
export type initialValueType = {
    clientId: number
    email: string
    password: string
}
