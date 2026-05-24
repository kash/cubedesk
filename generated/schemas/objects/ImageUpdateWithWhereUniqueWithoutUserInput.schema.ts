import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateWithoutUserInputObjectSchema as ImageUpdateWithoutUserInputObjectSchema } from './ImageUpdateWithoutUserInput.schema';
import { ImageUncheckedUpdateWithoutUserInputObjectSchema as ImageUncheckedUpdateWithoutUserInputObjectSchema } from './ImageUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ImageUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithWhereUniqueWithoutUserInput>;
export const ImageUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
