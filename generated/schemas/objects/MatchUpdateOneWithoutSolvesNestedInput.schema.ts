import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutSolvesInputObjectSchema as MatchCreateWithoutSolvesInputObjectSchema } from './MatchCreateWithoutSolvesInput.schema';
import { MatchUncheckedCreateWithoutSolvesInputObjectSchema as MatchUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchUncheckedCreateWithoutSolvesInput.schema';
import { MatchCreateOrConnectWithoutSolvesInputObjectSchema as MatchCreateOrConnectWithoutSolvesInputObjectSchema } from './MatchCreateOrConnectWithoutSolvesInput.schema';
import { MatchUpsertWithoutSolvesInputObjectSchema as MatchUpsertWithoutSolvesInputObjectSchema } from './MatchUpsertWithoutSolvesInput.schema';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateToOneWithWhereWithoutSolvesInputObjectSchema as MatchUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './MatchUpdateToOneWithWhereWithoutSolvesInput.schema';
import { MatchUpdateWithoutSolvesInputObjectSchema as MatchUpdateWithoutSolvesInputObjectSchema } from './MatchUpdateWithoutSolvesInput.schema';
import { MatchUncheckedUpdateWithoutSolvesInputObjectSchema as MatchUncheckedUpdateWithoutSolvesInputObjectSchema } from './MatchUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchUpsertWithoutSolvesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => MatchUpdateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const MatchUpdateOneWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.MatchUpdateOneWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateOneWithoutSolvesNestedInput>;
export const MatchUpdateOneWithoutSolvesNestedInputObjectZodSchema = makeSchema();
