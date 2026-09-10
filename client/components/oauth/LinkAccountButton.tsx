import {Button} from '@/components/ui/button';
import {Spinner} from '@/components/ui/spinner';
import {IntegrationType} from '@/shared/integration';
import {toastError} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props extends Omit<React.ComponentProps<typeof Button>, 'onClick' | 'asChild'> {
	integrationType: IntegrationType;
}

export default function LinkAccountButton({integrationType, children, disabled, ...props}: Props) {
	const [loading, setLoading] = useState(false);

	async function link() {
		setLoading(true);
		try {
			const {url} = await trpc.integration.start.mutate({integrationType});
			window.location.assign(url);
		} catch (error) {
			toastError(error);
			setLoading(false);
		}
	}

	return (
		<Button {...props} disabled={disabled || loading} onClick={link}>
			{loading ? <Spinner /> : null}
			{children}
		</Button>
	);
}
