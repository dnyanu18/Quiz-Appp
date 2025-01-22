import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { handleScoreChange } from "../redux/actions";

const getRandomInt = (max) => Math.floor(Math.random() * max);

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) apiUrl += `&category=${question_category}`;
  if (question_difficulty) apiUrl += `&difficulty=${question_difficulty}`;
  if (question_type) apiUrl += `&type=${question_type}`;

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      const answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length + 1),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box
        mt={20}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "30vh", background: "#f5f7fa" }}
      >
        <CircularProgress size={60} sx={{ color: "#2196f3" }} />
      </Box>
    );
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box 
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "90%",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          align="center"
          gutterBottom
          sx={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Question {questionIndex + 1}
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 2,
            background: "rgba(33, 243, 121, 0.1)",
            fontStyle: "",
          }}
        >
          {decode(response.results[questionIndex].question)}
        </Typography>

        <Box>
  {options.map((data, id) => (
    <Button
      key={id}
      onClick={handleClickAnswer}
      variant="contained"
      fullWidth
      sx={{
        background: "#000000", // Uniform black background for all options
        color: "#ffffff", // White text for contrast
        fontWeight: "bold",
        fontSize: "1rem",
        textTransform: "capitalize",
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow
        marginBottom: 2,
        "&:hover": {
          background: "blue", // Slightly lighter black on hover
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.5)", // Enhanced shadow
          transform: "scale(1.02)", // Lift effect on hover
        },
        "&:focus": {
          background: "#666666", // Change color on focus for accessibility
        },
      }}
    >
      {decode(data)}
    </Button>
  ))}
</Box>


        <Typography
          mt={3}
          align="center"
          fontWeight="bold"
          sx={{ color: "#1976d2" }}
        >
          Score: {score} / {response.results.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default Questions;

