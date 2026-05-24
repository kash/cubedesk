import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './ForgotPasswordWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ForgotPasswordWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountForgotPasswordArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountForgotPasswordArgsObjectZodSchema = makeSchema();
