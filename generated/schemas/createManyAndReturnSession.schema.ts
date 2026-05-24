import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionCreateManyInputObjectSchema as SessionCreateManyInputObjectSchema } from './objects/SessionCreateManyInput.schema';

export const SessionCreateManyAndReturnSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SessionCreateManyAndReturnArgs>;

export const SessionCreateManyAndReturnZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([ SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();