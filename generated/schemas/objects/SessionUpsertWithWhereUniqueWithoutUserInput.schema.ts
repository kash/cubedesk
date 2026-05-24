import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutUserInputObjectSchema as SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema';
import { SessionUncheckedUpdateWithoutUserInputObjectSchema as SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema';
import { SessionCreateWithoutUserInputObjectSchema as SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema as SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput>;
export const SessionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
