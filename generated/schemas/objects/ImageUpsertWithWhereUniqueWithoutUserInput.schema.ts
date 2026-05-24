import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutUserInputObjectSchema as ImageUpdateWithoutUserInputObjectSchema } from './ImageUpdateWithoutUserInput.schema';
import { ImageUncheckedUpdateWithoutUserInputObjectSchema as ImageUncheckedUpdateWithoutUserInputObjectSchema } from './ImageUncheckedUpdateWithoutUserInput.schema';
import { ImageCreateWithoutUserInputObjectSchema as ImageCreateWithoutUserInputObjectSchema } from './ImageCreateWithoutUserInput.schema';
import { ImageUncheckedCreateWithoutUserInputObjectSchema as ImageUncheckedCreateWithoutUserInputObjectSchema } from './ImageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ImageUpdateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ImageUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithWhereUniqueWithoutUserInput>;
export const ImageUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
