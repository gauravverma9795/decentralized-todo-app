import React from "react";
import { Typography } from "@mui/material";

function Analytics({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;

  return (
    <Typography variant="h6" align="center">
      Task Completion: {completionPercentage}%
    </Typography>
  );
}

export default Analytics;