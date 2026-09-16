import { z } from "zod"


export const createUserValidation = z.object({
    body: z.object({
        userName: z.string(),
        email: z.string().email("invalid email"),
        password: z.string().min(8, "password must be 8 characters")
    }),
})


export const loginUserValidation = z.object({
    body: z.object({
        email: z.string().email("invalid email"),
        password: z.string().min(8, "password must be 8 characters")
    }),
})