import express from "express";
import { contactController } from "./contacts.controllers";
const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts)


export default router;