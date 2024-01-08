import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Bag from './Components/Bag.jsx';
import HomeItem from './Components/HomeItem.jsx';
import { Provider } from 'react-redux';
import store from './store/Store.js';
import Home from './Components/Home.jsx';




const router = createBrowserRouter([
        {
                path: '/', element: <App />, children: [
                        { path: '/', element: <Home/> },
                        { path: '/bag', element: <Bag /> }
                ]
        }
])


ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
                <RouterProvider router={router} />
        </Provider>

)
