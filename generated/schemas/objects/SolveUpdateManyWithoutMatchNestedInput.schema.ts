import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutMatchInputObjectSchema as SolveCreateWithoutMatchInputObjectSchema } from './SolveCreateWithoutMatchInput.schema';
import { SolveUncheckedCreateWithoutMatchInputObjectSchema as SolveUncheckedCreateWithoutMatchInputObjectSchema } from './SolveUncheckedCreateWithoutMatchInput.schema';
import { SolveCreateOrConnectWithoutMatchInputObjectSchema as SolveCreateOrConnectWithoutMatchInputObjectSchema } from './SolveCreateOrConnectWithoutMatchInput.schema';
import { SolveUpsertWithWhereUniqueWithoutMatchInputObjectSchema as SolveUpsertWithWhereUniqueWithoutMatchInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutMatchInput.schema';
import { SolveCreateManyMatchInputEnvelopeObjectSchema as SolveCreateManyMatchInputEnvelopeObjectSchema } from './SolveCreateManyMatchInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutMatchInputObjectSchema as SolveUpdateWithWhereUniqueWithoutMatchInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutMatchInput.schema';
import { SolveUpdateManyWithWhereWithoutMatchInputObjectSchema as SolveUpdateManyWithWhereWithoutMatchInputObjectSchema } from './SolveUpdateManyWithWhereWithoutMatchInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyMatchInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutMatchInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutMatchInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutMatchInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutMatchInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUpdateManyWithoutMatchNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithoutMatchNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithoutMatchNestedInput>;
export const SolveUpdateManyWithoutMatchNestedInputObjectZodSchema = makeSchema();
