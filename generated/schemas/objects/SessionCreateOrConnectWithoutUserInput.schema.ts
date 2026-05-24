import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutUserInputObjectSchema as SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema as SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput>;
export const SessionCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
