import * as z from 'zod';

export const SmartDeviceOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'internal_name', 'device_id', 'user_id'])

export type SmartDeviceOrderByRelevanceFieldEnum = z.infer<typeof SmartDeviceOrderByRelevanceFieldEnumSchema>;