import express from "express";
const app = express();
import cors from "cors";
import contactHandler from "./contacts/contacts.router";
import globalErrorHandler from "./middlewares/globalErrorHandler";

// Middleware
app.use(express.json());
app.use(cors());

// APP API
app.use("/api/v1/contact", contactHandler);

app.get("/", (req, res) => {
  res.send("Wellcome! Contacts Management Apps");
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
