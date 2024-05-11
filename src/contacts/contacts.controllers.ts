import { Request, Response } from "express";
import { Contact } from "./contacts.model";
import { contactsValidationSchema } from "./contacts.validation";
import catchAsync from "../utils/catchAsync";

const createContact = catchAsync(async (req: Request, res: Response) => {
  const validatedData = contactsValidationSchema.parse(req.body);
  const result = await Contact.create(validatedData);

  res.status(201).json({
    success: true,
    message: "Contact created successfully!",
    data: result,
  });
});

const getAllContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await Contact.find({ isDeleted: { $ne: true } }).sort({
    createdAt: -1,
  });
  res.status(201).json({
    success: true,
    message: "All Contacts retrive successfully!",
    data: result,
  });
});

const getSingleContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Contact.findOne({ _id: id, isDeleted: { $ne: true } });

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
});

const updateContact = async (req: Request, res: Response) => {
  const validatedData = contactsValidationSchema.parse(req.body);
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, validatedData, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Contact updated successfully!",
    data: result,
  });
};

const favoriteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(
    { _id: id },
    { isFavorite: true },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Contact favorite successfully!",
    data: null,
  });
};

const deleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );

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
};

export const contactController = {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
  favoriteContact,
};
