import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Spinner} from '@/components/ui/spinner';
import {Textarea} from '@/components/ui/textarea';
import {Serialized} from '@/types/serialized';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {PublicUser} from '@/types/user';
import {useInput} from '@/util/hooks/useInput';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props {
	onComplete?: () => void;
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount | Serialized<PublicUser>;
}

export default function ReportUser(props: Props) {
	const fieldId = React.useId();

	const {user} = props;

	const [reason, setReason] = useInput('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	async function reportProfile() {
		if (loading) {
			return;
		}

		setLoading(true);
		try {
			await trpc.report.reportProfile.mutate({
				userId: user!.id,
				reason,
			});
		} catch (e) {
			setError(e instanceof Error ? e.message : 'Failed to report user');
			return;
		} finally {
			setLoading(false);
		}

		toastSuccess(`Successfully reported ${user!.username}. We will take care of the rest`);

		if (props.onComplete) {
			props.onComplete();
		}
	}

	const disabled = !reason.trim();

	if (!user) {
		return null;
	}

	return (
		<div>
			<DialogHeader
				title={`Report ${user.username}`}
				description="If you believe that this user has done something report-worthy, please provide a brief reason below and submit the report. We will look into all reports in a fair manner and will take action if needed."
			/>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-1`}>{'Reason'}</FieldLabel>
				<Textarea value={reason} name="reason" onChange={setReason} id={`${fieldId}-1`} />
			</Field>
			<div className="flex flex-col items-start">
				<Button
					variant="destructive"
					onClick={reportProfile}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{'Report profile'}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
