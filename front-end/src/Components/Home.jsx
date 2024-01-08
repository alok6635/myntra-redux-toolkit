import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";

const Home = () => {
    const item = useSelector((state) => state.itemSlice);

    return (
        <>
            <main>
                <div className="items-container">
                    {
                        item.map((item) => {
                            return <HomeItem item={item} key={item.id}/>
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Home