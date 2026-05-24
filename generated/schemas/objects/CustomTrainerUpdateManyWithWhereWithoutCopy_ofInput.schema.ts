import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerScalarWhereInputObjectSchema as CustomTrainerScalarWhereInputObjectSchema } from './CustomTrainerScalarWhereInput.schema';
import { CustomTrainerUpdateManyMutationInputObjectSchema as CustomTrainerUpdateManyMutationInputObjectSchema } from './CustomTrainerUpdateManyMutationInput.schema';
import { CustomTrainerUncheckedUpdateManyWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedUpdateManyWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedUpdateManyWithoutCopy_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateManyWithoutCopy_ofInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateManyWithWhereWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateManyWithWhereWithoutCopy_ofInput>;
export const CustomTrainerUpdateManyWithWhereWithoutCopy_ofInputObjectZodSchema = makeSchema();
