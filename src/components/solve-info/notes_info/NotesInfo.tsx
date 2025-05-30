import {Textarea} from '@/components/ui/textarea';
import './NotesInfo.scss';
import {Solve} from '@/generated/zod';
import React from 'react';
import {useInput} from '../../../lib/util/hooks/useInput';
import block from '../../../styles/bem';

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
				<Textarea
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
