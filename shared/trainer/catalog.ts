import {CUBE_TYPES} from '@/util/cubes/cube_types';
import {z} from 'zod';

export const MAX_CSV_BYTES = 5 * 1024 * 1024;
export const MAX_CSV_RECORDS = 10000;

export const trainerAlgorithmSchema = z.object({
	id: z
		.string()
		.trim()
		.min(1)
		.max(100)
		.regex(/^[a-zA-Z0-9_-]+$/, 'Use letters, numbers, underscores or hyphens'),
	name: z.string().trim().min(1).max(250),
	active: z.boolean().default(true),
	solution: z.string().max(10000).default(''),
	scrambles: z.string().max(100000).default(''),
	cube_type: z.string().refine((value) => Object.hasOwn(CUBE_TYPES, value), 'Unknown cube type'),
	algo_type: z
		.string()
		.trim()
		.min(1)
		.max(100)
		.refine(
			(value) => value.toLowerCase() !== 'custom',
			'Custom is reserved for personal trainers',
		),
	group_name: z.string().max(250).default(''),
	img_link: z
		.string()
		.max(2000)
		.refine(
			(value) => !value || /^(https?:\/\/|\/?public\/|\/images\/)/i.test(value),
			'Use an HTTP(S) URL or an image path',
		)
		.default(''),
	colors: z
		.string()
		.max(10000)
		.refine(
			(value) =>
				!value || value.split(',').every((color) => /^#[0-9a-f]{6}$/i.test(color.trim())),
			'Use comma-separated six-digit hex colors',
		)
		.default(''),
	rotate: z.number().int().default(0),
});

export type CatalogAlgorithm = z.infer<typeof trainerAlgorithmSchema>;
export const catalogFields = Object.keys(
	trainerAlgorithmSchema.shape,
) as (keyof CatalogAlgorithm)[];

export function algorithmWarnings(algorithm: CatalogAlgorithm): string[] {
	return [
		...(!algorithm.solution.trim() ? ['Missing solution'] : []),
		...(!algorithm.scrambles.trim() ? ['Missing scrambles'] : []),
	];
}
