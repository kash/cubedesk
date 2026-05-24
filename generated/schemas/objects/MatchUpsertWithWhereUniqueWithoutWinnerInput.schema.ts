import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithoutWinnerInputObjectSchema as MatchUpdateWithoutWinnerInputObjectSchema } from './MatchUpdateWithoutWinnerInput.schema';
import { MatchUncheckedUpdateWithoutWinnerInputObjectSchema as MatchUncheckedUpdateWithoutWinnerInputObjectSchema } from './MatchUncheckedUpdateWithoutWinnerInput.schema';
import { MatchCreateWithoutWinnerInputObjectSchema as MatchCreateWithoutWinnerInputObjectSchema } from './MatchCreateWithoutWinnerInput.schema';
import { MatchUncheckedCreateWithoutWinnerInputObjectSchema as MatchUncheckedCreateWithoutWinnerInputObjectSchema } from './MatchUncheckedCreateWithoutWinnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchUpdateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutWinnerInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema)])
}).strict();
export const MatchUpsertWithWhereUniqueWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithWhereUniqueWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithWhereUniqueWithoutWinnerInput>;
export const MatchUpsertWithWhereUniqueWithoutWinnerInputObjectZodSchema = makeSchema();
