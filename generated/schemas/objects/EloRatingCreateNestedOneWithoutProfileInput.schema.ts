import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingCreateWithoutProfileInputObjectSchema as EloRatingCreateWithoutProfileInputObjectSchema } from './EloRatingCreateWithoutProfileInput.schema';
import { EloRatingUncheckedCreateWithoutProfileInputObjectSchema as EloRatingUncheckedCreateWithoutProfileInputObjectSchema } from './EloRatingUncheckedCreateWithoutProfileInput.schema';
import { EloRatingCreateOrConnectWithoutProfileInputObjectSchema as EloRatingCreateOrConnectWithoutProfileInputObjectSchema } from './EloRatingCreateOrConnectWithoutProfileInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloRatingCreateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EloRatingCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => EloRatingWhereUniqueInputObjectSchema).optional()
}).strict();
export const EloRatingCreateNestedOneWithoutProfileInputObjectSchema: z.ZodType<Prisma.EloRatingCreateNestedOneWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingCreateNestedOneWithoutProfileInput>;
export const EloRatingCreateNestedOneWithoutProfileInputObjectZodSchema = makeSchema();
