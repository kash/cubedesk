import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_3InputObjectSchema as TopAverageCreateWithoutSolve_3InputObjectSchema } from './TopAverageCreateWithoutSolve_3Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_3Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_3Input.schema';
import { TopAverageCreateManySolve_3InputEnvelopeObjectSchema as TopAverageCreateManySolve_3InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_3InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_3InputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageCreateNestedManyWithoutSolve_3InputObjectSchema: z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_3Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_3Input>;
export const TopAverageCreateNestedManyWithoutSolve_3InputObjectZodSchema = makeSchema();
