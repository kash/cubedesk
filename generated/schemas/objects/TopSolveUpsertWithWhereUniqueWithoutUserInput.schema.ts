import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithoutUserInputObjectSchema as TopSolveUpdateWithoutUserInputObjectSchema } from './TopSolveUpdateWithoutUserInput.schema';
import { TopSolveUncheckedUpdateWithoutUserInputObjectSchema as TopSolveUncheckedUpdateWithoutUserInputObjectSchema } from './TopSolveUncheckedUpdateWithoutUserInput.schema';
import { TopSolveCreateWithoutUserInputObjectSchema as TopSolveCreateWithoutUserInputObjectSchema } from './TopSolveCreateWithoutUserInput.schema';
import { TopSolveUncheckedCreateWithoutUserInputObjectSchema as TopSolveUncheckedCreateWithoutUserInputObjectSchema } from './TopSolveUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopSolveUpdateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TopSolveUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpsertWithWhereUniqueWithoutUserInput>;
export const TopSolveUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
