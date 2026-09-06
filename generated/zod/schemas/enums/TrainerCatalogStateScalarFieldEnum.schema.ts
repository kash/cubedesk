import * as z from 'zod';

export const TrainerCatalogStateScalarFieldEnumSchema = z.enum(['id', 'initialized_at', 'revision'])

export type TrainerCatalogStateScalarFieldEnum = z.infer<typeof TrainerCatalogStateScalarFieldEnumSchema>;