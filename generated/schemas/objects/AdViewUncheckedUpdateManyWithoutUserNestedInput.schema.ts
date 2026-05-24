import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewCreateWithoutUserInputObjectSchema as AdViewCreateWithoutUserInputObjectSchema } from './AdViewCreateWithoutUserInput.schema';
import { AdViewUncheckedCreateWithoutUserInputObjectSchema as AdViewUncheckedCreateWithoutUserInputObjectSchema } from './AdViewUncheckedCreateWithoutUserInput.schema';
import { AdViewCreateOrConnectWithoutUserInputObjectSchema as AdViewCreateOrConnectWithoutUserInputObjectSchema } from './AdViewCreateOrConnectWithoutUserInput.schema';
import { AdViewUpsertWithWhereUniqueWithoutUserInputObjectSchema as AdViewUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AdViewUpsertWithWhereUniqueWithoutUserInput.schema';
import { AdViewCreateManyUserInputEnvelopeObjectSchema as AdViewCreateManyUserInputEnvelopeObjectSchema } from './AdViewCreateManyUserInputEnvelope.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './AdViewWhereUniqueInput.schema';
import { AdViewUpdateWithWhereUniqueWithoutUserInputObjectSchema as AdViewUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AdViewUpdateWithWhereUniqueWithoutUserInput.schema';
import { AdViewUpdateManyWithWhereWithoutUserInputObjectSchema as AdViewUpdateManyWithWhereWithoutUserInputObjectSchema } from './AdViewUpdateManyWithWhereWithoutUserInput.schema';
import { AdViewScalarWhereInputObjectSchema as AdViewScalarWhereInputObjectSchema } from './AdViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdViewCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AdViewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdViewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AdViewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AdViewUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AdViewUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdViewCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AdViewWhereUniqueInputObjectSchema), z.lazy(() => AdViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AdViewWhereUniqueInputObjectSchema), z.lazy(() => AdViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AdViewWhereUniqueInputObjectSchema), z.lazy(() => AdViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AdViewWhereUniqueInputObjectSchema), z.lazy(() => AdViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AdViewUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AdViewUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AdViewUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AdViewUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AdViewScalarWhereInputObjectSchema), z.lazy(() => AdViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AdViewUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AdViewUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewUncheckedUpdateManyWithoutUserNestedInput>;
export const AdViewUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
