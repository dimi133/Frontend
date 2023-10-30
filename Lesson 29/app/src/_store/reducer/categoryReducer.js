const initialState = {
    status: 'empty',
    list: []
};

const LOAD = '[CATEGORY] LOAD'
const CHANGE_STATUS= '[CATEGORY] CHANGE_STATUS'

export const loadCategory = (payload) => ({type: LOAD, payload});
export const changeStatusAction = (payload) => ({type: CHANGE_STATUS, payload});

export const categoryReducer = (state = initialState, action) => {
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