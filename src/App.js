import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Leaderboard from "./components/Leaderboard";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './App.css'
function App() {
  return (
    <Router>
      <Container maxWidth="large" >
        <Box textAlign="center" mt={5} >
          <Typography variant="h3" fontWeight="bold" color="red" gutterBottom>
            Pro Quiz 
          </Typography>
       
          <Switch>
            <Route path="/" exact >
              <Login />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;

