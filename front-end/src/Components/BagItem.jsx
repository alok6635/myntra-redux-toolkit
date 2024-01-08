
const BagItem=()=>{


    const itemdetails={
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
          stars: 4.5,
          count: 1400,
        },
    }

    return(
        <>
        <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img"  src={itemdetails.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{itemdetails.company}</div>
      <div className="item-name">{itemdetails.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {itemdetails.current_price}</span>
        <span className="original-price">Rs {itemdetails.original_price}</span>
        <span className="discount-percentage">( {itemdetails.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{itemdetails.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{itemdetails.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart">X</div>
  </div>
        </>
    )
}

export default BagItem;