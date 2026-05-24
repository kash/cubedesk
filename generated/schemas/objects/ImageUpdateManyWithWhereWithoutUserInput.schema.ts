import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageScalarWhereInputObjectSchema as ImageScalarWhereInputObjectSchema } from './ImageScalarWhereInput.schema';
import { ImageUpdateManyMutationInputObjectSchema as ImageUpdateManyMutationInputObjectSchema } from './ImageUpdateManyMutationInput.schema';
import { ImageUncheckedUpdateManyWithoutUserInputObjectSchema as ImageUncheckedUpdateManyWithoutUserInputObjectSchema } from './ImageUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ImageUpdateManyMutationInputObjectSchema), z.lazy(() => ImageUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ImageUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateManyWithWhereWithoutUserInput>;
export const ImageUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
