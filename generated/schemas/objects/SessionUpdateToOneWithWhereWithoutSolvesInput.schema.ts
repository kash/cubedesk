import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema';
import { SessionUpdateWithoutSolvesInputObjectSchema as SessionUpdateWithoutSolvesInputObjectSchema } from './SessionUpdateWithoutSolvesInput.schema';
import { SessionUncheckedUpdateWithoutSolvesInputObjectSchema as SessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './SessionUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const SessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateToOneWithWhereWithoutSolvesInput>;
export const SessionUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
