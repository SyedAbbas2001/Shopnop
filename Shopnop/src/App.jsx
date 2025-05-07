import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer';

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
   <>
    <div>
        {isSellerPath ? null : <Navbar />}

        <div className={isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
        {isSellerPath ? null : <Footer />}
    </div>
   </>
  )
}

export default App
