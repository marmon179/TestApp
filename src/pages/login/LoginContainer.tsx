import React from 'react';
import * as yup from 'yup';
import {Login} from './Login';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedTC} from '../../bll/app-reducer';
import {AppStateType} from '../../bll/store';


export const LoginContainer = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStateType,boolean>( state => state.app.isLoggedIn)

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

    const onSubmit = React.useCallback((values: any) => {
        dispatch(setIsLoggedTC(values))
        // alert(JSON.stringify(values))

    }, [])
    return (
        <div>
            <Login
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                isLoggedIn={isLoggedIn}
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
