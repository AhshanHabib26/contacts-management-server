"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const contacts_router_1 = __importDefault(require("./contacts/contacts.router"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// APP API
app.use("/api/v1/contact", contacts_router_1.default);
app.get("/", (req, res) => {
    res.send("Wellcome! Contacts Management Apps");
});
// Global Error Handler
app.use(globalErrorHandler_1.default);
exports.default = app;
