import {Spinner} from '@/components/ui/spinner';
import {CheckCircle, Info, Warning, XCircle} from 'phosphor-react';
import React from 'react';
import {Toaster as Sonner, type ToasterProps} from 'sonner';
export function Toaster(props: ToasterProps) {
	return (
		<Sonner
			position="bottom-left"
			duration={5000}
			closeButton
			icons={{
				success: <CheckCircle className="size-4" />,
				info: <Info className="size-4" />,
				warning: <Warning className="size-4" />,
				error: <XCircle className="size-4" />,
				loading: <Spinner />,
			}}
			style={
				{
					'--normal-bg': 'rgb(var(--module-color))',
					'--normal-text': 'rgb(var(--text-color))',
					'--normal-border': 'rgb(var(--text-color) / 0.15)',
					'--border-radius': '0.5rem',
					zIndex: 2000000,
				} as React.CSSProperties
			}
			{...props}
		/>
	);
}
