import React from 'react';
import './UserActions.scss';
import { api } from '@/trpc/react';
import { openModal } from '@/lib/actions/general';
import BanUser from '../ban_user/BanUser';
import block from '@/styles/bem';
import Button from '../../../common/button/Button';
import { toastSuccess } from '@/lib/util/toast';
import { useDispatch } from 'react-redux';
import { UserAccountForAdmin } from '@/server/schemas/UserAccount.schema';

const b = block('manage-user-actions');

interface Props {
  user: UserAccountForAdmin;
  updateUser: () => void;
}

export default function UserActions(props: Props) {
  const dispatch = useDispatch();

  const { user, updateUser } = props;
  const banned = user.banned_forever || user.banned_until;

  const unbanUserMutation = api.admin.unbanUserAccount.useMutation({
    onSuccess: () => {
      updateUser();
      toastSuccess('Successfully unbanned user');
    }
  });

  const setVerifiedStatusMutation = api.admin.setVerifiedStatus.useMutation({
    onSuccess: () => {
      updateUser();
      let flagMessage = 'verified';
      if (user.verified) {
        flagMessage = 'unverified';
      }
      toastSuccess(`Successfully ${flagMessage} user`);
    }
  });

  async function unbanUser() {
    await unbanUserMutation.mutateAsync({
      userId: user.id,
    });
  }

  async function toggleVerifyUser() {
    await setVerifiedStatusMutation.mutateAsync({
      userId: user.id,
      verified: !user.verified,
    });
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
      <Button 
        text={banned ? 'Unban user' : 'Ban user'} 
        onClick={toggleBan} 
        danger 
        loading={unbanUserMutation.isPending}
      />
      <Button
        text={user.verified ? 'Unverify user' : 'Verify user'}
        primary={!user.verified}
        warning={user.verified}
        onClick={toggleVerifyUser}
        loading={setVerifiedStatusMutation.isPending}
      />
    </div>
  );
}