import {Form, Formik} from 'formik';
import React from 'react';
import {initialValueType} from './LoginContainer';
import style from './Login.module.scss'
import {Logo} from '../../components/common/logo/Logo';
import {Title} from '../../components/title/Title';
import {InputFormik} from '../../components/common/inputFormik/InputFormik';
import {Button, Palette, Size} from '../../components/common/button/Button';
import { Redirect } from 'react-router-dom';
import { PATH } from '../../Routes';

export type PropsType = {
    initialValues: initialValueType
    onSubmit: (values: initialValueType) => void
    isLoggedIn:boolean
    // disable: boolean
    // loading: boolean
    validationSchema: any
}

export const Login: React.FC<PropsType> = React.memo(props => {

    const {initialValues, onSubmit, validationSchema} = props

    if(props.isLoggedIn) {
        return <Redirect to={PATH.PROFILE} />
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className={style.form}>


                <div className={style.containerForm}>
                    <div className={style.formWrapper}>

                        <Logo/>
                        <Title title="Sign In"/>

                        <Form className={style.formLogin}>

                            <InputFormik
                                type="email"
                                title="Email"
                                name="email"
                            />

                            <InputFormik
                                title="Password"
                                name="password"
                            />

                            <div className={style.buttonInner}>
                                <Button size={Size.big} palette={Palette.primary} title="Submit"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>

    );
})

