import express from "express";
import { contactController } from "./contacts.controllers";
const router = express.Router();

router.post("/", contactController.createContact);


export default router;