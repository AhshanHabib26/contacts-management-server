import { z } from "zod";

export const contactsValidationSchema = z.object({
  name: z.string(),
  email: z.string().optional(),
  phoneNumber: z.string(),
  address: z.string(),
  profilePicture: z.string(),
});
