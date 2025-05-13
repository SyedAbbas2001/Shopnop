import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
     const [cartItems, setCartItems] = useState([]);
    const Currency = import.meta.env.VITE_CURRENCY;

// Add to Cart - optimized
const addToCart = (itemId) => {
    setCartItems(prev => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1
    }));
    toast.success("Added to Cart");
    console.log(itemId)
}

// Update Cart Item Quantity - fixed
const UpdateCartItem = (productId, newQuantity) => {
  setCartItems(prev => ({
    ...prev,
    [productId]: newQuantity // ✅ Directly sets the selected value
  }));
  toast.success("Cart Updated");
};

// Remove from Cart - optimized
const removeFromCart = (itemId) => {
    setCartItems(prev => {
        const currentQty = prev[itemId] || 0;
        if (currentQty <= 1) {
            const newState = {...prev};
            delete newState[itemId];
            return newState;
        }
        return {
            ...prev,
            [itemId]: currentQty - 1
        };
    });
    toast.success("Removed from Cart");
}
const getCartCount = () => {
  let totalCount = 0;
  for (const item in cartItems) {
    totalCount += cartItems[item];
  }
  return totalCount;
};

// Get Cart Total Amount
const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItems) {
    let itemInfo = products.find((product) => product._id === items);
    if (cartItems[items] > 0) {
      totalAmount += itemInfo.offerPrice * cartItems[items];
    }
  }
  return Math.floor(totalAmount * 100) / 100;
};



    const fetchProducts = async () => {
      setProducts(dummyProducts);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
    
    const value = { navigate, user, setUser, setIsSeller,getCartAmount,getCartCount, isSeller,removeFromCart,setCartItems,addToCart, UpdateCartItem, products,Currency,showUserLogin,setShowUserLogin,searchTerm,setSearchTerm,cartItems,};
    
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext);
}
