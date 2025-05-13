import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer';
import { useAppContext } from './Context/AppContext';
import Login from './Components/Login';
import AllProducts from './Pages/AllProducts';
import ProductCategories from './Pages/ProductCategories';
import ProductDetails from './Pages/ProductDetails';
import { Toaster } from 'react-hot-toast';
import Cart from './Pages/Cart';
import AddAddress from './Pages/AddAddress';
import MyOrders from './Pages/MyOrders';

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useAppContext();
  return (
   <>
    <div>
        {isSellerPath ? null : <Navbar />}
        {showUserLogin ? <Login/> : null}

        <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/products/:category' element={<ProductCategories />} />
                <Route path='/products/:category/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/add-address' element={<AddAddress />} />
                <Route path='/my-orders' element={<MyOrders />} />
            </Routes>
        </div>
        {isSellerPath ? null : <Footer />}
    </div>
    <Toaster position="top-center" />
   </>
  )
}

export default App
