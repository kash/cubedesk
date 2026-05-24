import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerUpdateWithoutCopiesInputObjectSchema as CustomTrainerUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUpdateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutCopiesInput.schema';
import { CustomTrainerCreateWithoutCopiesInputObjectSchema as CustomTrainerCreateWithoutCopiesInputObjectSchema } from './CustomTrainerCreateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopiesInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema)]),
  where: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerUpsertWithoutCopiesInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithoutCopiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithoutCopiesInput>;
export const CustomTrainerUpsertWithoutCopiesInputObjectZodSchema = makeSchema();
