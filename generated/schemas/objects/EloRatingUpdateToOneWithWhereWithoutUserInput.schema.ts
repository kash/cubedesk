import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { EloRatingUpdateWithoutUserInputObjectSchema as EloRatingUpdateWithoutUserInputObjectSchema } from './EloRatingUpdateWithoutUserInput.schema';
import { EloRatingUncheckedUpdateWithoutUserInputObjectSchema as EloRatingUncheckedUpdateWithoutUserInputObjectSchema } from './EloRatingUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloRatingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EloRatingUpdateWithoutUserInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const EloRatingUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.EloRatingUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpdateToOneWithWhereWithoutUserInput>;
export const EloRatingUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
