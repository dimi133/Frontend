import { createSlice } from "@reduxjs/toolkit";

const read = () => JSON.parse(localStorage.getItem('card'));
const write = (state) => localStorage.setItem('card', JSON.stringify(state.list))

const initialState =  {list: read() ??[]}



const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        add(state, {payload}){
            const target = state.list.find(({id}) => payload === id);
            if(target){
                target.count++;
            }else{
                state.list.push({id: payload, count: 1})
        }
        write(state);
        },
        incr(state, {payload}){
            state.list.find(({ id }) => id === payload).count++; 
            write(state); 
        },
        decr(state, {payload}){
        if (--state.list.find(({id}) => id === payload).count=== 0) {
            state.list = state.list.filter(({id}) => id !== payload)
        } 
        write(state);
        },
        clear(state){
            state.list = [];
            write(state);
        }
    }
})

export const { add, incr, decr, clear } = cardSlice.actions
export default cardSlice.reducer;