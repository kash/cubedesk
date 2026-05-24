import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './objects/SessionUpdateManyMutationInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';

export const SessionUpdateManyAndReturnSchema: z.ZodType<Prisma.SessionUpdateManyAndReturnArgs> = z.object({ select: SessionSelectObjectSchema.optional(), data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SessionUpdateManyAndReturnArgs>;

export const SessionUpdateManyAndReturnZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: SessionUpdateManyMutationInputObjectSchema, where: SessionWhereInputObjectSchema.optional() }).strict();