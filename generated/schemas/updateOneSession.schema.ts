import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionIncludeObjectSchema as SessionIncludeObjectSchema } from './objects/SessionInclude.schema';
import { SessionUpdateInputObjectSchema as SessionUpdateInputObjectSchema } from './objects/SessionUpdateInput.schema';
import { SessionUncheckedUpdateInputObjectSchema as SessionUncheckedUpdateInputObjectSchema } from './objects/SessionUncheckedUpdateInput.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './objects/SessionWhereUniqueInput.schema';

export const SessionUpdateOneSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]), where: SessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SessionUpdateArgs>;

export const SessionUpdateOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionUpdateInputObjectSchema, SessionUncheckedUpdateInputObjectSchema]), where: SessionWhereUniqueInputObjectSchema }).strict();