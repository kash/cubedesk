import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_5InputObjectSchema as TopAverageCreateWithoutSolve_5InputObjectSchema } from './TopAverageCreateWithoutSolve_5Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_5Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_5Input.schema';
import { TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutSolve_5Input.schema';
import { TopAverageCreateManySolve_5InputEnvelopeObjectSchema as TopAverageCreateManySolve_5InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_5InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutSolve_5Input.schema';
import { TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectSchema as TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutSolve_5Input.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_5InputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_5InputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUncheckedUpdateManyWithoutSolve_5NestedInputObjectSchema: z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_5NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_5NestedInput>;
export const TopAverageUncheckedUpdateManyWithoutSolve_5NestedInputObjectZodSchema = makeSchema();
