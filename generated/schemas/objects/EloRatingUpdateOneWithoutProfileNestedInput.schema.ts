import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingCreateWithoutProfileInputObjectSchema as EloRatingCreateWithoutProfileInputObjectSchema } from './EloRatingCreateWithoutProfileInput.schema';
import { EloRatingUncheckedCreateWithoutProfileInputObjectSchema as EloRatingUncheckedCreateWithoutProfileInputObjectSchema } from './EloRatingUncheckedCreateWithoutProfileInput.schema';
import { EloRatingCreateOrConnectWithoutProfileInputObjectSchema as EloRatingCreateOrConnectWithoutProfileInputObjectSchema } from './EloRatingCreateOrConnectWithoutProfileInput.schema';
import { EloRatingUpsertWithoutProfileInputObjectSchema as EloRatingUpsertWithoutProfileInputObjectSchema } from './EloRatingUpsertWithoutProfileInput.schema';
import { EloRatingWhereInputObjectSchema as EloRatingWhereInputObjectSchema } from './EloRatingWhereInput.schema';
import { EloRatingWhereUniqueInputObjectSchema as EloRatingWhereUniqueInputObjectSchema } from './EloRatingWhereUniqueInput.schema';
import { EloRatingUpdateToOneWithWhereWithoutProfileInputObjectSchema as EloRatingUpdateToOneWithWhereWithoutProfileInputObjectSchema } from './EloRatingUpdateToOneWithWhereWithoutProfileInput.schema';
import { EloRatingUpdateWithoutProfileInputObjectSchema as EloRatingUpdateWithoutProfileInputObjectSchema } from './EloRatingUpdateWithoutProfileInput.schema';
import { EloRatingUncheckedUpdateWithoutProfileInputObjectSchema as EloRatingUncheckedUpdateWithoutProfileInputObjectSchema } from './EloRatingUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EloRatingCreateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EloRatingCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => EloRatingUpsertWithoutProfileInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EloRatingWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EloRatingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EloRatingUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUpdateWithoutProfileInputObjectSchema), z.lazy(() => EloRatingUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
export const EloRatingUpdateOneWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.EloRatingUpdateOneWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EloRatingUpdateOneWithoutProfileNestedInput>;
export const EloRatingUpdateOneWithoutProfileNestedInputObjectZodSchema = makeSchema();
