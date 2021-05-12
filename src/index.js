const express = require("express");
const app = express();

//Express JSON parser
app.use(express.json());

const server = app.listen(8000, () => {
  console.log(`Listening on http://localhost:${server.address().port}`);
});
