import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutUserInputObjectSchema as TopAverageCreateWithoutUserInputObjectSchema } from './TopAverageCreateWithoutUserInput.schema';
import { TopAverageUncheckedCreateWithoutUserInputObjectSchema as TopAverageUncheckedCreateWithoutUserInputObjectSchema } from './TopAverageUncheckedCreateWithoutUserInput.schema';
import { TopAverageCreateOrConnectWithoutUserInputObjectSchema as TopAverageCreateOrConnectWithoutUserInputObjectSchema } from './TopAverageCreateOrConnectWithoutUserInput.schema';
import { TopAverageCreateManyUserInputEnvelopeObjectSchema as TopAverageCreateManyUserInputEnvelopeObjectSchema } from './TopAverageCreateManyUserInputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateNestedManyWithoutUserInput>;
export const TopAverageCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
