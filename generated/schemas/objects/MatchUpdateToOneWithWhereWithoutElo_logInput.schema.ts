import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchUpdateWithoutElo_logInputObjectSchema as MatchUpdateWithoutElo_logInputObjectSchema } from './MatchUpdateWithoutElo_logInput.schema';
import { MatchUncheckedUpdateWithoutElo_logInputObjectSchema as MatchUncheckedUpdateWithoutElo_logInputObjectSchema } from './MatchUncheckedUpdateWithoutElo_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchUpdateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutElo_logInputObjectSchema)])
}).strict();
export const MatchUpdateToOneWithWhereWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutElo_logInput>;
export const MatchUpdateToOneWithWhereWithoutElo_logInputObjectZodSchema = makeSchema();
