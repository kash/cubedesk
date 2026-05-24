import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingUpdateWithoutProfileInputObjectSchema as EloRatingUpdateWithoutProfileInputObjectSchema } from './EloRatingUpdateWithoutProfileInput.schema';
import { EloRatingUncheckedUpdateWithoutProfileInputObjectSchema as EloRatingUncheckedUpdateWithoutProfileInputObjectSchema } from './EloRatingUncheckedUpdateWithoutProfileInput.schema';
import { EloRatingCreateWithoutProfileInputObjectSchema as EloRatingCreateWithoutProfileInputObjectSchema } from './EloRatingCreateWithoutProfileInput.schema';
import { EloRatingUncheckedCreateWithoutProfileInputObjectSchema as EloRatingUncheckedCreateWithoutProfileInputObjectSchema } from './EloRatingUncheckedCreateWithoutProfileInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EloRatingUpdateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => EloRatingCreateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutProfileInputObjectSchema)]),
  where: z.lazy(() => EloRatingWhereInputObjectSchema).optional()
}).strict();
export const EloRatingUpsertWithoutProfileInputObjectSchema: z.ZodType<Prisma.EloRatingUpsertWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpsertWithoutProfileInput>;
export const EloRatingUpsertWithoutProfileInputObjectZodSchema = makeSchema();
