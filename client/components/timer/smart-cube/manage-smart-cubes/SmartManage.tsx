import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {api} from '@/util/api';
import {toastError} from '@/util/toast';
import {Check, PencilSimple, X} from 'phosphor-react';
import React, {useState} from 'react';

interface Props {
	cube: {
		id: string;
		name: string;
		created_at: Date | string;
		solves: {id: string}[];
	};
}

export default function SmartManage(props: Props) {
	const {cube} = props;
	const solveCount = cube.solves.length;

	const [editing, setEditing] = useState(false);
	const [name, setName] = useState(cube.name);

	const utils = api.useUtils();
	const rename = api.smartDevice.rename.useMutation({
		onSuccess: (updated) => {
			utils.smartDevice.list.setData(undefined, (devices) =>
				devices?.map((device) =>
					device.id === updated.id ? {...device, name: updated.name} : device,
				),
			);
			setEditing(false);
		},
		onError: (error) => toastError(error.message),
	});

	const trimmedName = name.trim();
	const canSave = !!trimmedName && !rename.isPending;

	function startEditing() {
		setName(cube.name);
		setEditing(true);
	}

	function save() {
		if (!canSave) return;
		if (trimmedName === cube.name) {
			setEditing(false);
			return;
		}
		rename.mutate({id: cube.id, name: trimmedName});
	}

	return (
		<div className="group border-button flex w-full flex-row items-start justify-between gap-4 border-b-2 py-[15px] last:border-b-0">
			<div className="min-w-0 flex-1">
				{editing ? (
					<form
						className="flex flex-row items-center gap-1.5"
						onSubmit={(event) => {
							event.preventDefault();
							save();
						}}
					>
						<Input
							autoFocus
							value={name}
							aria-label="Smart cube name"
							className="h-8"
							disabled={rename.isPending}
							onChange={(event) => setName(event.target.value)}
							onFocus={(event) => event.target.select()}
						/>
						<Button
							type="submit"
							variant="ghost"
							size="icon-sm"
							aria-label="Save name"
							disabled={!canSave}
						>
							<Check />
						</Button>
						<Button
							type="button"
							variant="ghost"
							size="icon-sm"
							aria-label="Cancel renaming"
							disabled={rename.isPending}
							onClick={() => setEditing(false)}
						>
							<X />
						</Button>
					</form>
				) : (
					<div className="flex h-8 flex-row items-center gap-1">
						<h4 className="text-text truncate text-[1.1rem] font-semibold">
							{cube.name}
						</h4>
						<Button
							variant="ghost"
							size="icon-xs"
							aria-label="Rename smart cube"
							className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
							onClick={startEditing}
						>
							<PencilSimple />
						</Button>
					</div>
				)}
				<h5 className="text-text text-[0.9rem] font-normal opacity-80">
					Added on {new Date(cube.created_at).toDateString()}
				</h5>
			</div>
			<div className="flex h-8 shrink-0 items-center">
				<p className="text-text text-base">
					{solveCount} solve{solveCount === 1 ? '' : 's'}
				</p>
			</div>
		</div>
	);
}
