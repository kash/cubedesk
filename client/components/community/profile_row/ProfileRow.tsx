import React, {ReactNode, useState} from 'react';
import {useDispatch} from 'react-redux';
import './ProfileRow.scss';
import {Trash, Eye, User} from 'phosphor-react';
import Avatar from '../../common/avatar/Avatar';
import {DocumentNode, gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import {getTimeString} from '../../../util/time';
import {useGeneral} from '../../../util/hooks/useGeneral';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import block from '../../../styles/bem';
import {openModal} from '../../../actions/general';
import ReportUser from '../../profile/report/ReportUser';
import {useMe} from '../../../util/hooks/useMe';
import {Solve} from '../../../../server/schemas/Solve.schema';
import {PublicUserAccount} from '../../../../server/schemas/UserAccount.schema';

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

	async function reportProfile() {
		dispatch(openModal(<ReportUser user={user} />));
	}

	async function deleteSolve() {
		let query;

		if (recordType === 'top_solve') {
			query = gql`
				mutation Mutate($id: String) {
					deleteTopSolve(id: $id) {
						id
					}
				}
			`;
		} else if (recordType === 'top_average') {
			query = gql`
				mutation Mutate($id: String) {
					deleteTopAverage(id: $id) {
						id
					}
				}
			`;
		}

		await gqlMutate(query as DocumentNode, {
			id: solveId,
		});

		setDeleted(true);
	}

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
