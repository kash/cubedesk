import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSessionInputObjectSchema as SolveCreateWithoutSessionInputObjectSchema } from './SolveCreateWithoutSessionInput.schema';
import { SolveUncheckedCreateWithoutSessionInputObjectSchema as SolveUncheckedCreateWithoutSessionInputObjectSchema } from './SolveUncheckedCreateWithoutSessionInput.schema';
import { SolveCreateOrConnectWithoutSessionInputObjectSchema as SolveCreateOrConnectWithoutSessionInputObjectSchema } from './SolveCreateOrConnectWithoutSessionInput.schema';
import { SolveUpsertWithWhereUniqueWithoutSessionInputObjectSchema as SolveUpsertWithWhereUniqueWithoutSessionInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutSessionInput.schema';
import { SolveCreateManySessionInputEnvelopeObjectSchema as SolveCreateManySessionInputEnvelopeObjectSchema } from './SolveCreateManySessionInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutSessionInputObjectSchema as SolveUpdateWithWhereUniqueWithoutSessionInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutSessionInput.schema';
import { SolveUpdateManyWithWhereWithoutSessionInputObjectSchema as SolveUpdateManyWithWhereWithoutSessionInputObjectSchema } from './SolveUpdateManyWithWhereWithoutSessionInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveCreateWithoutSessionInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutSessionInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutSessionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutSessionInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutSessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManySessionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutSessionInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutSessionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutSessionInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutSessionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUpdateManyWithoutSessionNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithoutSessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithoutSessionNestedInput>;
export const SolveUpdateManyWithoutSessionNestedInputObjectZodSchema = makeSchema();
