import React from 'react';
import TextArea from '@/components/common/TextArea';
import {useInput} from '@/util/hooks/useInput';
import {Solve} from '@/types/solve';

interface Props {
	editMode?: boolean;
	solve: Solve;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function NotesInfo(props: Props) {
	const {solve, editMode, handleChange} = props;

	const [notes, setNotes] = useInput(solve.notes);

	let notesBody = <p className="text-text my-[7px] w-full p-0 text-left opacity-90">{notes}</p>;
	if (!notes) {
		notesBody = (
			<i className="text-text w-full text-center opacity-70">No notes for this solve</i>
		);
	}

	return (
		<div className="flex w-full justify-center">
			{editMode ? (
				<TextArea
					fullWidth
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
