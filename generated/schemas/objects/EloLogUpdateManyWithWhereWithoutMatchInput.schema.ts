import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema';
import { EloLogUpdateManyMutationInputObjectSchema as EloLogUpdateManyMutationInputObjectSchema } from './EloLogUpdateManyMutationInput.schema';
import { EloLogUncheckedUpdateManyWithoutMatchInputObjectSchema as EloLogUncheckedUpdateManyWithoutMatchInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateManyMutationInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateManyWithoutMatchInputObjectSchema)])
}).strict();
export const EloLogUpdateManyWithWhereWithoutMatchInputObjectSchema: z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutMatchInput>;
export const EloLogUpdateManyWithWhereWithoutMatchInputObjectZodSchema = makeSchema();
