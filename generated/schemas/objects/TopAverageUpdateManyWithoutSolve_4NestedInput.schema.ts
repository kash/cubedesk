import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_4InputObjectSchema as TopAverageCreateWithoutSolve_4InputObjectSchema } from './TopAverageCreateWithoutSolve_4Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_4Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_4Input.schema';
import { TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutSolve_4Input.schema';
import { TopAverageCreateManySolve_4InputEnvelopeObjectSchema as TopAverageCreateManySolve_4InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_4InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutSolve_4Input.schema';
import { TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectSchema as TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutSolve_4Input.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_4InputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_4InputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUpdateManyWithoutSolve_4NestedInputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithoutSolve_4NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithoutSolve_4NestedInput>;
export const TopAverageUpdateManyWithoutSolve_4NestedInputObjectZodSchema = makeSchema();
