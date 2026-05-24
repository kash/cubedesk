import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './EmailLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmailLogWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountEmailLogArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountEmailLogArgsObjectZodSchema = makeSchema();
