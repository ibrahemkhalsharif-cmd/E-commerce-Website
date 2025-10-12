import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Login from './Components/Authentication/login'
import Signup from './Components/Authentication/signup'
import ForgotPassword from './Components/Authentication/forgotPassword';
import Mainpage from './Components/Mainpage/Mainpage'
import Cart from './Components/cartpage/cart'
import {useState} from 'react'
function App() {
   const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItems = prevItems.find(item => item.id === product.id);
            if (existingItems) {
                return prevItems.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else { 
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
     const totalCartCount = cartItems.reduce((total, item) => total + item.quantity , 0)
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/Mainpage" element={<Mainpage cartItems={cartItems} handleAddToCart={handleAddToCart} totalCartCount={totalCartCount}/>}/>
         <Route path="/cart" element={<Cart cartItems={cartItems} totalCartCount={totalCartCount}/>}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
