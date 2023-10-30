import React from 'react'
import { useDispatch } from 'react-redux';
// import { addAction } from '../../_store/reducer/cardReduser';
import s from './style.module.css'
import AddToCardButton from '../../UI/AddToCardButton';
import { add } from '../../store/slice/cardSlice';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function SingleProductItem({id, title, price, rating, category, image, description}) {
    const dispatch = useDispatch();

// const addProduct = () => dispatch(addAction(id))
// const children = id
// const addProduct = () => dispatch(addAction(children))

// const {rate, count = rating};
const rate = rating.rate;
const rateCount = rating.count


  return (
        <div className={s.item}>
        <img src={image} alt={title} />
        <div className={s.discription}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Rating: {rate} ({rateCount})
            {/* {[...new Array(5)].map((_, index) => <AiFillStar key={index} />)} */}
            {[...new Array(Math.round(rate))].map((_, index) => <AiFillStar key={index} />)}
            {[...new Array(5 - Math.round(rate))].map((_, index) => <AiOutlineStar  key={index} />)}
            
            </p>
            <div className={s.price}>
                <p>Цена: {price}</p>
                
                {/* <button className={s.btn} onClick={addProduct}>Добавить в корзину</button> */}
                <AddToCardButton onClick={() => dispatch(add(+id))} >Добавить в корзину</ AddToCardButton>
                <button className={s.btn} id="goBackButton">Назад</button>
            </div>
        </div>
    </div>
  )
}
