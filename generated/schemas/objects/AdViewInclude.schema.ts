import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const AdViewIncludeObjectSchema: z.ZodType<Prisma.AdViewInclude> = makeSchema() as unknown as z.ZodType<Prisma.AdViewInclude>;
export const AdViewIncludeObjectZodSchema = makeSchema();
