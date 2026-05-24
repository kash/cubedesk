import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutUserInputObjectSchema as SolveUncheckedUpdateManyWithoutUserInputObjectSchema } from './SolveUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutUserInput>;
export const SolveUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
