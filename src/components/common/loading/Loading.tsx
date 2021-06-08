import React from 'react';
import loadingImg from '../../../assets/img/loading/loading.svg'
import s from './Loading.module.scss'

export const Loading = () => {
    return (
        <div className={s.wrapperLoading}>
            <img src={loadingImg}/>
        </div>
    );
};

