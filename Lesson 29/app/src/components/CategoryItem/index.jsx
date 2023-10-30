import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({category}) {
  return (
    <Link  to={`category/${category}`} className={s.item}>{category}</Link>
    
  )
}

// использовать компонент Link и указать ему ссылку, через которую мы передаем 
// название категории