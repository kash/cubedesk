import React from 'react';
import './ReportProfile.scss';
import {toastSuccess} from '../../../lib/util/toast';
import Button from '../../common/button/Button';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '../../../server/schemas/UserAccount.schema';
import {useInput} from '../../../lib/util/hooks/useInput';
import {IModalProps} from '../../common/modal/Modal';
import TextArea from '../../common/inputs/textarea/TextArea';
import block from '../../../styles/bem';
import ModalHeader from '../../common/modal/modal_header/ModalHeader';
import {api} from '@/trpc/react';

const b = block('report-profile');

interface Props extends IModalProps {
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount;
}

export default function ReportUser(props: Props) {
	const {user} = props;

	const [reason, setReason] = useInput('');
	const reportUserMutation = api.report.reportProfile.useMutation();

	async function reportProfile() {
		if (reportUserMutation.isPending) {
			return;
		}

		await reportUserMutation.mutateAsync({
			userId: user.id,
			reason,
		});

		toastSuccess(`Successfully reported ${user.username}. We will take care of the rest`);

		if (props.onComplete) {
			props.onComplete();
		}
	}

	const disabled = !reason.trim();
	return (
		<div className={b()}>
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
				loading={reportUserMutation.isPending}
				error={reportUserMutation.error?.message}
				text="Report profile"
				onClick={reportProfile}
			/>
		</div>
	);
}
