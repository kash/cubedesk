import Avatar from '@/components/common/avatar/Avatar';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import './ProfileRow.scss';
import ReportUser from '@/components/profile/report/ReportUser';
import {PublicUserAccount, Solve} from '@/generated/zod';
import {openModal} from '@/lib/actions/general';
import {useGeneral} from '@/lib/util/hooks/useGeneral';
import {useMe} from '@/lib/util/hooks/useMe';
import {getTimeString} from '@/lib/util/time';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import {Eye, Trash, User} from '@phosphor-icons/react/dist/ssr';
import React, {ReactNode, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

const b = block('profile-row');

interface ProfileRowProps {
	solve?: Solve;
	index?: number;
	user: PublicUserAccount;
	recordType?: 'top_solve' | 'top_average';
	openSolve?: any;
	getRightMessage?: ReactNode;
	hideDropdown?: boolean;
}

export default function ProfileRow(props: ProfileRowProps) {
	const dispatch = useDispatch();
	const [deleted, setDeleted] = useState(false);

	const {solve, index, user, openSolve, hideDropdown, recordType} = props;
	let {getRightMessage} = props;

	const me = useMe();
	const mobileMode = useGeneral('mobile_mode');

	const solveId = solve ? solve.id : null;
	const isMe = solve?.user?.id === me?.id;

	const reportProfile = useCallback(async () => {
		dispatch(openModal(<ReportUser user={user} />));
	}, [dispatch, user]);

	const deleteTopSolveMutation = api.leaderboards.deleteTopSolve.useMutation();
	const deleteTopAverageMutation = api.leaderboards.deleteTopAverage.useMutation();

	const deleteSolve = useCallback(async () => {
		if (recordType === 'top_solve') {
			await deleteTopSolveMutation.mutateAsync({id: solveId});
		} else if (recordType === 'top_average') {
			await deleteTopAverageMutation.mutateAsync({id: solveId});
		}

		setDeleted(true);
	}, [recordType, deleteTopSolveMutation, deleteTopAverageMutation, solveId]);

	if (deleted) {
		return null;
	}

	let solveRow: ReactNode = null;
	let amSolver = false;
	if (solve) {
		solveRow = (
			<button className={b('time')} onClick={() => openSolve(solve)}>
				<span>{getTimeString(solve.time)}</span>
			</button>
		);

		const solveUser = (solve as any).user;
		amSolver = solveUser.id === me.id;
	}

	let indexSpan: ReactNode = null;
	if (index !== undefined) {
		indexSpan = <span className={b('index')}>{index + 1}.</span>;
	}

	let dropdown: ReactNode = (
		<div className={b('options')}>
			<Dropdown
				noMargin
				options={[
					{text: 'View details', icon: <Eye />, onClick: () => openSolve(solve)},
					{text: 'View profile', icon: <User />, link: `/user/${user.username}`},
					{
						text: 'Delete solve',
						hidden: !(solve && (me.admin || me.id === user.id)),
						icon: <Trash />,
						onClick: deleteSolve,
					},
				]}
			/>
		</div>
	);

	if (hideDropdown) {
		dropdown = null;
	}

	if (mobileMode) {
		getRightMessage = solveRow;
		solveRow = null;
	}

	return (
		<div className={b({me: amSolver})}>
			<div className={b('name')}>
				{indexSpan}
				<Avatar showOptions small={mobileMode} profile={user.profile} user={user} />
			</div>
			{solveRow}
			<div className={b('date')}>
				{getRightMessage}
				{dropdown}
			</div>
		</div>
	);
}
