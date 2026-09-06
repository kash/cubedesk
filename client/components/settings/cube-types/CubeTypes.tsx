import ConfirmDialog from '@/components/common/ConfirmDialog';
import NewCubeType from '@/components/settings/cube-types/NewCubeType';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {refreshSettings, setCubeType} from '@/db/settings/update';
import {CubeType} from '@/util/cubes/cube_types';
import {getAllCubeTypes, getScrambleTypeById} from '@/util/cubes/util';
import {useSettings} from '@/util/hooks/useSettings';
import {trpc} from '@/util/trpc';
import {Plus, Trash} from 'phosphor-react';
import React from 'react';

export default function CubeTypes() {
	const [newCubeTypeDialog, setNewCubeTypeDialog] = React.useState<React.ComponentProps<
		typeof NewCubeType
	> | null>(null);

	const currentCubeType = useSettings('cube_type');

	function addCustomCubeType() {
		setNewCubeTypeDialog({});
	}

	async function deleteCubeType(cubeType: CubeType) {
		await trpc.customCubeType.delete.mutate({
			id: cubeType.id,
		});

		if (currentCubeType === cubeType.id) {
			setCubeType('333');
		}

		await refreshSettings();

		window.location.reload();
	}

	const rows: React.ReactNode[] = [];

	for (const cubeType of getAllCubeTypes()) {
		const scramble = getScrambleTypeById(cubeType.scramble);

		rows.push(
			<TableRow key={cubeType.name}>
				<TableCell>{cubeType.name}</TableCell>
				<TableCell>{scramble?.name ?? cubeType.scramble}</TableCell>
				<TableCell>
					<ConfirmDialog
						{...{
							title: 'Delete custom cube type',
							description: `Are you sure you want to delete "${cubeType.name}"? This will also delete all of your solves for this cube type.`,
							buttonText: 'Delete cube type',
							triggerAction: () => deleteCubeType(cubeType),
						}}
					>
						{cubeType.default ? null : (
							<Button variant="secondary" size="icon" aria-label="Cube Types">
								<Trash />
							</Button>
						)}
					</ConfirmDialog>
				</TableCell>
			</TableRow>,
		);
	}

	return (
		<>
			<div>
				<div className="flex w-full items-center justify-center py-5">
					<Button variant="default" onClick={addCustomCubeType}>
						{'Create New'}
						<Plus weight="bold" />
					</Button>
				</div>
				<div className="mt-2.5">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Cube Type</TableHead>
								<TableHead>Scramble Type</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>{rows}</TableBody>
					</Table>
				</div>
			</div>
			<Dialog
				open={newCubeTypeDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setNewCubeTypeDialog(null);
					}
				}}
			>
				{newCubeTypeDialog && (
					<DialogContent>
						<NewCubeType
							{...newCubeTypeDialog}
							onComplete={() => {
								setNewCubeTypeDialog((current) =>
									current === newCubeTypeDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
