import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchUpdateWithoutGame_sessionInputObjectSchema as MatchUpdateWithoutGame_sessionInputObjectSchema } from './MatchUpdateWithoutGame_sessionInput.schema';
import { MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema as MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedUpdateWithoutGame_sessionInput.schema';
import { MatchCreateWithoutGame_sessionInputObjectSchema as MatchCreateWithoutGame_sessionInputObjectSchema } from './MatchCreateWithoutGame_sessionInput.schema';
import { MatchUncheckedCreateWithoutGame_sessionInputObjectSchema as MatchUncheckedCreateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutGame_sessionInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutGame_sessionInputObjectSchema)]),
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchUpsertWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithoutGame_sessionInput>;
export const MatchUpsertWithoutGame_sessionInputObjectZodSchema = makeSchema();
