import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutDownloadsInputObjectSchema as CustomTrainerCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownloadsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutDownloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutDownloadsInput>;
export const CustomTrainerCreateOrConnectWithoutDownloadsInputObjectZodSchema = makeSchema();
