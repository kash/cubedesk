import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutUserInputObjectSchema as ImageCreateWithoutUserInputObjectSchema } from './ImageCreateWithoutUserInput.schema';
import { ImageUncheckedCreateWithoutUserInputObjectSchema as ImageUncheckedCreateWithoutUserInputObjectSchema } from './ImageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutUserInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutUserInput>;
export const ImageCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
