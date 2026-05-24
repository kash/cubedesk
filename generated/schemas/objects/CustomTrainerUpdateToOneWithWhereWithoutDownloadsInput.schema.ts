import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUpdateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownloadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateToOneWithWhereWithoutDownloadsInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutDownloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutDownloadsInput>;
export const CustomTrainerUpdateToOneWithWhereWithoutDownloadsInputObjectZodSchema = makeSchema();
