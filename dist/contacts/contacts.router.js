"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_controllers_1 = require("./contacts.controllers");
const router = express_1.default.Router();
router.post("/", contacts_controllers_1.contactController.createContact);
router.get("/", contacts_controllers_1.contactController.getAllContacts);
router.get("/:id", contacts_controllers_1.contactController.getSingleContact);
router.put("/:id", contacts_controllers_1.contactController.updateContact);
router.delete("/:id", contacts_controllers_1.contactController.deleteContact);
exports.default = router;
