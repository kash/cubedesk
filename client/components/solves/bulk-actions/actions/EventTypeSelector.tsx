import {useTranslation} from 'react-i18next';
import CubePicker from '@/components/common/CubePicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Solve} from '@/types/solve';
import {CubeType} from '@/util/cubes/cube_types';
import React, {useState} from 'react';

interface Props {
	onComplete?: (cubeType: CubeType) => void;
	solves: Solve[];
}

export default function EventTypeSelector(props: Props) {
	const {t} = useTranslation();
	const {solves, onComplete} = props;
	const [cubeType, setCubeType] = useState<CubeType | null>(null);

	let selectedCubeType: React.ReactNode = null;
	if (cubeType) {
		selectedCubeType = (
			<p className="border-text/20 text-text mt-4 mb-5 table border-b-4 border-solid text-2xl">
				{t('solves.bulk.eventTypeSelection', {
					count: solves.length,
					event: cubeType.name,
				})}
			</p>
		);
	}

	return (
		<div>
			<DialogHeader
				title={t('common.changeEventType')}
				description={t('solves.bulk.selectEventType')}
			/>
			<div className="mb-6">
				<CubePicker
					labels={{
						label: t('common.cubeType'),
						placeholder: t('common.selectOption'),
						searchPlaceholder: t('common.search'),
						emptyMessage: t('common.noResultsFound'),
					}}
					pickerProps={{
						openLeft: true,
					}}
					value="333"
					onChange={(ct) => setCubeType(ct)}
				/>
			</div>
			{selectedCubeType}
			<Button
				variant="default"
				onClick={() => {
					if (cubeType) onComplete?.(cubeType);
				}}
				disabled={!cubeType}
				size="lg"
			>
				{t('common.continue')}
			</Button>
		</div>
	);
}
