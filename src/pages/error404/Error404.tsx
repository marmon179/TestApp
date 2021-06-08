import React from 'react'
import s from './Error404.module.css'

function Error404() {
    const eyeRit = `${s.eye} ${s.eyeR}`
    const blodAll = `${s.blod} ${s.blod2}`
    return (
        <div className={s.container}>

            <div className={s.error}>
                <p className={s.p}>4</p>
                <span className={s.dracula}>
			<div className={s.con}>
				<div className={s.hair}/>
				<div className={s.hairR}/>
				<div className={s.head}/>
    		<div className={s.eye}/>
    		<div className={eyeRit}/>
  			<div className={s.mouth}/>
  			<div className={s.blod}/>
  			<div className={blodAll}/>
			</div>
		</span>
                <p className={s.p}>4</p>

                <div className={s.pageMs}>
                    <p className={s.pageMsg}> Oops, the page you're looking for Disappeared </p>
                    {/*<button className={s.goBack} >Go Back</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Error404
