import React from 'react'
import { useParams } from 'react-router-dom';
import Container from '../../../UI/Container';
import { useSelector } from 'react-redux';
import SingleProductItem from '../../SingleProductItem';
// import ProductsItem from '../../ProductsItem';

export default function SingleProductPage() {
  const {id} = useParams();

    const {status, list} = useSelector(state => state.products)
    
    const productId = Number(id); 
    // const productId = +id;
    const product = list.find(product => product.id === productId)
    // const productTitle = result ? result.title : '';

    if (!product) { 
      return <p>Данный продукт не найден.</p> 
    } 

  return (
    <Container>
      <div>
        {/* <p>{product.title}</p> */}
        <SingleProductItem key={productId} {...product}/>
          {/* {
            products.find(product => product.id === id ? product.title : '')
          } */}
      </div>
    </Container>
  )
}
