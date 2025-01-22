import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { handleScoreChange } from "../redux/actions";
import { useHistory } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box
        mt={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          background: "white", // Gradient background
        }}
      >
        <CircularProgress size={80} sx={{ color: "#1e88e5" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        mt={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          background: "white", // Gradient background
        }}
      >
        <Typography
          variant="h6"
          color="#d32f2f"
          align="center"
          sx={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)" }}
        >
          Something Went Wrong!
        </Typography>
      </Box>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleScoreChange(0)); // Reset score before starting a new quiz
    history.push("/questions");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "70vh",
        background: "white", // Gradient background
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Shadow for depth
          transition: "transform 0.3s ease-in-out",
          
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="primary"
          mb={3}
          sx={{
             // Title shadow
          }}
        >
          Quiz Setup
        </Typography>

        <SelectField
          options={response.trivia_categories}
          label="Category"
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />
        <SelectField
          options={difficultyOptions}
          label="Difficulty"
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />
        <SelectField
          options={typeOptions}
          label="Type"
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />
        <TextFieldComp
          sx={{
            mb: 3,
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #42a5f5, #21cbf3)", // Gradient button
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
             
            transition: "background 0.3s ease-in-out, transform 0.2s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #21cbf3, #42a5f5)", // Reverse gradient
              transform: "translateY(-2px)", // Lift effect
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;

