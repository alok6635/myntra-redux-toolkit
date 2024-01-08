import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceAction } from "../store/itemSlics";
import { fetchSliceAction } from "../store/fetchSlice";

const FetchApi = () => {
    const loaderStatus = useSelector((state) => state.fetchSlice)
    const dispatchData = useDispatch()

    useEffect(() => {
       
        if (loaderStatus.apiDataLoaded) return;
        dispatchData(fetchSliceAction.loaderStart())

        fetch('http://localhost:8080/items')
        .then((res)=>res.json())
        .then((res)=>{
           const  {items} = res;
            dispatchData(fetchSliceAction.changeStatusApiData())
            dispatchData(fetchSliceAction.loaderEnd())
            dispatchData(itemSliceAction.initialItem(items[0]))
        })
    }, [loaderStatus])
return (
        <>

        </>
    )
}
export default FetchApi;