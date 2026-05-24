import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { EloRatingUpdateWithoutProfileInputObjectSchema as EloRatingUpdateWithoutProfileInputObjectSchema } from './EloRatingUpdateWithoutProfileInput.schema';
import { EloRatingUncheckedUpdateWithoutProfileInputObjectSchema as EloRatingUncheckedUpdateWithoutProfileInputObjectSchema } from './EloRatingUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloRatingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EloRatingUpdateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const EloRatingUpdateToOneWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.EloRatingUpdateToOneWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpdateToOneWithWhereWithoutProfileInput>;
export const EloRatingUpdateToOneWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
