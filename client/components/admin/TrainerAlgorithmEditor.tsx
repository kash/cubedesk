import CubeBuilder from '@/components/trainer/add-custom/CubeBuilder';
import AlgoVisual from '@/components/trainer/AlgoVisual';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {NativeSelect} from '@/components/ui/native-select';
import {Textarea} from '@/components/ui/textarea';
import {
	algorithmWarnings,
	CatalogAlgorithm,
	trainerAlgorithmSchema,
} from '@/shared/trainer/catalog';
import {CUBE_TYPES} from '@/util/cubes/cube_types';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

export default function TrainerAlgorithmEditor({
	initial,
	revision,
	onSaved,
	onCancel,
}: {
	initial: CatalogAlgorithm | null;
	revision: number;
	onSaved: () => void;
	onCancel: () => void;
}) {
	const [algorithm, setAlgorithm] = useState<CatalogAlgorithm>(
		initial ?? {
			id: '',
			name: '',
			active: true,
			solution: '',
			scrambles: '',
			cube_type: '333',
			algo_type: 'OLL',
			group_name: '',
			img_link: '',
			colors: '',
			rotate: 0,
		},
	);
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState('');
	const [painting, setPainting] = useState(false);
	function update<K extends keyof CatalogAlgorithm>(key: K, value: CatalogAlgorithm[K]) {
		setAlgorithm((current) => ({...current, [key]: value}));
	}
	async function save(event: React.FormEvent) {
		event.preventDefault();
		setError('');
		const parsed = trainerAlgorithmSchema.safeParse(algorithm);
		if (!parsed.success) {
			setError(
				parsed.error.issues
					.map((issue) => `${issue.path.join('.')}: ${issue.message}`)
					.join('; '),
			);
			return;
		}
		setBusy(true);
		try {
			await trpc.adminTrainer.save.mutate({
				algorithm: parsed.data,
				revision,
				creating: !initial,
			});
			onSaved();
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setBusy(false);
		}
	}
	const warnings = algorithmWarnings(algorithm);
	return (
		<form onSubmit={save} className="space-y-4">
			<fieldset disabled={busy} className="space-y-4">
				<div className="grid gap-4 sm:grid-cols-2">
					{(['id', 'name', 'algo_type', 'group_name'] as const).map((key) => (
						<Label key={key} className="flex-col items-stretch gap-2 leading-5">
							<span>
								{
									{
										id: 'ID',
										name: 'Name',
										algo_type: 'Algorithm set',
										group_name: 'Group',
									}[key]
								}
							</span>
							<Input
								required={key !== 'group_name'}
								value={algorithm[key]}
								disabled={key === 'id' && !!initial}
								onChange={(event) => update(key, event.target.value)}
							/>
						</Label>
					))}
					<Label className="flex-col items-stretch gap-2 leading-5">
						<span>Cube type</span>
						<NativeSelect
							value={algorithm.cube_type}
							onChange={(event) => {
								update('cube_type', event.target.value);
								setPainting(false);
							}}
						>
							{Object.values(CUBE_TYPES).map((cube) => (
								<option key={cube.id} value={cube.id}>
									{cube.name}
								</option>
							))}
						</NativeSelect>
					</Label>
					<Label className="flex items-center gap-2">
						<Checkbox
							disabled={busy}
							checked={algorithm.active}
							onCheckedChange={(checked) => update('active', checked === true)}
						/>
						Published
					</Label>
				</div>
				{(['solution', 'scrambles'] as const).map((key) => (
					<Label key={key} className="flex-col items-stretch gap-2 leading-5">
						<span>{key === 'solution' ? 'Solution' : 'Scrambles (one per line)'}</span>
						<Textarea
							className="font-mono"
							value={algorithm[key]}
							onChange={(event) => update(key, event.target.value)}
						/>
					</Label>
				))}
				<Label className="flex-col items-stretch gap-2 leading-5">
					<span>Image link</span>
					<Input
						value={algorithm.img_link}
						onChange={(event) => update('img_link', event.target.value)}
					/>
				</Label>
				<Label className="flex-col items-stretch gap-2 leading-5">
					<span>Colors (comma-separated hex values)</span>
					<Textarea
						value={algorithm.colors}
						onChange={(event) => {
							update('colors', event.target.value);
							setPainting(false);
						}}
					/>
				</Label>
				<Label className="flex-col items-stretch gap-2 leading-5">
					<span>Rotation (degrees)</span>
					<Input
						type="number"
						step="1"
						value={algorithm.rotate}
						onChange={(event) => update('rotate', Number(event.target.value))}
					/>
				</Label>
				<div className="border-text/15 flex justify-center rounded border p-5">
					<AlgoVisual
						cubeType={algorithm.cube_type}
						colors={algorithm.colors}
						rotate={algorithm.rotate}
						imageLink={algorithm.img_link || undefined}
					/>
				</div>
				{Object.values(CUBE_TYPES).find((cube) => cube.id === algorithm.cube_type)
					?.size && (
					<Button
						type="button"
						variant="secondary"
						onClick={() => setPainting(!painting)}
					>
						{painting ? 'Close color editor' : 'Edit cube colors'}
					</Button>
				)}
				{painting && (
					<CubeBuilder
						cubeType={algorithm.cube_type}
						initColors={algorithm.colors}
						threeD={false}
						onUpdate={(colors) => update('colors', colors)}
					/>
				)}
				{warnings.length > 0 && (
					<p className="text-text/60 text-sm">
						{warnings.join(' · ')}. You can still save and publish this algorithm.
					</p>
				)}
				{error && (
					<Alert variant="destructive">
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
				<div className="flex gap-3">
					<Button type="submit">{busy ? 'Saving…' : 'Save algorithm'}</Button>
					<Button type="button" variant="secondary" onClick={onCancel}>
						Cancel
					</Button>
				</div>
			</fieldset>
		</form>
	);
}
