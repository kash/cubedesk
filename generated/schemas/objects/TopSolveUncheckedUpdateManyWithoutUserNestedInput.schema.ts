import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateWithoutUserInputObjectSchema as TopSolveCreateWithoutUserInputObjectSchema } from './TopSolveCreateWithoutUserInput.schema';
import { TopSolveUncheckedCreateWithoutUserInputObjectSchema as TopSolveUncheckedCreateWithoutUserInputObjectSchema } from './TopSolveUncheckedCreateWithoutUserInput.schema';
import { TopSolveCreateOrConnectWithoutUserInputObjectSchema as TopSolveCreateOrConnectWithoutUserInputObjectSchema } from './TopSolveCreateOrConnectWithoutUserInput.schema';
import { TopSolveUpsertWithWhereUniqueWithoutUserInputObjectSchema as TopSolveUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TopSolveUpsertWithWhereUniqueWithoutUserInput.schema';
import { TopSolveCreateManyUserInputEnvelopeObjectSchema as TopSolveCreateManyUserInputEnvelopeObjectSchema } from './TopSolveCreateManyUserInputEnvelope.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithWhereUniqueWithoutUserInputObjectSchema as TopSolveUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TopSolveUpdateWithWhereUniqueWithoutUserInput.schema';
import { TopSolveUpdateManyWithWhereWithoutUserInputObjectSchema as TopSolveUpdateManyWithWhereWithoutUserInputObjectSchema } from './TopSolveUpdateManyWithWhereWithoutUserInput.schema';
import { TopSolveScalarWhereInputObjectSchema as TopSolveScalarWhereInputObjectSchema } from './TopSolveScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopSolveCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TopSolveCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopSolveUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TopSolveUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopSolveCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopSolveUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TopSolveUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopSolveUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TopSolveUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopSolveScalarWhereInputObjectSchema), z.lazy(() => TopSolveScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopSolveUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TopSolveUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUncheckedUpdateManyWithoutUserNestedInput>;
export const TopSolveUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
