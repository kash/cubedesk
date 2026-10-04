import {cn} from '@/util/cn';
import {Bluetooth, BluetoothSlash} from 'phosphor-react';
import React from 'react';

type Status = 'connected' | 'connecting' | 'disconnected';

interface Props {
	status: Status;
}

const LABELS: Record<Status, string> = {
	connected: 'Connected',
	connecting: 'Connecting',
	disconnected: 'Not connected',
};

export default function BluetoothStatus(props: Props) {
	const {status} = props;
	const Icon = status === 'disconnected' ? BluetoothSlash : Bluetooth;

	return (
		<div
			className="relative flex size-7 items-center justify-center"
			role="img"
			aria-label={LABELS[status]}
			title={LABELS[status]}
		>
			<Icon
				weight="bold"
				className={cn('size-[18px] transition-colors duration-300', {
					'text-text': status === 'connected',
					'text-text/70': status === 'connecting',
					'text-text/40': status === 'disconnected',
				})}
			/>
			{status !== 'disconnected' && (
				<span className="absolute top-0.5 right-0.5 flex size-2">
					{status === 'connecting' && (
						<span className="bg-warning absolute inline-flex size-full animate-ping rounded-full opacity-75" />
					)}
					<span
						className={cn(
							'ring-background relative inline-flex size-2 rounded-full ring-2',
							{
								'bg-success': status === 'connected',
								'bg-warning': status === 'connecting',
							},
						)}
					/>
				</span>
			)}
		</div>
	);
}
