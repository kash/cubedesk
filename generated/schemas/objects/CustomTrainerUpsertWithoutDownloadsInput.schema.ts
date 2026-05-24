import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUpdateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownloadsInput.schema';
import { CustomTrainerCreateWithoutDownloadsInputObjectSchema as CustomTrainerCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownloadsInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema)]),
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerUpsertWithoutDownloadsInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithoutDownloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithoutDownloadsInput>;
export const CustomTrainerUpsertWithoutDownloadsInputObjectZodSchema = makeSchema();
