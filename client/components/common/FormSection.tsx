import React, {ReactNode} from 'react';

interface Props {
	removeBorderBottom?: boolean;
	removePaddingTop?: boolean;
	removePaddingBottom?: boolean;
	children?: ReactNode;
}

export default function FormSection(props: Props) {
	const {removePaddingBottom, removePaddingTop, removeBorderBottom} = props;

	const classes = ['relative', 'border-solid', 'border-button'];
	if (!removePaddingTop) {
		classes.push('pt-7');
	}
	if (!removePaddingBottom) {
		classes.push('pb-7');
	}

	if (!removeBorderBottom) {
		classes.push('border-b-4');
	}

	return <div className={classes.join(' ')}>{props.children}</div>;
}
