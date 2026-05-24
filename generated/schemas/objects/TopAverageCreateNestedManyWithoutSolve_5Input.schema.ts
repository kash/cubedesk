import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_5InputObjectSchema as TopAverageCreateWithoutSolve_5InputObjectSchema } from './TopAverageCreateWithoutSolve_5Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_5Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_5Input.schema';
import { TopAverageCreateManySolve_5InputEnvelopeObjectSchema as TopAverageCreateManySolve_5InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_5InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_5InputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageCreateNestedManyWithoutSolve_5InputObjectSchema: z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_5Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateNestedManyWithoutSolve_5Input>;
export const TopAverageCreateNestedManyWithoutSolve_5InputObjectZodSchema = makeSchema();
