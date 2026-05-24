import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_1InputObjectSchema as TopAverageCreateWithoutSolve_1InputObjectSchema } from './TopAverageCreateWithoutSolve_1Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_1Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_1Input.schema';
import { TopAverageCreateManySolve_1InputEnvelopeObjectSchema as TopAverageCreateManySolve_1InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_1InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_1InputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageCreateNestedManyWithoutSolve_1InputObjectSchema: z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_1Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_1Input>;
export const TopAverageCreateNestedManyWithoutSolve_1InputObjectZodSchema = makeSchema();
