import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const Currency = import.meta.env.VITE_CURRENCY;

    const fetchProducts = async () => {
      setProducts(dummyProducts);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
    
    const value = { navigate, user, setUser, setIsSeller, isSeller ,products,Currency,showUserLogin,setShowUserLogin,searchTerm,setSearchTerm};
    
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext);
}
