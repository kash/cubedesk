import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutUserInputObjectSchema as SolveUpdateWithoutUserInputObjectSchema } from './SolveUpdateWithoutUserInput.schema';
import { SolveUncheckedUpdateWithoutUserInputObjectSchema as SolveUncheckedUpdateWithoutUserInputObjectSchema } from './SolveUncheckedUpdateWithoutUserInput.schema';
import { SolveCreateWithoutUserInputObjectSchema as SolveCreateWithoutUserInputObjectSchema } from './SolveCreateWithoutUserInput.schema';
import { SolveUncheckedCreateWithoutUserInputObjectSchema as SolveUncheckedCreateWithoutUserInputObjectSchema } from './SolveUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutUserInput>;
export const SolveUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
