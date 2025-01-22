
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      localStorage.setItem("username", username);
      history.push("/Settings"); // Navigate to Settings page
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <Box
    
    
    padding="100px"
      display="flex"
      sx={{
        height: "87vh", // Full viewport height
        width: "100%",  // Full viewport width
        overflow: "hidden", // Prevent scrolling
        backgroundColor:"lightyellow",
      }}
    >
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "50%", // Half screen
          height: "60%", // Full height
          bgcolor: "linear-gradient(135deg, #e3f2fd, #bbdefb)", // Gradient background
        }}
      >
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            width: "100%",// Full width inside the half screen
            maxWidth: 500, 
            maxHeight:500,// Restrict width of the login box
            textAlign: "center",
            borderRadius: 3,
            backgroundColor: "white",
             // Advanced shadow
            
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={3}
            color="primary"
            sx={{
              
            }}
          >
            User Login
          </Typography>
          <form onSubmit={handleLogin}>
            <Stack spacing={3}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#2196f3", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5", // Border color when focused
                    },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#2196f3", // Change border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1e88e5", // Border color when focused
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{
                  background: "linear-gradient(90deg, #2196f3, #21cbf3)", // Gradient button
                  
                  transition: "background 0.3s ease-in-out, transform 0.2s ease",
                  "&:hover": {
                    
                    transform: "translateY(-2px)", // Slight lift on hover
                  },
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
      
      <Typography 
            variant="h5"
            
            fontWeight="bold"
            mb={3}
            color="black"
            
            sx={{
              margin:"50px",
              padding:"50px"
              // Text shadow for title
              
            }}
          >
                 Welcome! <br></br>   Enter Your Details And Start Play Quiz 

          </Typography>
          
    </Box>
  );
};

export default Login;
