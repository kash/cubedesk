import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_2InputObjectSchema as TopAverageCreateWithoutSolve_2InputObjectSchema } from './TopAverageCreateWithoutSolve_2Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_2Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_2Input.schema';
import { TopAverageCreateManySolve_2InputEnvelopeObjectSchema as TopAverageCreateManySolve_2InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_2InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_2InputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageCreateNestedManyWithoutSolve_2InputObjectSchema: z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_2Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_2Input>;
export const TopAverageCreateNestedManyWithoutSolve_2InputObjectZodSchema = makeSchema();
