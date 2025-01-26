import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(256),
});

export const registerSchema = z.object({
  username: z.string().min(1).max(256),
  email: z.string().trim().email(),
  password: z.string().min(6).max(256),
});
