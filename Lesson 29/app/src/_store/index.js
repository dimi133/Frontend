import { categoryReducer } from "./reducer/categoryReducer";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { productsReducer } from "./reducer/productsReducer";
import { cardReducer } from "./reducer/cardReduser";



const rootReducer = combineReducers({
    category: categoryReducer,
    products: productsReducer,
    card: cardReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));