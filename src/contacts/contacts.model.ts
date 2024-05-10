import { Schema, model } from "mongoose";
import { TContacts } from "./contacts.interface";

const contactsSchema = new Schema<TContacts>(
  {
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
  },
  { timestamps: true }
);

export const Contact = model<TContacts>("Contacts", contactsSchema);
