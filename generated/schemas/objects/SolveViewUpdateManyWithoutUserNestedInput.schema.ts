import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutUserInputObjectSchema as SolveViewCreateWithoutUserInputObjectSchema } from './SolveViewCreateWithoutUserInput.schema';
import { SolveViewUncheckedCreateWithoutUserInputObjectSchema as SolveViewUncheckedCreateWithoutUserInputObjectSchema } from './SolveViewUncheckedCreateWithoutUserInput.schema';
import { SolveViewCreateOrConnectWithoutUserInputObjectSchema as SolveViewCreateOrConnectWithoutUserInputObjectSchema } from './SolveViewCreateOrConnectWithoutUserInput.schema';
import { SolveViewUpsertWithWhereUniqueWithoutUserInputObjectSchema as SolveViewUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SolveViewUpsertWithWhereUniqueWithoutUserInput.schema';
import { SolveViewCreateManyUserInputEnvelopeObjectSchema as SolveViewCreateManyUserInputEnvelopeObjectSchema } from './SolveViewCreateManyUserInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithWhereUniqueWithoutUserInputObjectSchema as SolveViewUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SolveViewUpdateWithWhereUniqueWithoutUserInput.schema';
import { SolveViewUpdateManyWithWhereWithoutUserInputObjectSchema as SolveViewUpdateManyWithWhereWithoutUserInputObjectSchema } from './SolveViewUpdateManyWithWhereWithoutUserInput.schema';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveViewUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SolveViewUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveViewScalarWhereInputObjectSchema), z.lazy(() => SolveViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateManyWithoutUserNestedInput>;
export const SolveViewUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
