
import React from "react";
import "../App.css";
import { Button, Box,Switch,useTheme, Typography, } from "@mui/material"
import { LightMode, DarkMode } from "@mui/icons-material";
import { themeSlice } from "../store/themeSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSlice } from "../store/authSlice";


const   Layout = (props) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const themeState = useSelector((state) => state.theme);
    const authState = useSelector((state) => state.auth); // uzimamo state iz authSlice
    const quoteState = useSelector((state) => state.quote);
    const navigate = useNavigate();

  return (
    <Box style={{ backgroundColor: theme.palette.background }}className="all-quotes">


                          {/* NAVIGACIJA */}
 <Box py={2}
        px={5}
        bgcolor={theme.palette.secondary.main}
        display="flex"
        justifyContent={"space-between"} >
     
         {authState.id ? ( //ako je ulogovan
           <Button  variant="outlined" sx={{marginTop:2}}  onClick={() => {
                dispatch(authSlice.actions.logout()); // pozovomo action(funk) "logout "
               }}>Logout</Button>
         ) : (
           // ako nije ulogovan
           <Button variant="outlined"    onClick={() => {
              navigate("/login");
              }}>Login</Button>
         )}

    <Box className="header">
        <Typography variant="h5" component="h5">
      Favorite quotes: {quoteState.favorites.length }
     </Typography>
     <Button variant="contained" size="small"  onClick={() => {
          navigate("/favorite");
          console.log("favorites");
        }}> Go to favorites</Button>
    </Box>


    <Box display="flex" alignItems="center"  marginTop={1} marginBottom={1}>
      <LightMode color="primary" />
      <Switch
        onChange={() => {
          dispatch(themeSlice.actions.toggleTheme());
        }}
        checked={themeState.theme === "dark"}
      />
      <DarkMode color="primary" />
    </Box>

 </Box>
                            {/* ITEM */}

 <Box p={5}  bgcolor={theme.palette.background}>
        {props.children}  
        
      </Box>

    </Box>

  );
};
export default Layout;
