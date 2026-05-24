import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutDownloadsInputObjectSchema as CustomTrainerCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownloadsInput.schema';
import { CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema as CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutDownloadsInput.schema';
import { CustomTrainerUpsertWithoutDownloadsInputObjectSchema as CustomTrainerUpsertWithoutDownloadsInputObjectSchema } from './CustomTrainerUpsertWithoutDownloadsInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateToOneWithWhereWithoutDownloadsInputObjectSchema as CustomTrainerUpdateToOneWithWhereWithoutDownloadsInputObjectSchema } from './CustomTrainerUpdateToOneWithWhereWithoutDownloadsInput.schema';
import { CustomTrainerUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUpdateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownloadsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomTrainerUpsertWithoutDownloadsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateToOneWithWhereWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownloadsInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInput>;
export const CustomTrainerUpdateOneRequiredWithoutDownloadsNestedInputObjectZodSchema = makeSchema();
