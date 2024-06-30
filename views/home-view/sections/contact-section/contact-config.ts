import * as z from "zod";

export type ContactType = {
  name: string;
  email: string;
  message: string;
};

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, "Empty name not allowed"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(1, "Empty message not allowed"),
});
