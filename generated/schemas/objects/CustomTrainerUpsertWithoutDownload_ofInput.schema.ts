import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUpdateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownload_ofInput.schema';
import { CustomTrainerCreateWithoutDownload_ofInputObjectSchema as CustomTrainerCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownload_ofInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema)]),
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerUpsertWithoutDownload_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithoutDownload_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithoutDownload_ofInput>;
export const CustomTrainerUpsertWithoutDownload_ofInputObjectZodSchema = makeSchema();
