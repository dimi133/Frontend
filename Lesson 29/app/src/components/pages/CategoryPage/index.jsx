import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../CategoryItem'
import s from './style.module.css'
import Container from '../../../UI/Container'

export default function CategoryPage() {


    const {status, list} = useSelector(({category}) => category)


  return (
    <Container>
    {/* <div className={s.container}> */}

        <h1>Лучший магазин, лучших вещей</h1>
        {
            status === 'ready'
            ? <div className={s.categories}>
                {
                    list.map(category => <CategoryItem key={category} category={category} />)
                }
        </div>
        : status === 'error'
        ? <h2>Ошибка загрузки</h2>
        : status === 'loading'
        ? <h2>Данный загружаются</h2>
        : ''
        }
    

    </Container>
  )
}
