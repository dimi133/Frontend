const initialState = {
    status: 'empty',
    list: []
};


const LOAD = '[PRODUCTS] LOAD';
const CHANGE_STATUS= '[PRODUCTS] CHANGE_STATUS'

export const loadAction = (payload) => ({type: LOAD, payload});
export const changeStatusAction = (payload) => ({type: CHANGE_STATUS, payload});

export const productsReducer = (state = initialState, action) => {
    if(action.type === LOAD){
        return {
            status: 'ready',
            list: action.payload
        };
    }else if (action.type === CHANGE_STATUS){
        return{
            status: action.payload,
            list: state.list
        }
    }
    return state
}