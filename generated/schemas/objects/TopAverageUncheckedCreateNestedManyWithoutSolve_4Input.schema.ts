import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_4InputObjectSchema as TopAverageCreateWithoutSolve_4InputObjectSchema } from './TopAverageCreateWithoutSolve_4Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_4Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_4Input.schema';
import { TopAverageCreateManySolve_4InputEnvelopeObjectSchema as TopAverageCreateManySolve_4InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_4InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_4InputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUncheckedCreateNestedManyWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageUncheckedCreateNestedManyWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUncheckedCreateNestedManyWithoutSolve_4Input>;
export const TopAverageUncheckedCreateNestedManyWithoutSolve_4InputObjectZodSchema = makeSchema();
