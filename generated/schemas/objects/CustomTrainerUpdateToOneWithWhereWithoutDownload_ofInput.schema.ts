import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUpdateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownload_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInput>;
export const CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInputObjectZodSchema = makeSchema();
