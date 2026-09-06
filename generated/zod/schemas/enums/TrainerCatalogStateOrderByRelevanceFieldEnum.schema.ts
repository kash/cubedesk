import * as z from 'zod';

export const TrainerCatalogStateOrderByRelevanceFieldEnumSchema = z.enum(['id'])

export type TrainerCatalogStateOrderByRelevanceFieldEnum = z.infer<typeof TrainerCatalogStateOrderByRelevanceFieldEnumSchema>;