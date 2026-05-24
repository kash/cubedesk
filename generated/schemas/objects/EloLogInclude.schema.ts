import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  opponent: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  player: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const EloLogIncludeObjectSchema: z.ZodType<Prisma.EloLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.EloLogInclude>;
export const EloLogIncludeObjectZodSchema = makeSchema();
