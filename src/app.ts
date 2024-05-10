import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Wellcome! Contacts Management Apps");
});

export default app;
