import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideScalarWhereInputObjectSchema as AlgorithmOverrideScalarWhereInputObjectSchema } from './AlgorithmOverrideScalarWhereInput.schema';
import { AlgorithmOverrideUpdateManyMutationInputObjectSchema as AlgorithmOverrideUpdateManyMutationInputObjectSchema } from './AlgorithmOverrideUpdateManyMutationInput.schema';
import { AlgorithmOverrideUncheckedUpdateManyWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedUpdateManyWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AlgorithmOverrideUpdateManyMutationInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateManyWithWhereWithoutUserInput>;
export const AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
