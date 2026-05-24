import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithoutCopy_ofInputObjectSchema as CustomTrainerUpdateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUpdateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutCopy_ofInput.schema';
import { CustomTrainerCreateWithoutCopy_ofInputObjectSchema as CustomTrainerCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopy_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema)])
}).strict();
export const CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInput>;
export const CustomTrainerUpsertWithWhereUniqueWithoutCopy_ofInputObjectZodSchema = makeSchema();
