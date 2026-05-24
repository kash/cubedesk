import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutUserInputObjectSchema as ImageCreateWithoutUserInputObjectSchema } from './ImageCreateWithoutUserInput.schema';
import { ImageUncheckedCreateWithoutUserInputObjectSchema as ImageUncheckedCreateWithoutUserInputObjectSchema } from './ImageUncheckedCreateWithoutUserInput.schema';
import { ImageCreateOrConnectWithoutUserInputObjectSchema as ImageCreateOrConnectWithoutUserInputObjectSchema } from './ImageCreateOrConnectWithoutUserInput.schema';
import { ImageUpsertWithWhereUniqueWithoutUserInputObjectSchema as ImageUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ImageUpsertWithWhereUniqueWithoutUserInput.schema';
import { ImageCreateManyUserInputEnvelopeObjectSchema as ImageCreateManyUserInputEnvelopeObjectSchema } from './ImageCreateManyUserInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithWhereUniqueWithoutUserInputObjectSchema as ImageUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ImageUpdateWithWhereUniqueWithoutUserInput.schema';
import { ImageUpdateManyWithWhereWithoutUserInputObjectSchema as ImageUpdateManyWithWhereWithoutUserInputObjectSchema } from './ImageUpdateManyWithWhereWithoutUserInput.schema';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutUserInputObjectSchema), z.lazy(() => ImageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ImageUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ImageUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ImageUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ImageUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ImageUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ImageUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ImageScalarWhereInputObjectSchema), z.lazy(() => ImageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ImageUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithoutUserNestedInput>;
export const ImageUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
