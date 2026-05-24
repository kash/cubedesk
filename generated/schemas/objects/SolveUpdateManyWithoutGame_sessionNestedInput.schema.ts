import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutGame_sessionInputObjectSchema as SolveCreateWithoutGame_sessionInputObjectSchema } from './SolveCreateWithoutGame_sessionInput.schema';
import { SolveUncheckedCreateWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateWithoutGame_sessionInput.schema';
import { SolveCreateOrConnectWithoutGame_sessionInputObjectSchema as SolveCreateOrConnectWithoutGame_sessionInputObjectSchema } from './SolveCreateOrConnectWithoutGame_sessionInput.schema';
import { SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectSchema as SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutGame_sessionInput.schema';
import { SolveCreateManyGame_sessionInputEnvelopeObjectSchema as SolveCreateManyGame_sessionInputEnvelopeObjectSchema } from './SolveCreateManyGame_sessionInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectSchema as SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutGame_sessionInput.schema';
import { SolveUpdateManyWithWhereWithoutGame_sessionInputObjectSchema as SolveUpdateManyWithWhereWithoutGame_sessionInputObjectSchema } from './SolveUpdateManyWithWhereWithoutGame_sessionInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutGame_sessionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutGame_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyGame_sessionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutGame_sessionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutGame_sessionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUpdateManyWithoutGame_sessionNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithoutGame_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithoutGame_sessionNestedInput>;
export const SolveUpdateManyWithoutGame_sessionNestedInputObjectZodSchema = makeSchema();
