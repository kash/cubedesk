import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideCreateWithoutUserInputObjectSchema as AlgorithmOverrideCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedCreateWithoutUserInput.schema';
import { AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema as AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateOrConnectWithoutUserInput.schema';
import { AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema as AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema } from './AlgorithmOverrideCreateManyUserInputEnvelope.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './AlgorithmOverrideWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AlgorithmOverrideCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateNestedManyWithoutUserInput>;
export const AlgorithmOverrideCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
