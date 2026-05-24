import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchUpdateWithoutGame_sessionInputObjectSchema as MatchUpdateWithoutGame_sessionInputObjectSchema } from './MatchUpdateWithoutGame_sessionInput.schema';
import { MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema as MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedUpdateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const MatchUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutGame_sessionInput>;
export const MatchUpdateToOneWithWhereWithoutGame_sessionInputObjectZodSchema = makeSchema();
