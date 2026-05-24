import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutLikesInputObjectSchema as CustomTrainerCreateWithoutLikesInputObjectSchema } from './CustomTrainerCreateWithoutLikesInput.schema';
import { CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema as CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutLikesInput.schema';
import { CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema as CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutLikesInput.schema';
import { CustomTrainerUpsertWithoutLikesInputObjectSchema as CustomTrainerUpsertWithoutLikesInputObjectSchema } from './CustomTrainerUpsertWithoutLikesInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateToOneWithWhereWithoutLikesInputObjectSchema as CustomTrainerUpdateToOneWithWhereWithoutLikesInputObjectSchema } from './CustomTrainerUpdateToOneWithWhereWithoutLikesInput.schema';
import { CustomTrainerUpdateWithoutLikesInputObjectSchema as CustomTrainerUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUpdateWithoutLikesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomTrainerUpsertWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateToOneWithWhereWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateOneRequiredWithoutLikesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateOneRequiredWithoutLikesNestedInput>;
export const CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectZodSchema = makeSchema();
