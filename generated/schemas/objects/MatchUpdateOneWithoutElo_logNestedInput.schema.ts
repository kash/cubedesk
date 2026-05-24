import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutElo_logInputObjectSchema as MatchCreateWithoutElo_logInputObjectSchema } from './MatchCreateWithoutElo_logInput.schema';
import { MatchUncheckedCreateWithoutElo_logInputObjectSchema as MatchUncheckedCreateWithoutElo_logInputObjectSchema } from './MatchUncheckedCreateWithoutElo_logInput.schema';
import { MatchCreateOrConnectWithoutElo_logInputObjectSchema as MatchCreateOrConnectWithoutElo_logInputObjectSchema } from './MatchCreateOrConnectWithoutElo_logInput.schema';
import { MatchUpsertWithoutElo_logInputObjectSchema as MatchUpsertWithoutElo_logInputObjectSchema } from './MatchUpsertWithoutElo_logInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateToOneWithWhereWithoutElo_logInputObjectSchema as MatchUpdateToOneWithWhereWithoutElo_logInputObjectSchema } from './MatchUpdateToOneWithWhereWithoutElo_logInput.schema';
import { MatchUpdateWithoutElo_logInputObjectSchema as MatchUpdateWithoutElo_logInputObjectSchema } from './MatchUpdateWithoutElo_logInput.schema';
import { MatchUncheckedUpdateWithoutElo_logInputObjectSchema as MatchUncheckedUpdateWithoutElo_logInputObjectSchema } from './MatchUncheckedUpdateWithoutElo_logInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutElo_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutElo_logInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchUpsertWithoutElo_logInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchUpdateToOneWithWhereWithoutElo_logInputObjectSchema), z.lazy(() => MatchUpdateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutElo_logInputObjectSchema)]).optional()
}).strict();
export const MatchUpdateOneWithoutElo_logNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateOneWithoutElo_logNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateOneWithoutElo_logNestedInput>;
export const MatchUpdateOneWithoutElo_logNestedInputObjectZodSchema = makeSchema();
