import Button from '@/components/common/Button';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/ModalHeader';
import TextArea from '@/components/common/TextArea';
import {Serialized} from '@/types/serialized';
import {
	PublicUserAccount,
	UserAccount,
	UserAccountForAdmin,
} from '@/types/user';
import {PublicUser} from '@/types/user';
import {useInput} from '@/util/hooks/useInput';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props extends IModalProps {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount | Serialized<PublicUser>;
}

export default function ReportUser(props: Props) {
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
			<ModalHeader
				title={`Report ${user.username}`}
				description="If you believe that this user has done something report-worthy, please provide a brief reason below and submit the report. We will look into all reports in a fair manner and will take action if needed."
			/>
			<TextArea legend="Reason" value={reason} name="reason" onChange={setReason} />
			<Button
				danger
				large
				glow
				primary
				disabled={disabled}
				loading={loading}
				error={error}
				text="Report profile"
				onClick={reportProfile}
			/>
		</div>
	);
}
