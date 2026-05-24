import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerUpdateWithoutCopiesInputObjectSchema as CustomTrainerUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUpdateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutCopiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateToOneWithWhereWithoutCopiesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutCopiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutCopiesInput>;
export const CustomTrainerUpdateToOneWithWhereWithoutCopiesInputObjectZodSchema = makeSchema();
