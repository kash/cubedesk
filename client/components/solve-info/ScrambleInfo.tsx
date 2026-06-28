import React from 'react';
import ScrambleVisual from '@/components/modules/scramble/ScrambleVisual';
import CopyText from '@/components/common/copy_text/CopyText';
import TextArea from '@/components/common/inputs/textarea/TextArea';
import {Solve} from '../../../server/schemas/Solve.schema';

interface Props {
	solve: Solve;
	editMode?: boolean;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function ScrambleInfo(props: Props) {
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
				<TextArea fullWidth autoSize value={scramble} name="scramble" onChange={handleChange} />
			) : (
				<p className="mb-[15px] mt-0 text-center font-mono leading-6 text-text opacity-100">{scramble}</p>
			)}
			<CopyText
				buttonProps={{
					text: 'Copy Scramble',
				}}
				text={scramble}
			/>
		</div>
	);
}
