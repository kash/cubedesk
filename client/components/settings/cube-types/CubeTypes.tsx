import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
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
						labels={{
							cancel: t('common.cancel'),
							inputPrompt: t('common.confirmInputPrompt', {
								word: t('common.confirmWord'),
							}),
							confirmWord: t('common.confirmWord'),
							genericError: t('common.genericError'),
							defaultDescription: t('common.confirmDescription'),
						}}
						{...{
							title: t('settings.cubeTypes.deleteTitle'),
							description: t('settings.cubeTypes.deleteWarning', {
								name: cubeType.name,
							}),
							buttonText: t('settings.cubeTypes.deleteButton'),
							triggerAction: () => deleteCubeType(cubeType),
						}}
					>
						{cubeType.default ? null : (
							<Button
								variant="secondary"
								size="icon"
								aria-label={t('timer.cubeTypes')}
							>
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
						{t('settings.cubeTypes.createNew')}
						<Plus weight="bold" />
					</Button>
				</div>
				<div className="mt-2.5">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>{t('common.cubeType')}</TableHead>
								<TableHead>{t('trainer.scrambleType')}</TableHead>
								<TableHead>{t('common.actions')}</TableHead>
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
					<DialogContent closeLabel={t('common.closeDialog')}>
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
