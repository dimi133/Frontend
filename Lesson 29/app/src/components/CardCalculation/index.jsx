import React from 'react'
import { useDispatch } from 'react-redux'
// import { clearAction } from '../../_store/reducer/cardReduser'
import { useCard } from '../../hooks/useCard';
import s from './style.module.css'
import AddToCardButton from '../../UI/AddToCardButton';
import { clear } from '../../store/slice/cardSlice';

export default function CardCalculation() {

    const dispatch = useDispatch()
    const card = useCard();
    const totalSum = card.reduce((acc, {count, price}) => acc + count * price, 0)
  return (
    <div className={s.item}>
        {/* <AddToCardButton onClick={}></AddToCardButton> */}
        {/* <button onClick={()=>dispatch(clearAction())}>Очистить корзину</button> */}
        <button onClick={()=>dispatch(clear())}>Очистить корзину</button>
        <p>Общая сумма: {totalSum}</p>
    </div>
  )
}


// Вынести кнопку очистки корзины в CardCalculation и добавить расчет общей суммы корзины