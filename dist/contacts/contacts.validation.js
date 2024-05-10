"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsValidationSchema = void 0;
const zod_1 = require("zod");
exports.contactsValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().optional(),
    phoneNumber: zod_1.z.string(),
    address: zod_1.z.string(),
    profilePicture: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
