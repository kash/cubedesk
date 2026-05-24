import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchScalarWhereInputObjectSchema as MatchScalarWhereInputObjectSchema } from './MatchScalarWhereInput.schema';
import { MatchUpdateManyMutationInputObjectSchema as MatchUpdateManyMutationInputObjectSchema } from './MatchUpdateManyMutationInput.schema';
import { MatchUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema as MatchUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedUpdateManyWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchUpdateManyMutationInputObjectSchema), z.lazy(() => MatchUncheckedUpdateManyWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpdateManyWithWhereWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateManyWithWhereWithoutMatch_sessionInput>;
export const MatchUpdateManyWithWhereWithoutMatch_sessionInputObjectZodSchema = makeSchema();
