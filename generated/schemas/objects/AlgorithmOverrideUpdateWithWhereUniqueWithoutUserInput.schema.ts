import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideUpdateWithoutUserInputObjectSchema as AlgorithmOverrideUpdateWithoutUserInputObjectSchema } from './AlgorithmOverrideUpdateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AlgorithmOverrideUpdateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInput>;
export const AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
