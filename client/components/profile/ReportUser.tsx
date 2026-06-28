import React from 'react';
import {gql} from '@apollo/client/core';
import {toastSuccess} from '@/util/toast';
import Button from '@/components/common/button/Button';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '../../../server/schemas/UserAccount.schema';
import {useMutation} from '@apollo/client';
import {useInput} from '@/util/hooks/useInput';
import {IModalProps} from '@/components/common/modal/Modal';
import TextArea from '@/components/common/inputs/textarea/TextArea';
import ModalHeader from '@/components/common/modal/modal_header/ModalHeader';
import {Profile} from '../../../server/schemas/Profile.schema';

const REPORT_PROFILE_MUTATION = gql`
	mutation Mutate($userId: String, $reason: String) {
		reportProfile(userId: $userId, reason: $reason) {
			id
		}
	}
`;

interface Props extends IModalProps {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount;
}

export default function ReportUser(props: Props) {
	const {user} = props;

	const [reason, setReason] = useInput('');
	const [reportUser, reportUserData] = useMutation<
		{reportProfile: Profile},
		{
			userId: string;
			reason: string;
		}
	>(REPORT_PROFILE_MUTATION);

	async function reportProfile() {
		if (reportUserData?.loading) {
			return;
		}

		await reportUser({
			variables: {
				userId: user!.id,
				reason,
			},
		});

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
				loading={reportUserData?.loading}
				error={reportUserData?.error?.message}
				text="Report profile"
				onClick={reportProfile}
			/>
		</div>
	);
}
