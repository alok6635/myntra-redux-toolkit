import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlics";
import fetchSlice from "./fetchSlice";
import bagSlice from "./BagSlice";

const store = configureStore({
            reducer:{
                itemSlice:itemSlice.reducer,
                fetchSlice:fetchSlice.reducer,
                bagSlice:bagSlice.reducer,
            }
}
)
export default store;
