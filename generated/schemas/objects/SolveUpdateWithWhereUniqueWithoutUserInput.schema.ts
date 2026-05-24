import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutUserInputObjectSchema as SolveUpdateWithoutUserInputObjectSchema } from './SolveUpdateWithoutUserInput.schema';
import { SolveUncheckedUpdateWithoutUserInputObjectSchema as SolveUncheckedUpdateWithoutUserInputObjectSchema } from './SolveUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutUserInput>;
export const SolveUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
