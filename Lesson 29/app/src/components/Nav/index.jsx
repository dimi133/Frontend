import React from 'react'
import s from './style.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {

    const className = ({isActive}) => isActive ? s.active : '';

  return (
   <nav className={s.nav}>
    {/* {
        links.map(({id, title, link}) => 
            <NavLink key={id} to={link}>{title}</NavLink>)
    } */}
    <NavLink className={className} to={'/'}>Главная</NavLink>
    <NavLink className={className} to={'card'}>Корзина</NavLink>
    <NavLink className={className} to={'products'}>Все товары</NavLink>
   </nav>
  )
}
