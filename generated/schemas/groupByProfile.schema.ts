import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileOrderByWithAggregationInputObjectSchema as ProfileOrderByWithAggregationInputObjectSchema } from './objects/ProfileOrderByWithAggregationInput.schema';
import { ProfileScalarWhereWithAggregatesInputObjectSchema as ProfileScalarWhereWithAggregatesInputObjectSchema } from './objects/ProfileScalarWhereWithAggregatesInput.schema';
import { ProfileScalarFieldEnumSchema } from './enums/ProfileScalarFieldEnum.schema';
import { ProfileCountAggregateInputObjectSchema as ProfileCountAggregateInputObjectSchema } from './objects/ProfileCountAggregateInput.schema';
import { ProfileMinAggregateInputObjectSchema as ProfileMinAggregateInputObjectSchema } from './objects/ProfileMinAggregateInput.schema';
import { ProfileMaxAggregateInputObjectSchema as ProfileMaxAggregateInputObjectSchema } from './objects/ProfileMaxAggregateInput.schema';

export const ProfileGroupBySchema: z.ZodType<Prisma.ProfileGroupByArgs> = z.object({ where: ProfileWhereInputObjectSchema.optional(), orderBy: z.union([ProfileOrderByWithAggregationInputObjectSchema, ProfileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProfileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProfileScalarFieldEnumSchema), _count: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional(), _min: ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProfileGroupByArgs>;

export const ProfileGroupByZodSchema = z.object({ where: ProfileWhereInputObjectSchema.optional(), orderBy: z.union([ProfileOrderByWithAggregationInputObjectSchema, ProfileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ProfileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ProfileScalarFieldEnumSchema), _count: z.union([ z.literal(true), ProfileCountAggregateInputObjectSchema ]).optional(), _min: ProfileMinAggregateInputObjectSchema.optional(), _max: ProfileMaxAggregateInputObjectSchema.optional() }).strict();