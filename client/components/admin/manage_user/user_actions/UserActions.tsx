import React from 'react';
import './UserActions.scss';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../../api';
import {openModal} from '../../../../actions/general';
import {PUBLIC_USER_WITH_ELO_FRAGMENT} from '../../../../util/graphql/fragments';
import BanUser from '../ban_user/BanUser';
import block from '../../../../styles/bem';
import Button from '../../../common/button/Button';
import {toastSuccess} from '../../../../util/toast';
import {useDispatch} from 'react-redux';
import {UserAccountForAdmin} from '../../../../../server/schemas/UserAccount.schema';

const b = block('manage-user-actions');

interface Props {
	user: UserAccountForAdmin;
	updateUser: () => void;
}

export default function UserActions(props: Props) {
	const dispatch = useDispatch();

	const {user, updateUser} = props;
	const banned = user.banned_forever || user.banned_until;

	async function unbanUser() {
		const query = gql`
			mutation Mutate($userId: String) {
				unbanUserAccount(userId: $userId) {
					id
				}
			}
		`;

		await gqlMutate(query, {
			userId: user.id,
		});

		updateUser();
		toastSuccess('Successfully unbanned user');
	}

	async function toggleVerifyUser() {
		const query = gql`
			${PUBLIC_USER_WITH_ELO_FRAGMENT}
			mutation Mutate($userId: String, $verified: Boolean) {
				setVerifiedStatus(userId: $userId, verified: $verified) {
					...PublicUserWithEloFragment
				}
			}
		`;

		await gqlMutate(query, {
			userId: user.id,
			verified: !user.verified,
		});

		updateUser();
		let flagMessage = 'verified';
		if (user.verified) {
			flagMessage = 'unverified';
		}
		toastSuccess(`Successfully ${flagMessage} user`);
	}

	function toggleBan() {
		if (banned) {
			unbanUser();
		} else {
			dispatch(
				openModal(<BanUser user={user} />, {
					onComplete: updateUser,
				})
			);
		}
	}

	return (
		<div className={b()}>
			<Button text={banned ? 'Unban user' : 'Ban user'} onClick={toggleBan} danger />
			<Button
				text={user.verified ? 'Unverify user' : 'Verify user'}
				primary={!user.verified}
				warning={user.verified}
				onClick={toggleVerifyUser}
			/>
		</div>
	);
}
