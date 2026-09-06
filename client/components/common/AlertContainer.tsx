import Loading from '@/components/common/Loading';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {cn} from '@/util/cn';
import {CheckCircle, Info, Warning, WarningOctagon} from 'phosphor-react';
import React, {ReactNode} from 'react';
export type ElementGenericType = 'success' | 'error' | 'warning' | 'info';
interface Props {
	fill?: boolean;
	header?: ReactNode;
	loading?: boolean;
	body?: ReactNode;
	type: ElementGenericType;
	actionBody?: ReactNode;
}
export default function AlertContainer({header, fill, loading, body, type, actionBody}: Props) {
	const Icon = {success: CheckCircle, error: WarningOctagon, warning: Warning, info: Info}[type];
	return (
		<div
			className={cn('m-auto flex w-[95%] items-center justify-center', {
				'min-h-screen w-full': fill,
			})}
		>
			<div className="w-full max-w-lg">
				{loading ? (
					<Loading />
				) : (
					<Alert variant={type === 'error' ? 'destructive' : 'default'}>
						<Icon aria-hidden />
						<AlertTitle>
							{header ||
								{
									success: 'Success',
									error: 'Something went wrong',
									warning: 'Warning',
									info: 'Information',
								}[type]}
						</AlertTitle>
						{body && <AlertDescription>{body}</AlertDescription>}
						{actionBody && <div className="mt-2">{actionBody}</div>}
					</Alert>
				)}
			</div>
		</div>
	);
}
