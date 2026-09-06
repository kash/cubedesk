import Avatar from '@/components/common/avatar/Avatar';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import ReportUser from '@/components/profile/ReportUser';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {Serialized} from '@/types/serialized';
import {Solve} from '@/types/solve';
import {PublicUserAccount} from '@/types/user';
import {PublicUser} from '@/types/user';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useMe} from '@/util/hooks/useMe';
import {getTimeString} from '@/util/time';
import {trpc} from '@/util/trpc';
import classNames from 'classnames';
import {Eye, Trash, User} from 'phosphor-react';
import React, {ReactNode, useState} from 'react';

interface ProfileRowProps {
	solve?: Solve;
	index?: number;
	user: PublicUserAccount | Serialized<PublicUser>;
	recordType?: 'top_solve' | 'top_average';
	openSolve?: any;
	getRightMessage?: ReactNode;
	hideDropdown?: boolean;
}

export default function ProfileRow(props: ProfileRowProps) {
	const [reportUserDialog, setReportUserDialog] = React.useState<React.ComponentProps<
		typeof ReportUser
	> | null>(null);

	const [deleted, setDeleted] = useState(false);

	const {solve, index, user, openSolve, hideDropdown, recordType} = props;
	let {getRightMessage} = props;

	const me = useMe();
	const mobileMode = useGeneral('mobile_mode');

	const solveId = solve ? solve.id : null;
	const isMe = solve?.user?.id === me?.id;

	async function reportProfile() {
		setReportUserDialog({user: user});
	}

	async function deleteSolve() {
		if (!solveId) {
			return;
		}

		if (recordType === 'top_solve') {
			await trpc.leaderboards.deleteTopSolve.mutate({id: solveId});
		} else if (recordType === 'top_average') {
			await trpc.leaderboards.deleteTopAverage.mutate({id: solveId});
		}

		setDeleted(true);
	}

	if (deleted) {
		return null;
	}

	let solveRow: ReactNode = null;
	let amSolver = false;
	if (solve) {
		solveRow = (
			<Button
				variant="ghost"
				className="h-auto w-1/5 p-0 text-center font-normal whitespace-normal hover:bg-transparent"
				onClick={() => openSolve(solve)}
			>
				<span className="text-text table text-base font-bold">
					{getTimeString(solve.time)}
				</span>
			</Button>
		);

		const solveUser = (solve as any).user;
		amSolver = solveUser.id === me.id;
	}

	let indexSpan: ReactNode = null;
	if (index !== undefined) {
		indexSpan = <span className="text-secondary mr-2 table">{index + 1}.</span>;
	}

	let dropdown: ReactNode = (
		<div className="ml-2">
			<ActionMenu
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
		<>
			<div
				className={classNames(
					'bg-module text-text mb-2 flex w-full flex-row items-center justify-between rounded p-4 text-left text-[1.1rem] font-semibold',
					{
						'border-text/15 border': !amSolver,
						'border-primary sticky top-2.5 bottom-2.5 z-[100] border-[3px]': amSolver,
					},
				)}
			>
				<div className="flex w-2/5 flex-row items-center">
					{indexSpan}
					<Avatar showOptions small={mobileMode} user={user} />
				</div>
				{solveRow}
				<div className="flex w-2/5 flex-row items-center justify-end text-right">
					{getRightMessage}
					{dropdown}
				</div>
			</div>
			<Dialog
				open={reportUserDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setReportUserDialog(null);
					}
				}}
			>
				{reportUserDialog && (
					<DialogContent>
						<ReportUser
							{...reportUserDialog}
							onComplete={() => {
								setReportUserDialog((current) =>
									current === reportUserDialog ? null : current,
								);
							}}
						/>
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
