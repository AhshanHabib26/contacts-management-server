"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsValidationSchema = void 0;
const zod_1 = require("zod");
exports.contactsValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    email: zod_1.z.string().optional(),
    phoneNumber: zod_1.z.string({
        required_error: "Phone Number is required",
    }),
    address: zod_1.z.string({
        required_error: "Address is required",
    }),
    profilePicture: zod_1.z.string({
        required_error: "Profile Picture is required",
    }),
    isDeleted: zod_1.z.boolean().optional(),
    isFavorite: zod_1.z.boolean().optional(),
});
