import { object, string, TypeOf } from 'zod';

const loginUserSchema = {
    body: object({
        email: string({
            required_error: "email is required"
        }).email("not a valid email address"),
        password: string({
            required_error: "password is required"
        }).min(6, "password must be at least 6 characters")
    })
}

export type LoginUserBody = TypeOf<typeof loginUserSchema.body>
