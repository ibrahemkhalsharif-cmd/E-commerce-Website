import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Login from './Components/Authentication/login'
import Signup from './Components/Authentication/signup'
import ForgotPassword from './Components/Authentication/forgotPassword';
import Mainpage from './Components/Mainpage/Mainpage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/Mainpage" element={<Mainpage/>}/>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
