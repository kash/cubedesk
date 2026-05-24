import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountImageArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountImageArgsObjectZodSchema = makeSchema();
