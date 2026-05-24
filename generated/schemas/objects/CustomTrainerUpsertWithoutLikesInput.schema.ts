import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerUpdateWithoutLikesInputObjectSchema as CustomTrainerUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUpdateWithoutLikesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutLikesInput.schema';
import { CustomTrainerCreateWithoutLikesInputObjectSchema as CustomTrainerCreateWithoutLikesInputObjectSchema } from './CustomTrainerCreateWithoutLikesInput.schema';
import { CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema as CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutLikesInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutLikesInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema)]),
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerUpsertWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithoutLikesInput>;
export const CustomTrainerUpsertWithoutLikesInputObjectZodSchema = makeSchema();
