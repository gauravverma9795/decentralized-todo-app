import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Analytics from "./components/Analytics";
import { Container, Typography } from "@mui/material";

function App() {
  const [tasks, setTasks] = useState([]);
  // const ans=0;
    useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/tasks");
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post("http://localhost:5000/api/tasks", task);
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));

  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Decentralized To-Do App
      </Typography>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <Analytics tasks={tasks} />
    </Container>
  );
}

export default App;