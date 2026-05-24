import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateWithoutSolveInputObjectSchema as TopSolveCreateWithoutSolveInputObjectSchema } from './TopSolveCreateWithoutSolveInput.schema';
import { TopSolveUncheckedCreateWithoutSolveInputObjectSchema as TopSolveUncheckedCreateWithoutSolveInputObjectSchema } from './TopSolveUncheckedCreateWithoutSolveInput.schema';
import { TopSolveCreateOrConnectWithoutSolveInputObjectSchema as TopSolveCreateOrConnectWithoutSolveInputObjectSchema } from './TopSolveCreateOrConnectWithoutSolveInput.schema';
import { TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectSchema as TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectSchema } from './TopSolveUpsertWithWhereUniqueWithoutSolveInput.schema';
import { TopSolveCreateManySolveInputEnvelopeObjectSchema as TopSolveCreateManySolveInputEnvelopeObjectSchema } from './TopSolveCreateManySolveInputEnvelope.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectSchema as TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectSchema } from './TopSolveUpdateWithWhereUniqueWithoutSolveInput.schema';
import { TopSolveUpdateManyWithWhereWithoutSolveInputObjectSchema as TopSolveUpdateManyWithWhereWithoutSolveInputObjectSchema } from './TopSolveUpdateManyWithWhereWithoutSolveInput.schema';
import { TopSolveScalarWhereInputObjectSchema as TopSolveScalarWhereInputObjectSchema } from './TopSolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopSolveCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => TopSolveCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopSolveCreateManySolveInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUpdateWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopSolveUpdateManyWithWhereWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUpdateManyWithWhereWithoutSolveInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopSolveScalarWhereInputObjectSchema), z.lazy(() => TopSolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopSolveUpdateManyWithoutSolveNestedInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateManyWithoutSolveNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateManyWithoutSolveNestedInput>;
export const TopSolveUpdateManyWithoutSolveNestedInputObjectZodSchema = makeSchema();
