import "./App.css";
import All from "./pages/All";
import { store } from "./store/store";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { authSlice } from "./store/authSlice";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddQuote from "./pages/AddQuote";
import Favorites from "./pages/Favorites";

const NavigationRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token);
      dispatch(authSlice.actions.setData(decoded));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addNew" element={<AddQuote />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationRoutes />
    </Provider>
  );
}

export default App;
