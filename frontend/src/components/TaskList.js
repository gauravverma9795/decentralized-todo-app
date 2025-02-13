import React from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskList({ tasks, deleteTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task._id}>
          <ListItemText primary={task.title} />
          <IconButton onClick={() => deleteTask(task._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;