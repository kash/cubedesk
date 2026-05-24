import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideCreateWithoutUserInputObjectSchema as AlgorithmOverrideCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateOrConnectWithoutUserInput>;
export const AlgorithmOverrideCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
