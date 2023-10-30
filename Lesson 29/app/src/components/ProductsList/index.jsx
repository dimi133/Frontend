import React from 'react'
import { useSelector } from 'react-redux'
import ProductsItem from '../ProductsItem';
import s from './style.module.css'
import Container from '../../UI/Container';

export default function ProductsList() {

    const {status, list} = useSelector(({products}) => products);
    
  return (
    <Container>
        {
            status === 'ready'
            ? <div className={s.list}>
            {
                list.map(item => <ProductsItem key={item.id} {...item} /> )
            }
        </div>
        : status === 'error'
        ? <h2>Ошибка загрузки</h2>
        : status === 'loading'
        ? <h2>Данный загружаются</h2>
        : ''
        }
        {/* <div className={s.list}>
            {
                list.map(item => <ProductsItem key={item.id} {...item} /> )
            }
        </div> */}
    </Container>
  )
}
