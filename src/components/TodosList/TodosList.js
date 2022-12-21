import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function TodosList(props) {
  return (
    <div>
      <main>
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {props.todos.map((todo) => (
              <Grid item key={todo.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {todo.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Deadline: {todo.deadlineDate}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {todo.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      textAlign="right"
                    >
                      Added: {todo.addedDate}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
