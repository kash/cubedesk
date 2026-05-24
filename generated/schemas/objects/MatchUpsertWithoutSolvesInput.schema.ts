import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchUpdateWithoutSolvesInputObjectSchema as MatchUpdateWithoutSolvesInputObjectSchema } from './MatchUpdateWithoutSolvesInput.schema';
import { MatchUncheckedUpdateWithoutSolvesInputObjectSchema as MatchUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchUncheckedUpdateWithoutSolvesInput.schema';
import { MatchCreateWithoutSolvesInputObjectSchema as MatchCreateWithoutSolvesInputObjectSchema } from './MatchCreateWithoutSolvesInput.schema';
import { MatchUncheckedCreateWithoutSolvesInputObjectSchema as MatchUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchUncheckedCreateWithoutSolvesInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithoutSolvesInput>;
export const MatchUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
