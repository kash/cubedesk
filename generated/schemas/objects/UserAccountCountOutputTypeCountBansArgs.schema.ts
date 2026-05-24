import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './BanLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountBansArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountBansArgsObjectZodSchema = makeSchema();
