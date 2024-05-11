import { z } from "zod";

export const contactsValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string().optional(),
  phoneNumber: z.string({
    required_error: "Phone Number is required",
  }),
  address: z.string({
    required_error: "Address is required",
  }),
  profilePicture: z.string({
    required_error: "Profile Picture is required",
  }),
  isDeleted: z.boolean().optional(),
  isFavorite: z.boolean().optional(),
});
