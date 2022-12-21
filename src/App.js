import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddTodoForm from "./components/AddTodo/AddTodoForm";
import TodosList from "./components/TodosList/TodosList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DUMMY_TODOS = [
  {
    id: 1,
    title: "Learn ReactJS",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
  {
    id: 2,
    title: "Learn NextJS",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
  {
    id: 3,
    title: "Learn NodeJS",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
  {
    id: 4,
    title: "Learn ExpressJS",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
  {
    id: 5,
    title: "Learn MongoDB",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
  {
    id: 6,
    title: "Learn Figma",
    description: "qpsifjdoqmdjfopiqdjfopiqjhfopqhjfoqhjfoqphfopqhfoqhf",
    addedDate: "20 September 2022",
    deadlineDate: "25 December 2022",
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const newTodoHandler = (
    todoId,
    todoTitle,
    todoDescription,
    todoAddedDate,
    todoDeadlineDate
  ) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: todoId,
          title: todoTitle,
          description: todoDescription,
          addedDate: todoAddedDate,
          deadlineDate: todoDeadlineDate,
        },
      ];
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant="h2" gutterBottom align="center" mt={5}>
        Todo App
      </Typography>
      <AddTodoForm onAddTodo={newTodoHandler} />
      <TodosList todos={todos} />
    </ThemeProvider>
  );
}

export default App;
