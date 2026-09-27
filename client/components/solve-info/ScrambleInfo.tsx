import CopyText from '@/components/common/CopyText';
import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import {AutosizeTextarea} from '@/components/ui/textarea';
import {Solve} from '@/types/solve';
import React from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
	solve: Solve;
	editMode?: boolean;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function ScrambleInfo(props: Props) {
	const {t} = useTranslation();
	const {solve, editMode, handleChange} = props;
	const scramble = solve.scramble;
	const cubeType = solve.cube_type;

	const scrambleBody = (
		<div className="mb-[15px] w-full max-w-[260px]">
			<ScrambleVisual cubeType={cubeType} scramble={scramble} />
		</div>
	);

	return (
		<div className="flex w-full flex-col items-center">
			{scrambleBody}
			{editMode ? (
				<AutosizeTextarea
					value={scramble}
					name="scramble"
					onChange={handleChange}
					aria-label={t('solves.scramble')}
				/>
			) : (
				<p className="text-text mt-0 mb-[15px] text-center font-mono leading-6 opacity-100">
					{scramble}
				</p>
			)}
			<CopyText
				labels={{
					copy: t('common.copyText'),
					copied: t('common.copied'),
					error: t('common.copyError'),
				}}
				buttonProps={{
					children: t('solves.copyScramble'),
				}}
				text={scramble}
			/>
		</div>
	);
}
