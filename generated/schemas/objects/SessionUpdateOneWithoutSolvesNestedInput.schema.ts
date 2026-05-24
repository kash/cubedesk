import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutSolvesInputObjectSchema as SessionCreateWithoutSolvesInputObjectSchema } from './SessionCreateWithoutSolvesInput.schema';
import { SessionUncheckedCreateWithoutSolvesInputObjectSchema as SessionUncheckedCreateWithoutSolvesInputObjectSchema } from './SessionUncheckedCreateWithoutSolvesInput.schema';
import { SessionCreateOrConnectWithoutSolvesInputObjectSchema as SessionCreateOrConnectWithoutSolvesInputObjectSchema } from './SessionCreateOrConnectWithoutSolvesInput.schema';
import { SessionUpsertWithoutSolvesInputObjectSchema as SessionUpsertWithoutSolvesInputObjectSchema } from './SessionUpsertWithoutSolvesInput.schema';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema as SessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './SessionUpdateToOneWithWhereWithoutSolvesInput.schema';
import { SessionUpdateWithoutSolvesInputObjectSchema as SessionUpdateWithoutSolvesInputObjectSchema } from './SessionUpdateWithoutSolvesInput.schema';
import { SessionUncheckedUpdateWithoutSolvesInputObjectSchema as SessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './SessionUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => SessionUpsertWithoutSolvesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => SessionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => SessionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => SessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const SessionUpdateOneWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.SessionUpdateOneWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateOneWithoutSolvesNestedInput>;
export const SessionUpdateOneWithoutSolvesNestedInputObjectZodSchema = makeSchema();
