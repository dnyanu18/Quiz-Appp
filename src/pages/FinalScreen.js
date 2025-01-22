/*import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleAddToLeaderboard = () => {
    const name = prompt("Enter your name for the leaderboard:");
    if (name) {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push({ name, score });
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      alert("Your score has been added to the leaderboard!");
    }
    dispatch(handleScoreChange(0)); // Reset score after adding to leaderboard
    history.push("/leaderboard");
  };

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0)); // Reset score when returning to settings
    dispatch(handleAmountChange(50));
    history.push("/settings");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score: {score}
      </Typography>
      <Box display="flex" gap={2}>
        <Button onClick={handleBackToSettings} variant="outlined">
          Back to Home
        </Button>
        <Button onClick={handleAddToLeaderboard} variant="contained" color="primary">
          Add to Leaderboard
        </Button>
      </Box>
    </Box>
  );
};

export default FinalScreen;

*/
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleAddToLeaderboard = () => {
    const name = prompt("Enter your name for the leaderboard:");
    if (name) {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push({ name, score });
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
      alert("Your score has been added to the leaderboard!");
    }
    dispatch(handleScoreChange(0)); // Reset score after adding to leaderboard
    history.push("/leaderboard");
  };

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0)); // Reset score when returning to settings
    dispatch(handleAmountChange(50));
    history.push("/settings");
  };

  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: "90%",
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          sx={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}
          gutterBottom
        >
          Final Score: {score}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginBottom: 3,
            color: "#757575",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          Well done! Choose your next action.
        </Typography>

        <Box
          display="flex"
          gap={2}
          justifyContent="center"
          sx={{
            "& > button": {
              padding: "10px 20px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "1rem",
              borderRadius: 2,
              
            },
          }}
        >
          <Button
            onClick={handleBackToSettings}
            variant="outlined"
            sx={{
              borderColor: "#1976d2",
              color: "#1976d2",
              
            }}
          >
            Back to Home
          </Button>
          <Button
            onClick={handleAddToLeaderboard}
            variant="outlined"
            sx={{
              background: "linear-gradient(90deg, #42a5f5, #2196f3)",
              color: "#ffffff",
              boxShadow: "0px 4px 10px rgba(33, 150, 243, 0.4)",
            
            }}
          >
            Add to Leaderboard
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FinalScreen;
