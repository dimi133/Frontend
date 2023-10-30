import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Container from '../../../UI/Container';
import ProductsItem from '../../ProductsItem';
import s from './style.module.css'

export default function CategoryProductPage() {
    const {category} = useParams();

    const {status, list} = useSelector(state => state.products)
    // const products = useSelector(({products}) => products.list);
    
    const result = list.filter(product => product.category === category)
  return (
    <Container>
        <h2>{category}</h2>
    <div className={s.list}>
        {/* {
            result.map(product => <p key={product.id} > {product.title} </p>)
        } */}
        {
            result.map(item => <ProductsItem key={item.id} {...item} /> )
        }
    </div>
    </Container>
  )
}


// получив название категории отобразите только те продукты, которые относятся к этой
// категории