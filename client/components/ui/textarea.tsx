import {textControlStyles} from '@/components/ui/input';
import {cn} from '@/util/cn';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const textareaStyles = cn(textControlStyles, 'max-h-96 min-h-24 resize-y leading-snug');

export function Textarea({className, ...props}: React.ComponentProps<'textarea'>) {
	return <textarea data-slot="textarea" className={cn(textareaStyles, className)} {...props} />;
}

export function AutosizeTextarea({
	className,
	...props
}: React.ComponentProps<typeof TextareaAutosize>) {
	return (
		<TextareaAutosize
			data-slot="textarea"
			className={cn(textareaStyles, 'resize-none', className)}
			{...props}
		/>
	);
}
