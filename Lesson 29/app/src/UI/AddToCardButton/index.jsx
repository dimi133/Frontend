import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function AddToCardButton({children, type, ...props}) {

    if (type === 'Link'){
        return <Link className={s.btn} {...props}>{children}</Link>
    } else{
        return <button className={s.btn} {...props}>{children}</button>
    }
}


// добавить обработку пропса type и в зависимости от значения данного пропса 
// компонент  должен быть либо кнопкой, либо Link