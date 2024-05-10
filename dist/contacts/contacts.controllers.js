"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const contacts_model_1 = require("./contacts.model");
const contacts_validation_1 = require("./contacts.validation");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const createContact = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = contacts_validation_1.contactsValidationSchema.parse(req.body);
    const result = yield contacts_model_1.Contact.create(validatedData);
    res.status(201).json({
        success: true,
        message: "Contact created successfully!",
        data: result,
    });
}));
const getAllContacts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contacts_model_1.Contact.find({ isDeleted: { $ne: true } }).sort({
        createdAt: -1,
    });
    res.status(201).json({
        success: true,
        message: "All Contacts retrive successfully!",
        data: result,
    });
}));
const getSingleContact = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield contacts_model_1.Contact.findOne({ _id: id, isDeleted: { $ne: true } });
    if (!result) {
        return res.status(404).json({
            success: false,
            message: "Contact not found!",
        });
    }
    res.status(200).json({
        success: true,
        message: "Single Contact retrived successfully!",
        data: result,
    });
}));
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validatedData = contacts_validation_1.contactsValidationSchema.parse(req.body);
    const { id } = req.params;
    const result = yield contacts_model_1.Contact.findByIdAndUpdate(id, validatedData, {
        runValidators: true,
        new: true,
    });
    res.status(200).json({
        success: true,
        message: "Contact updated successfully!",
        data: result,
    });
});
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield contacts_model_1.Contact.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true });
    if (!result) {
        return res.status(404).json({
            success: false,
            message: "Contact not found!",
        });
    }
    res.status(200).json({
        success: true,
        message: "Contact deleted successfully!",
        data: null,
    });
});
exports.contactController = {
    createContact,
    getAllContacts,
    getSingleContact,
    updateContact,
    deleteContact,
};
