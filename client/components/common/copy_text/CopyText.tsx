import React, {useRef, useState} from 'react';
import {Copy, Check} from '@phosphor-icons/react';
import Button, {ButtonProps} from '../button/Button';
import {toastSuccess} from '../../../util/toast';

export function copyText(source: string) {
	const el = document.createElement('textarea');
	el.value = source;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

interface Props {
	text: 'self' | string;
	buttonProps?: ButtonProps;
	toastifyMessageOnCopy?: string;
	onCopy?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CopyText(props: Props) {
	const {text, buttonProps, onCopy, toastifyMessageOnCopy} = props;

	const textCopiedTimeout = useRef<NodeJS.Timeout>();
	const [textCopied, setTextCopied] = useState(false);

	function onClick(e) {
		let source = text;

		if (text === 'self') {
			source = window.location.href;
		}

		if (textCopiedTimeout.current) {
			clearTimeout(textCopiedTimeout.current);
		}

		// Copy the source
		copyText(source);
		setTextCopied(() => true);

		textCopiedTimeout.current = setTimeout(() => {
			setTextCopied(() => false);
		}, 2000);

		if (onCopy) {
			onCopy(e);
		}

		if (toastifyMessageOnCopy) {
			toastSuccess(toastifyMessageOnCopy);
		}
	}

	const finalButtonProps = {
		gray: true,
		...buttonProps,
	};

	return (
		<Button
			onClick={onClick}
			title="Copy text"
			gray
			icon={textCopied ? <Check weight="bold" /> : <Copy weight="bold" />}
			{...finalButtonProps}
			white={textCopied}
		/>
	);
}
