import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogScalarWhereInputObjectSchema as EloLogScalarWhereInputObjectSchema } from './EloLogScalarWhereInput.schema';
import { EloLogUpdateManyMutationInputObjectSchema as EloLogUpdateManyMutationInputObjectSchema } from './EloLogUpdateManyMutationInput.schema';
import { EloLogUncheckedUpdateManyWithoutOpponentInputObjectSchema as EloLogUncheckedUpdateManyWithoutOpponentInputObjectSchema } from './EloLogUncheckedUpdateManyWithoutOpponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateManyMutationInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateManyWithoutOpponentInputObjectSchema)])
}).strict();
export const EloLogUpdateManyWithWhereWithoutOpponentInputObjectSchema: z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateManyWithWhereWithoutOpponentInput>;
export const EloLogUpdateManyWithWhereWithoutOpponentInputObjectZodSchema = makeSchema();
