import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";

const BagItem = ({ itemdetails }) => {
  
  const dispatch = useDispatch();

  const delBag =(id)=>{
    console.log(id);
    dispatch(bagSliceAction.removeItemsBags(id))
  }

  return (
    <>
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={itemdetails.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{itemdetails.company}</div>
          <div className="item-name">{itemdetails.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {itemdetails.current_price}</span>
            <span className="original-price">Rs {itemdetails.original_price}</span>
            <span className="discount-percentage">({itemdetails.discount_percentage} % OFF)</span>
          </div>
          <div className="return-period">
            <span className="return-period-days">{itemdetails.return_period} days</span> return available
          </div>
          <div className="delivery-details"> Delivery by
            <span className="delivery-details-days">{itemdetails.delivery_date}</span>
          </div>
        </div>
        <div className="remove-from-cart" onClick={()=>delBag(itemdetails.id)}>X</div>
      </div>
    </>
  )
}

export default BagItem;