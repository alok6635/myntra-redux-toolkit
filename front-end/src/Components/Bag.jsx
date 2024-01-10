import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import {useSelector} from 'react-redux';

const Bag = () => {
    const bagItmes= useSelector((store)=>store.itemSlice);
    const bagAddId=useSelector((store)=>store.bagSlice);

    const findItems=bagItmes.filter((item)=>bagAddId.includes(item.id))

    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {
                            findItems.map((itemdetails,index)=><BagItem itemdetails={itemdetails} key={index}/>)
                        }
                    </div>
                    <div className="bag-summary">
                        <BagSummary/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Bag;