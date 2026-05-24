import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutUserInputObjectSchema as SolveCreateWithoutUserInputObjectSchema } from './SolveCreateWithoutUserInput.schema';
import { SolveUncheckedCreateWithoutUserInputObjectSchema as SolveUncheckedCreateWithoutUserInputObjectSchema } from './SolveUncheckedCreateWithoutUserInput.schema';
import { SolveCreateOrConnectWithoutUserInputObjectSchema as SolveCreateOrConnectWithoutUserInputObjectSchema } from './SolveCreateOrConnectWithoutUserInput.schema';
import { SolveUpsertWithWhereUniqueWithoutUserInputObjectSchema as SolveUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SolveUpsertWithWhereUniqueWithoutUserInput.schema';
import { SolveCreateManyUserInputEnvelopeObjectSchema as SolveCreateManyUserInputEnvelopeObjectSchema } from './SolveCreateManyUserInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithWhereUniqueWithoutUserInputObjectSchema as SolveUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SolveUpdateWithWhereUniqueWithoutUserInput.schema';
import { SolveUpdateManyWithWhereWithoutUserInputObjectSchema as SolveUpdateManyWithWhereWithoutUserInputObjectSchema } from './SolveUpdateManyWithWhereWithoutUserInput.schema';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutUserInputObjectSchema), z.lazy(() => SolveCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SolveUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SolveUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SolveUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveScalarWhereInputObjectSchema), z.lazy(() => SolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithoutUserNestedInput>;
export const SolveUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
