import { changeStatusAction, loadAction } from "../reducer/productsReducer";

// export const fetchProducts = async (dispatch) => {
//     const resp = await fetch('https://dummyjson.com/products');
//     const data = await resp.json();
//     dispatch(loadAction(data.products));
// }

// export const fetchProducts = async (dispatch) => {
//     const resp = await fetch('https://fakestoreapi.com/products');
//     const data = await resp.json();
//     dispatch(loadAction(data));
// }

export const fetchProducts = async (dispatch) => {
dispatch(changeStatusAction('loading'));
const resp = await fetch('https://fakestoreapi.com/products');
const result = await resp.text();
if(result !== ''){
    const data = JSON.parse(result);
    dispatch(loadAction(data))
}
dispatch(changeStatusAction(result !== '' ? 'ready' : 'error'));
}