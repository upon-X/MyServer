import app from "./app.js";

const port = process.env.PORT || 6060;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
