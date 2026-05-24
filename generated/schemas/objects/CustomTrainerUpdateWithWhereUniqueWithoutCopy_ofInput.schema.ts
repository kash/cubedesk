import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithoutCopy_ofInputObjectSchema as CustomTrainerUpdateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUpdateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutCopy_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutCopy_ofInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInput>;
export const CustomTrainerUpdateWithWhereUniqueWithoutCopy_ofInputObjectZodSchema = makeSchema();
