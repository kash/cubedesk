import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionUpdateWithoutSolvesInputObjectSchema as SessionUpdateWithoutSolvesInputObjectSchema } from './SessionUpdateWithoutSolvesInput.schema';
import { SessionUncheckedUpdateWithoutSolvesInputObjectSchema as SessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './SessionUncheckedUpdateWithoutSolvesInput.schema';
import { SessionCreateWithoutSolvesInputObjectSchema as SessionCreateWithoutSolvesInputObjectSchema } from './SessionCreateWithoutSolvesInput.schema';
import { SessionUncheckedCreateWithoutSolvesInputObjectSchema as SessionUncheckedCreateWithoutSolvesInputObjectSchema } from './SessionUncheckedCreateWithoutSolvesInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const SessionUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpsertWithoutSolvesInput>;
export const SessionUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
