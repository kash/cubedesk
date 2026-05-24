import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './objects/MatchSessionSelect.schema';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './objects/MatchSessionInclude.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './objects/MatchSessionWhereUniqueInput.schema';

export const MatchSessionFindUniqueSchema: z.ZodType<Prisma.MatchSessionFindUniqueArgs> = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), where: MatchSessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchSessionFindUniqueArgs>;

export const MatchSessionFindUniqueZodSchema = z.object({ select: MatchSessionSelectObjectSchema.optional(), include: MatchSessionIncludeObjectSchema.optional(), where: MatchSessionWhereUniqueInputObjectSchema }).strict();