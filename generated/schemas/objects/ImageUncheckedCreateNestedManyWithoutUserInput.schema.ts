import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutUserInputObjectSchema as ImageCreateWithoutUserInputObjectSchema } from './ImageCreateWithoutUserInput.schema';
import { ImageUncheckedCreateWithoutUserInputObjectSchema as ImageUncheckedCreateWithoutUserInputObjectSchema } from './ImageUncheckedCreateWithoutUserInput.schema';
import { ImageCreateOrConnectWithoutUserInputObjectSchema as ImageCreateOrConnectWithoutUserInputObjectSchema } from './ImageCreateOrConnectWithoutUserInput.schema';
import { ImageCreateManyUserInputEnvelopeObjectSchema as ImageCreateManyUserInputEnvelopeObjectSchema } from './ImageCreateManyUserInputEnvelope.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutUserInputObjectSchema), z.lazy(() => ImageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ImageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ImageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ImageCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ImageWhereUniqueInputObjectSchema), z.lazy(() => ImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ImageUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateNestedManyWithoutUserInput>;
export const ImageUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
