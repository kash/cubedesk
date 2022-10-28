import React from 'react';
import './ScrambleInfo.scss';
import ScrambleVisual from '../../modules/scramble/ScrambleVisual';
import CopyText from '../../common/copy_text/CopyText';
import TextArea from '../../common/inputs/textarea/TextArea';
import block from '../../../styles/bem';
import {Solve} from '../../../../server/schemas/Solve.schema';

const b = block('solve-info-scramble');

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
		<div className={b('body')}>
			<ScrambleVisual cubeType={cubeType} scramble={scramble} />
		</div>
	);

	return (
		<div className={b()}>
			{scrambleBody}
			{editMode ? (
				<TextArea fullWidth autoSize value={scramble} name="scramble" onChange={handleChange} />
			) : (
				<p>{scramble}</p>
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
