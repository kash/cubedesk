import React, {ReactNode} from 'react';

interface Props {
	title?: ReactNode;
	description?: ReactNode;
	topBody?: ReactNode;
}

export default function ModalHeader(props: Props) {
	const {title, description, topBody} = props;

	if (!title && !description) {
		return null;
	}

	return (
		<div className="mb-6 w-[calc(100%-40px)] text-text">
			{topBody}
			{title ? (
				<h2 className="font-['Kontora',Poppins,Arial,'Helvetica_Neue',Helvetica,sans-serif] text-3xl font-bold text-inherit">
					{title}
				</h2>
			) : null}
			{description ? <p>{description}</p> : null}
		</div>
	);
}
