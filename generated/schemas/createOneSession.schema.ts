import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionIncludeObjectSchema as SessionIncludeObjectSchema } from './objects/SessionInclude.schema';
import { SessionCreateInputObjectSchema as SessionCreateInputObjectSchema } from './objects/SessionCreateInput.schema';
import { SessionUncheckedCreateInputObjectSchema as SessionUncheckedCreateInputObjectSchema } from './objects/SessionUncheckedCreateInput.schema';

export const SessionCreateOneSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SessionCreateArgs>;

export const SessionCreateOneZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), include: SessionIncludeObjectSchema.optional(), data: z.union([SessionCreateInputObjectSchema, SessionUncheckedCreateInputObjectSchema]) }).strict();