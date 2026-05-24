import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutGame_sessionInputObjectSchema as MatchCreateWithoutGame_sessionInputObjectSchema } from './MatchCreateWithoutGame_sessionInput.schema';
import { MatchUncheckedCreateWithoutGame_sessionInputObjectSchema as MatchUncheckedCreateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutGame_sessionInput.schema';
import { MatchCreateOrConnectWithoutGame_sessionInputObjectSchema as MatchCreateOrConnectWithoutGame_sessionInputObjectSchema } from './MatchCreateOrConnectWithoutGame_sessionInput.schema';
import { MatchUpsertWithoutGame_sessionInputObjectSchema as MatchUpsertWithoutGame_sessionInputObjectSchema } from './MatchUpsertWithoutGame_sessionInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema as MatchUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema } from './MatchUpdateToOneWithWhereWithoutGame_sessionInput.schema';
import { MatchUpdateWithoutGame_sessionInputObjectSchema as MatchUpdateWithoutGame_sessionInputObjectSchema } from './MatchUpdateWithoutGame_sessionInput.schema';
import { MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema as MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedUpdateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutGame_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutGame_sessionInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchUpsertWithoutGame_sessionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutGame_sessionInputObjectSchema)]).optional()
}).strict();
export const MatchUpdateOneWithoutGame_sessionNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateOneWithoutGame_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateOneWithoutGame_sessionNestedInput>;
export const MatchUpdateOneWithoutGame_sessionNestedInputObjectZodSchema = makeSchema();
