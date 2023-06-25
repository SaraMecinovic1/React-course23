
import './App.css';
import jwtDecode from "jwt-decode";
import { authSlice } from "./store/authSlice";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Login from "./pages/login"
import Signup from './pages/signup';
import Counter from './pages/counter';
import { store } from './store/store';

const NavigationRoutes=()=>{
  const dispatch=useDispatch()
  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token); 
      dispatch(authSlice.actions.setData(decoded));   ///
    }
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
  
}


const App=()=>{
  return (
    <Provider store={store}>
    <NavigationRoutes />
  </Provider>
  );
}

export default App;
