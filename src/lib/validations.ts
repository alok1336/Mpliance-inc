import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const RegisterSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([
    "DEALER",
    "DOCTOR",
    "HOSPITAL",
    "GUEST",
  ]),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export const RepairRequestSchema = z.object({
  equipmentName: z.string(),
  hospitalName: z.string(),
  description: z.string().min(10),
});

export const AMCRequestSchema = z.object({
  hospitalName: z.string(),
  description: z.string().min(10),
});

export const AERBRequestSchema = z.object({
  hospitalName: z.string(),
  description: z.string().min(10),
});

export const SparePartRequestSchema = z.object({
  equipmentName: z.string(),
  description: z.string().min(10),
});

export type LoginInput =
  z.infer<typeof LoginSchema>;

export type RegisterInput =
  z.infer<typeof RegisterSchema>;