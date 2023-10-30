import { changeStatusAction, loadCategory } from "../reducer/categoryReducer";


export const fetchCategory = async (dispatch) => {
    dispatch(changeStatusAction('loading'));
    const resp = await fetch('https://fakestoreapi.com/products/categories');
    const result = await resp.text();
    if(result !== ''){
        const data = JSON.parse(result);
        dispatch(loadCategory(data))
    }
    dispatch(changeStatusAction(result !== '' ? 'ready' : 'error'));
}