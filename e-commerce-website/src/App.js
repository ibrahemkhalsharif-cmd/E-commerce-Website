import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Components/Authentication/login'
import Signup from './Components/Authentication/signup'
function App() {
  const [activeTab, setActiveTab] = useState('login');
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login setActiveTab ={setActiveTab} activeTab={activeTab}/>} />
        <Route path="/signup" element={<Signup  setActiveTab ={setActiveTab} activeTab={activeTab}/>} />
         <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

    </Router>


  );
}

export default App;
