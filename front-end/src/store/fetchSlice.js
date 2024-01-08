import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        apiDataLoaded: false,
        fetchingStatus: false,
    },
    reducers: {
        changeStatusApiData: (state) => {
             state.apiDataLoaded = true;
        },
        loaderStart: (state) => {
             state.fetchingStatus = true;
        },
        loaderEnd: (state) => {
             state.fetchingStatus = false;
        }
    }
})
export const fetchSliceAction = fetchSlice.actions;
export default fetchSlice;



