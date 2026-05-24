import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema';
import { EloRatingCreateWithoutProfileInputObjectSchema as EloRatingCreateWithoutProfileInputObjectSchema } from './EloRatingCreateWithoutProfileInput.schema';
import { EloRatingUncheckedCreateWithoutProfileInputObjectSchema as EloRatingUncheckedCreateWithoutProfileInputObjectSchema } from './EloRatingUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloRatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EloRatingCreateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const EloRatingCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.EloRatingCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCreateOrConnectWithoutProfileInput>;
export const EloRatingCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
