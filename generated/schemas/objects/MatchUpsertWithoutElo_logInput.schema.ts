import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchUpdateWithoutElo_logInputObjectSchema as MatchUpdateWithoutElo_logInputObjectSchema } from './MatchUpdateWithoutElo_logInput.schema';
import { MatchUncheckedUpdateWithoutElo_logInputObjectSchema as MatchUncheckedUpdateWithoutElo_logInputObjectSchema } from './MatchUncheckedUpdateWithoutElo_logInput.schema';
import { MatchCreateWithoutElo_logInputObjectSchema as MatchCreateWithoutElo_logInputObjectSchema } from './MatchCreateWithoutElo_logInput.schema';
import { MatchUncheckedCreateWithoutElo_logInputObjectSchema as MatchUncheckedCreateWithoutElo_logInputObjectSchema } from './MatchUncheckedCreateWithoutElo_logInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchUpdateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutElo_logInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutElo_logInputObjectSchema)]),
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchUpsertWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithoutElo_logInput>;
export const MatchUpsertWithoutElo_logInputObjectZodSchema = makeSchema();
