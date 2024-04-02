import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

// type inference in zod
export type SignupInput = z.infer<typeof signupInput>


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

// type inference in zod
export type SigninInput = z.infer<typeof signinInput>

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});

export type CreateBlogType = z.infer<typeof createBlogInput>;

export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.string()
});

export type UpdateBlogType = z.infer<typeof updateBlogInput>;