import { Button, Grid, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";

export default function AddTodoForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDeadlineDate, setEnteredDeadlineDate] = useState("");

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const enteredDeadlineHandler = (event) => {
    setEnteredDeadlineDate(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = new Date();
    let currentMonth = months[currentDate.getMonth()].toString();
    let currentYear = currentDate.getFullYear();
    let currentDay = currentDate.getDate();

    let addedDate = currentDay + " " + currentMonth + " " + currentYear;

    props.onAddTodo(
      Math.round(Math.random() * 10000),
      enteredTitle,
      enteredDescription,
      addedDate,
      enteredDeadlineDate
    );
  };

  return (
    <form onSubmit={addTodoHandler}>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <Grid item xs={3}>
          <TextField
            required
            label="Title"
            variant="outlined"
            onChange={enteredTitleHandler}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            multiline
            label="Description"
            variant="outlined"
            onChange={enteredDescriptionHandler}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel>Deadline</InputLabel>
          <TextField
            type="date"
            variant="outlined"
            onChange={enteredDeadlineHandler}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" type="submit">
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
