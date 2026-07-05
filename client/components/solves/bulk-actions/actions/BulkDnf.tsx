import React, {useMemo} from 'react';
import {openModal} from '../../../../actions/general';
import ConfirmModal from '@/components/common/ConfirmModal';
import {toastSuccess} from '../../../../util/toast';
import {Solve} from '@/types/solve';
import {useDispatch} from 'react-redux';
import {trpc} from '@/util/trpc';
import Button from '../../../common/Button';
import {initAllSolves} from '../../../layout/init';

interface Props {
	disabled?: boolean;
	solves: Solve[];
}

export default function BulkDnfSolvesButton(props: Props) {
	const {solves, disabled} = props;
	const dispatch = useDispatch();

	const solveIds = useMemo(() => {
		return solves.map((solve) => solve.id);
	}, [solves, solves?.length]);

	function onClick() {
		const solvesToActOn = `${solves.length.toLocaleString()} solve${solves.length === 1 ? '' : 's'}`;

		dispatch(
			openModal(
				<ConfirmModal
					buttonText={`DNF ${solvesToActOn}`}
					title="Bulk DNF solves"
					description="You are about to DNF the selected solves. This is irreversible. Be careful."
					infoBoxes={[{label: 'Solves', value: solves.length.toLocaleString()}]}
					triggerAction={run}
				/>,
			),
		);

		async function run() {
			const updateCount = await trpc.bulkActions.dnfSolves.mutate({
				solveIds,
			});

			await initAllSolves(true);

			const solvesUpdated = `${updateCount} solve${updateCount === 1 ? '' : 's'}`;
			toastSuccess(`Successfully DNF'd ${solvesUpdated}.`);
		}
	}

	return <Button disabled={disabled} text="Mark DNF" gray onClick={onClick} />;
}
