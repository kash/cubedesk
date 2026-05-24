import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchUpdateWithoutSolvesInputObjectSchema as MatchUpdateWithoutSolvesInputObjectSchema } from './MatchUpdateWithoutSolvesInput.schema';
import { MatchUncheckedUpdateWithoutSolvesInputObjectSchema as MatchUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const MatchUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateToOneWithWhereWithoutSolvesInput>;
export const MatchUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
