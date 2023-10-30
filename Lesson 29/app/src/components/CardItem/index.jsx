import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
// import { decrAction, incrAction } from '../../_store/reducer/cardReduser';
import { decr, incr } from '../../store/slice/cardSlice';

export default function CardItem({id, image, title, price, count}) {
    const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{title}</p>
            <p>{price} X {count} = {price * count}</p>
            <div className={s.btn}>
                {/* <button onClick={() => dispatch(incrAction(id))}>+</button>
                <button onClick={() => dispatch(decrAction(id))}>-</button> */}
                <button onClick={() => dispatch(incr(id))}>+</button>
                <button onClick={() => dispatch(decr(id))}>-</button>
            </div>
    </div>
  )
}


// Реализовать товар в корзине как на макете без кнопок +/-