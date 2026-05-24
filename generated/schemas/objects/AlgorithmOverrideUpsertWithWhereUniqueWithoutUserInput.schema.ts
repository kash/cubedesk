import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideUpdateWithoutUserInputObjectSchema as AlgorithmOverrideUpdateWithoutUserInputObjectSchema } from './AlgorithmOverrideUpdateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedUpdateWithoutUserInput.schema';
import { AlgorithmOverrideCreateWithoutUserInputObjectSchema as AlgorithmOverrideCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AlgorithmOverrideUpdateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInput>;
export const AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
