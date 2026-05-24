import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutDownload_ofInputObjectSchema as CustomTrainerCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownload_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutDownload_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutDownload_ofInput>;
export const CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectZodSchema = makeSchema();
