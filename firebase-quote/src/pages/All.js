import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { authSlice } from "../store/authSlice";
import { quoteSlice } from "../store/quoteSlice";
import { Typography } from "@mui/material"
import { Button, Box,Switch,useTheme, } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import { LightMode, DarkMode } from "@mui/icons-material";
// import { themeSlice } from "../store/themeSlice"; 
import { Grid } from "@mui/material";
import Layout from "../layout/Layout";
import { getQuotes } from "../firebase";



const All = () => {
  const [quote, setQuote] = useState([]);
  const dispatch = useDispatch(); // poziva funk
  const navigate = useNavigate();
  console.log(quote);

  const goTo = () => {
    navigate("/quote/" + quote.id); //gde da me povede i id tog citata
    console.log("radi");
  };

  useEffect(() => {
   getQuotes()
      .then((data) => {
        console.log(data);
        setQuote(data); //dajemo state-u vrednost objekta tj tih citata
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<Layout>
  <Grid container spacing={2} >
  
        {quote.map((qunpmote, index) => {
          return (
            <Card sx={{ minWidth: 275 ,marginBottom:5,marginTop:2, marginLeft:5 }}>
            <CardContent>
              <Typography  variant="h6" component="h6" color="text.secondary" gutterBottom>
               Quote: {quote.Quote}
              </Typography>
              <Typography variant="h7" component="div">
              Author: {quote.Author}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={() => {
                  goTo();
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

  </Grid>
</Layout>
   
  );
};
export default All;
