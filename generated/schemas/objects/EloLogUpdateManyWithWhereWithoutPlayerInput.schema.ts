import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema';
import { EloLogUpdateManyMutationInputObjectSchema as EloLogUpdateManyMutationInputObjectSchema } from './EloLogUpdateManyMutationInput.schema';
import { EloLogUncheckedUpdateManyWithoutPlayerInputObjectSchema as EloLogUncheckedUpdateManyWithoutPlayerInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateManyMutationInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateManyWithoutPlayerInputObjectSchema)])
}).strict();
export const EloLogUpdateManyWithWhereWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutPlayerInput>;
export const EloLogUpdateManyWithWhereWithoutPlayerInputObjectZodSchema = makeSchema();
