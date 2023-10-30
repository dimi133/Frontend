import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
// import { addAction } from '../../_store/reducer/cardReduser';
// import { Link } from 'react-router-dom';
import AddToCardButton from '../../UI/AddToCardButton';
import { add } from '../../store/slice/cardSlice';

export default function ProductsItem({id, title, price, category, image, description}) {

const dispatch = useDispatch();

// const addProduct = () => dispatch(addAction(id))
  return (
    <div className={s.item}>
        <img src={image} alt="title" />
        {/* <p>{title}</p> */}
        <p>{description}</p>
        {/* <p>{price}</p> */}
        <div className={s.btn}>
            <AddToCardButton type={'Link'} to={`/product/${id}`}>Подробнее</AddToCardButton>
        {/* <Link  to={`/:product/${id}`} className={s.btn}>
            <button>Подробнее</button>
        </Link> */}
        {/* <button onClick={addProduct}>Добавить в корзину</button> */}
        <AddToCardButton onClick={() => dispatch(add(+id))} >Добавить в корзину</ AddToCardButton>
        </div>
        
    </div>
  )
}
