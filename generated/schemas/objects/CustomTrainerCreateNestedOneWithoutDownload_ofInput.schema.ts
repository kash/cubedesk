import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutDownload_ofInputObjectSchema as CustomTrainerCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownload_ofInput.schema';
import { CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema as CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutDownload_ofInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutDownload_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutDownload_ofInput>;
export const CustomTrainerCreateNestedOneWithoutDownload_ofInputObjectZodSchema = makeSchema();
