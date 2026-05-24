import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutGame_sessionInputObjectSchema as SolveUpdateWithoutGame_sessionInputObjectSchema } from './SolveUpdateWithoutGame_sessionInput.schema';
import { SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema as SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedUpdateWithoutGame_sessionInput.schema';
import { SolveCreateWithoutGame_sessionInputObjectSchema as SolveCreateWithoutGame_sessionInputObjectSchema } from './SolveCreateWithoutGame_sessionInput.schema';
import { SolveUncheckedCreateWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutGame_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutGame_sessionInput>;
export const SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectZodSchema = makeSchema();
