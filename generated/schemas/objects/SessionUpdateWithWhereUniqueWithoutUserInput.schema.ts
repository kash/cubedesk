import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutUserInputObjectSchema as SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema';
import { SessionUncheckedUpdateWithoutUserInputObjectSchema as SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput>;
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
