import {createSlice} from "@reduxjs/toolkit"

export const countSlice = createSlice({
    name:"count",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
            if(state.count < 0){
                state.count = 0
            }
        },
        increasebyvalue:(state, action)=>{
            state.count += action.payload
        }
    }
})



export const {increment} = countSlice.actions
export const {decrement} = countSlice.actions
export const {increasebyvalue} = countSlice.actions
export default countSlice.reducer