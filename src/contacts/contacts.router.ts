import express from "express";
import { contactController } from "./contacts.controllers";
const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts)
router.get("/:id", contactController.getSingleContact)
router.put("/:id", contactController.updateContact)


export default router;