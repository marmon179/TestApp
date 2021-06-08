import React from "react";
import s from "./Title.module.scss";


export const Title = (props: any) => {
    return (<h2 className={s.title}>{props.title}</h2>
    );
};

export default Title;