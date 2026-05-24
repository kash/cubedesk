import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateManyProfileInputObjectSchema as ProfileViewCreateManyProfileInputObjectSchema } from './ProfileViewCreateManyProfileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProfileViewCreateManyProfileInputObjectSchema), z.lazy(() => ProfileViewCreateManyProfileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProfileViewCreateManyProfileInputEnvelopeObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyProfileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyProfileInputEnvelope>;
export const ProfileViewCreateManyProfileInputEnvelopeObjectZodSchema = makeSchema();
