const initialState = [];


const ADD = '[CARD] ADD';
const INCR = '[CARD] INCR';
const DECR = '[CARD] DECR';
const CLEAR = '[CARD] CLEAR';

export const addAction = (payload) => ({type: ADD, payload});
export const incrAction = (payload) => ({type: INCR, payload});
export const decrAction = (payload) => ({type: DECR, payload});
export const clearAction = () => ({type: CLEAR});

export const cardReducer = (state = initialState, action) => {
    if(action.type === ADD){
        const target = state.find(({id}) => action.payload === id);
        if(target){
            target.count++;
            return [...state];
        }else{
            return [...state, {id: action.payload, count: 1}]
        }
        
    }else if (action.type === INCR) { 
        const target = state.find(({ id }) => action.payload === id); 
        target.count++; 
        return [...state]; 

    } else if (action.type === DECR) { 
        const target = state.find(({ id }) => action.payload === id); 
        if (target.count === 1) { 
            return state.filter(item => item !== target); 
            // return state.filter(({id}) => id !== action.payload)
        } else { 
            target.count--; 
            return [...state]; 
        } 
    }else if(action.type === CLEAR) {
        return [];
    }
    return state
}


// настроить корзину следующим обрзом. 
// при добавлении продукта в стейт корзины добавляется id продукта 
//  весь стейт просто выводится в CardPage


// добавлять в корзину не числа а объекты 
// {id, count }
// если добавляемый продукт уже есть в корзине, то увеличить у соответствующего
// объекта count 
// в ином случае добавить объект со свойстом id и count: 1


// при уменьшении кол-ва товара если кол-во равно 1, то удалить данный товар 
// из корзины