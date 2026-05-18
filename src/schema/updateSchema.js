import z from 'zod';

export const updateSchema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({
            message: 'Enter your name.',
        })
        .regex(/^[A-Za-z\s]+$/, {
            message: 'Name can only contain letters and spaces',
        }),
    photo: z
        .string()
        .trim()
        .nonempty({
            message: 'Enter your photo.',
        })
        .url({
            message: 'Enter a valid url.',
        }),
});
