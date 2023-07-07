import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../store/authSlice";
import { quoteSlice } from "../store/quoteSlice";
import { Typography } from "@mui/material"
import { Button, Box,Switch,useTheme, } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { LightMode, DarkMode } from "@mui/icons-material";
import { themeSlice } from "../store/themeSlice"; 




const All = () => {
  const [quote, setQuote] = useState([]);
    const authState = useSelector((state) => state.auth); // uzimamo state iz authSlice
  const quoteState = useSelector((state) => state.quote);
  const themeState = useSelector((state) => state.theme);

  const dispatch = useDispatch(); // poziva funk
  const navigate = useNavigate();
  console.log(quote);

  const goTo = (props) => {
    navigate(`/details/${props}`); //gde da me povede i id tog citata
    console.log("radi");
  };

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data); //dajemo state-u vrednost objekta tj tih citata
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(quote , "state");

  return (
    <div className="all-quotes">

      <div className="header">
          <Typography variant="h5" component="h5">
        Favorite quotes: {quoteState.favorites.length }
       </Typography>


       <Button variant="contained" size="small"  onClick={() => {
            navigate("/favorite");
            console.log("favorites");
          }}> Go to favorites</Button>
        
      </div>

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


      {quote.map((quote, index) => {
        return (
          <Card sx={{ minWidth: 275 ,marginBottom:5,marginTop:2 }}>
          <CardContent>
            <Typography  variant="h6" component="h6" color="text.secondary" gutterBottom>
             Quote: {quote.quoteText}
            </Typography>
            <Typography variant="h7" component="div">
            Author: {quote.quoteAuthor}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"  onClick={() => {
                goTo(quote._id);
                console.log(quote._id, "-----");
          }}>Details</Button>
            <Button size="small"  onClick={() => {
                navigate("/edit");
           }}>Edit</Button>
            <Button size="small"  onClick={() => {
                 dispatch(quoteSlice.actions.setFavorite(quote)); //ovo sto je u zagradu funkcije je payload(podatak)
                 console.log("add to favorites");
            }}>Add to favorites</Button>
          </CardActions>
        </Card>

          
        );
      })}
    </div>
  );
};
export default All;
