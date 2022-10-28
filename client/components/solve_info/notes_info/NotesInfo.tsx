import React from 'react';
import './NotesInfo.scss';
import block from '../../../styles/bem';
import TextArea from '../../common/inputs/textarea/TextArea';
import {useInput} from '../../../util/hooks/useInput';
import {Solve} from '../../../../server/schemas/Solve.schema';

const b = block('solve-info-notes');

interface Props {
	editMode?: boolean;
	solve: Solve;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function NotesInfo(props: Props) {
	const {solve, editMode, handleChange} = props;

	const [notes, setNotes] = useInput(solve.notes);

	let notesBody = <p>{notes}</p>;
	if (!notes) {
		notesBody = <i>No notes for this solve</i>;
	}

	return (
		<div className={b()}>
			{editMode ? (
				<TextArea
					value={notes || ''}
					autoSize
					name="notes"
					onChange={(e) => {
						setNotes(e);
						handleChange(e);
					}}
				/>
			) : (
				notesBody
			)}
		</div>
	);
}
