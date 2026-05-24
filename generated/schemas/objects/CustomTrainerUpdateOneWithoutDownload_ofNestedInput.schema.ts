import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutDownload_ofInputObjectSchema as CustomTrainerCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutDownload_ofInput.schema';
import { CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema as CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutDownload_ofInput.schema';
import { CustomTrainerUpsertWithoutDownload_ofInputObjectSchema as CustomTrainerUpsertWithoutDownload_ofInputObjectSchema } from './CustomTrainerUpsertWithoutDownload_ofInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInputObjectSchema as CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInputObjectSchema } from './CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInput.schema';
import { CustomTrainerUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUpdateWithoutDownload_ofInput.schema';
import { CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema as CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutDownload_ofInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutDownload_ofInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutDownload_ofInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomTrainerUpsertWithoutDownload_ofInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateToOneWithWhereWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithoutDownload_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutDownload_ofInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerUpdateOneWithoutDownload_ofNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateOneWithoutDownload_ofNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateOneWithoutDownload_ofNestedInput>;
export const CustomTrainerUpdateOneWithoutDownload_ofNestedInputObjectZodSchema = makeSchema();
