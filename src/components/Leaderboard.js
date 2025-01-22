import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from localStorage or initialize with an empty array
    const fetchLeaderboardData = () => {
      const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
      const sortedData = data.sort((a, b) => b.score - a.score); // Sort in descending order of score
      setLeaderboardData(sortedData);
    };
    fetchLeaderboardData();
  }, []);

  const handleClearLeaderboard = () => {
    // Clear leaderboard data from localStorage and state
    localStorage.removeItem("leaderboard");
    setLeaderboardData([]);
  };

  return (
    <div className="leaderboard-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Leaderboard</h1>
      {leaderboardData.length === 0 ? (
        <p>No leaderboard data available</p>
      ) : (
        <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "10px", border: "1px solid black" }}>Rank</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Name</th>
              <th style={{ padding: "10px", border: "1px solid black" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid black" }}>#{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.name}</td>
                <td style={{ padding: "10px", border: "1px solid black" }}>{entry.score} points</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClearLeaderboard} style={{ marginRight: "10px" }}>
          Clear Leaderboard
        </button>
        <Link to="/Settings">
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Leaderboard;
