import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerUpdateWithoutLikesInputObjectSchema as CustomTrainerUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUpdateWithoutLikesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateToOneWithWhereWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutLikesInput>;
export const CustomTrainerUpdateToOneWithWhereWithoutLikesInputObjectZodSchema = makeSchema();
