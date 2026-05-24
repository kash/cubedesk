import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutSolvesInputObjectSchema as SessionCreateWithoutSolvesInputObjectSchema } from './SessionCreateWithoutSolvesInput.schema';
import { SessionUncheckedCreateWithoutSolvesInputObjectSchema as SessionUncheckedCreateWithoutSolvesInputObjectSchema } from './SessionUncheckedCreateWithoutSolvesInput.schema';
import { SessionCreateOrConnectWithoutSolvesInputObjectSchema as SessionCreateOrConnectWithoutSolvesInputObjectSchema } from './SessionCreateOrConnectWithoutSolvesInput.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SessionCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => SessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const SessionCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateNestedOneWithoutSolvesInput>;
export const SessionCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
