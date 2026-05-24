import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutDownloadsInputObjectSchema as CustomTrainerCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateWithoutDownloadsInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownloadsInput.schema';
import { CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema as CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutDownloadsInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownloadsInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownloadsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutDownloadsInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomTrainerCreateNestedOneWithoutDownloadsInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutDownloadsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutDownloadsInput>;
export const CustomTrainerCreateNestedOneWithoutDownloadsInputObjectZodSchema = makeSchema();
