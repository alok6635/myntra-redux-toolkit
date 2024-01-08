import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = () => {

    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                    <BagItem/>
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