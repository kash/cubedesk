import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchScalarWhereInputObjectSchema as MatchScalarWhereInputObjectSchema } from './MatchScalarWhereInput.schema';
import { MatchUpdateManyMutationInputObjectSchema as MatchUpdateManyMutationInputObjectSchema } from './MatchUpdateManyMutationInput.schema';
import { MatchUncheckedUpdateManyWithoutWinnerInputObjectSchema as MatchUncheckedUpdateManyWithoutWinnerInputObjectSchema } from './MatchUncheckedUpdateManyWithoutWinnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchUpdateManyMutationInputObjectSchema), z.lazy(() => MatchUncheckedUpdateManyWithoutWinnerInputObjectSchema)])
}).strict();
export const MatchUpdateManyWithWhereWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchUpdateManyWithWhereWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateManyWithWhereWithoutWinnerInput>;
export const MatchUpdateManyWithWhereWithoutWinnerInputObjectZodSchema = makeSchema();
