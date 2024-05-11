"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    profilePicture: {
        type: String,
        required: [true, "Profile Picture is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.Contact = (0, mongoose_1.model)("Contacts", contactsSchema);
