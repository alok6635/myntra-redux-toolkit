import {createSlice} from '@reduxjs/toolkit';

const bagSlice=createSlice({
    name:'bag',
    initialState:[],
    reducers:{
          addItemsBags:(state,action)=>{
                      state.push(action.payload);
          },
          removeItemsBags:(state,action)=>{
               return state.filter((item)=>item !== action.payload)
          }
    }
})

export const bagSliceAction= bagSlice.actions; 
export default bagSlice;
