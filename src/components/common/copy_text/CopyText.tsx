import {Button, ButtonProps} from '@/components/ui/button';
import {toastSuccess} from '@/lib/util/toast';
import {Check, Copy} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useRef, useState} from 'react';

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
	buttonProps?: Partial<ButtonProps>;
	toastifyMessageOnCopy?: string;
	onCopy?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CopyText(props: Props) {
	const {text, buttonProps, onCopy, toastifyMessageOnCopy} = props;

	const textCopiedTimeout = useRef<NodeJS.Timeout | null>(null);
	const [textCopied, setTextCopied] = useState(false);

	const onClick = useCallback((e) => {
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
	}, [text, onCopy, toastifyMessageOnCopy]);

	return (
		<Button
			onClick={onClick}
			title="Copy text"
			variant={textCopied ? 'default' : 'secondary'}
			icon={textCopied ? Check : Copy}
			{...buttonProps}
		/>
	);
}
