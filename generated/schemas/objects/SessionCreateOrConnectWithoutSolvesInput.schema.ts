import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutSolvesInputObjectSchema as SessionCreateWithoutSolvesInputObjectSchema } from './SessionCreateWithoutSolvesInput.schema';
import { SessionUncheckedCreateWithoutSolvesInputObjectSchema as SessionUncheckedCreateWithoutSolvesInputObjectSchema } from './SessionUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutSolvesInput>;
export const SessionCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
