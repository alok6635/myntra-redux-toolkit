import { useDispatch,useSelector } from "react-redux";
import { bagSliceAction } from "../store/BagSlice";


const HomeItem = ({item}) => {
    const dispatch = useDispatch()
    

    const bagItems = useSelector(store => store.bagSlice);

    const handleAddBag=()=>{
        dispatch(bagSliceAction.addItemsBags(item.id))
     }

    const handleDel = () => {
        console.log(item.id);
        dispatch(bagSliceAction.removeItemsBags(item.id))
    }

    const elementFound = bagItems.indexOf(item.id) >= 0;


    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">{item.rating.stars} ⭐ | {item.rating.count} </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {elementFound ? <button className="btn-remove-bag" onClick={()=>handleDel(item.id)}>Remove to Bag</button> :
                <button className="btn-add-bag" onClick={handleAddBag}>Add to Bag</button>
                }
            </div>
        </>
    )
}

export default HomeItem;