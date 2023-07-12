import "./App.css";
import All from "./pages/All";
import { store } from "./store/store";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { authSlice } from "./store/authSlice";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddQuote from "./pages/AddQuote";
import Favorites from "./pages/Favorites";
import { ThemeProvider } from "@mui/material";
import { DarkTheme } from "./styles/DarkTheme";
import { LightTheme } from "./styles/LightTheme";
import { themeSlice } from "./store/themeSlice";

const NavigationRoutes = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const selectedTheme = themeState.theme === "light" ? LightTheme : DarkTheme;


  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = jwtDecode(token); // dekoduj mi token
      dispatch(authSlice.actions.setData(decoded));
    }
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
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

    </ThemeProvider>
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
