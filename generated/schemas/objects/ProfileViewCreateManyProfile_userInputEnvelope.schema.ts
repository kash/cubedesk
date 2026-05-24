import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewCreateManyProfile_userInputObjectSchema as ProfileViewCreateManyProfile_userInputObjectSchema } from './ProfileViewCreateManyProfile_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProfileViewCreateManyProfile_userInputObjectSchema), z.lazy(() => ProfileViewCreateManyProfile_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProfileViewCreateManyProfile_userInputEnvelopeObjectSchema: z.ZodType<Prisma.ProfileViewCreateManyProfile_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateManyProfile_userInputEnvelope>;
export const ProfileViewCreateManyProfile_userInputEnvelopeObjectZodSchema = makeSchema();
