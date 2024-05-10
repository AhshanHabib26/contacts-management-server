import { Request, Response } from "express";
import { Contact } from "./contacts.model";
import { contactsValidationSchema } from "./contacts.validation";

const createContact = async (req: Request, res: Response) => {
  const validatedData = contactsValidationSchema.parse(req.body);
  const result = await Contact.create(validatedData);

  res.status(201).json({
    success: true,
    message: "Contact created successfully!",
    data: result,
  });
};



export const contactController = {
  createContact,
};