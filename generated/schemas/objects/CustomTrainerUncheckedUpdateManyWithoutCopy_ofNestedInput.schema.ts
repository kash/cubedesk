import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutCopy_ofInputObjectSchema as CustomTrainerCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopy_ofInput.schema';
import { CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema as CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutCopy_ofInput.schema';
import { CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectSchema as CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectSchema } from './CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInput.schema';
import { CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema as CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema } from './CustomTrainerCreateManyCopy_ofInputEnvelope.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectSchema as CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectSchema } from './CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInput.schema';
import { CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectSchema as CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectSchema } from './CustomTrainerUpdateManyWithWhereWithoutCopy_ofInput.schema';
import { CustomTrainerScalarWhereInputObjectSchema as CustomTrainerScalarWhereInputObjectSchema } from './CustomTrainerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema).array(), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInput>;
export const CustomTrainerUncheckedUpdateManyWithoutCopy_ofNestedInputObjectZodSchema = makeSchema();
