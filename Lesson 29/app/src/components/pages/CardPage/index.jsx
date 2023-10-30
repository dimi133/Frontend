import React from 'react'
// import { useSelector } from 'react-redux'
import CardItem from '../../CardItem'
import { useCard } from '../../../hooks/useCard'
// import { useDispatch } from 'react-redux'
// import { clearAction } from '../../../store/reducer/cardReduser';
import ByCondition from '../../../UI/ByCondition';
import EmptyCard from '../../EmptyCard';
import Container from '../../../UI/Container';
import CardCalculation from '../../CardCalculation';

export default function CardPage() {

    // const dispatch = useDispatch();

    // const card = useSelector(state => state.card)
    
    const card = useCard()

  return (
    <Container>
        <div>
            {/* {JSON.stringify(card)} */}
            {
            card.map((item) => (<CardItem key={item.id} {...item} />))
            }
        </div>
        {/* <ByCondition 
            condition={card.length !== 0}
            children ={<button onClick={()=>dispatch(clearAction())}>Очистить корзину</button>}
            /> */}
        <ByCondition condition={card.length !== 0} >
            {/* {<button onClick={()=>dispatch(clearAction())}>Очистить корзину</button>} */}
            <CardCalculation />
        </ByCondition>
        <ByCondition condition={card.length===0} >
            <EmptyCard />
        </ByCondition>

        {/* {
            card.length == 0
            ? ''
            :  <button onClick={()=>dispatch(clearAction())}>Очистить корзину</button>
        } */}

        
    </Container>
  )
}


// Кнопка очистки корзины должна быть только когда продукты в корзине есть
// Отображать сообщение если нет товаров