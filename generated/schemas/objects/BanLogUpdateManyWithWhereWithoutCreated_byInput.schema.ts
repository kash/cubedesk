import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogScalarWhereInputObjectSchema as BanLogScalarWhereInputObjectSchema } from './BanLogScalarWhereInput.schema';
import { BanLogUpdateManyMutationInputObjectSchema as BanLogUpdateManyMutationInputObjectSchema } from './BanLogUpdateManyMutationInput.schema';
import { BanLogUncheckedUpdateManyWithoutCreated_byInputObjectSchema as BanLogUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './BanLogUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanLogUpdateManyMutationInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const BanLogUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateManyWithWhereWithoutCreated_byInput>;
export const BanLogUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
