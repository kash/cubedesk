import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutMatchInputObjectSchema as SolveUncheckedUpdateManyWithoutMatchInputObjectSchema } from './SolveUncheckedUpdateManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutMatchInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutMatchInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutMatchInput>;
export const SolveUpdateManyWithWhereWithoutMatchInputObjectZodSchema = makeSchema();
