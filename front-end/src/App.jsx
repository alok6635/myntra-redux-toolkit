import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FetchApi from "./Components/FetchApi";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";

const App = () => {
  const data = useSelector((state) => state.fetchSlice)
  return (
    <>
      <Header />
      <FetchApi />
      {data.fetchingStatus ? <Loader/> : <Outlet/>}
      <Footer />
    </>
  )

}
export default App;