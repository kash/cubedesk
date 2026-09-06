import TrainerAlgorithmEditor from '@/components/admin/TrainerAlgorithmEditor';
import TrainerCsvImport from '@/components/admin/TrainerCsvImport';
import Empty from '@/components/common/Empty';
import PageControls from '@/components/common/PageControls';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {NativeSelect} from '@/components/ui/native-select';
import {Skeleton} from '@/components/ui/skeleton';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {CatalogAlgorithm} from '@/shared/trainer/catalog';
import {trpc} from '@/util/trpc';
import React, {useEffect, useState} from 'react';

type Result = Awaited<ReturnType<typeof trpc.adminTrainer.list.query>>;

export default function AdminTrainer() {
	const [query, setQuery] = useState('');
	const [cubeType, setCubeType] = useState('');
	const [algoType, setAlgoType] = useState('');
	const [status, setStatus] = useState<'all' | 'published' | 'unpublished'>('all');
	const [page, setPage] = useState(0);
	const [version, setVersion] = useState(0);
	const [data, setData] = useState<Result | null>(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const [importing, setImporting] = useState(false);
	const [importBusy, setImportBusy] = useState(false);
	const [editor, setEditor] = useState<{
		initial: CatalogAlgorithm | null;
		revision: number;
	} | null>(null);
	useEffect(() => {
		let cancelled = false;
		setLoading(true);
		setError('');
		const timeout = setTimeout(() => {
			trpc.adminTrainer.list
				.query({query, cubeType, algoType, status, page})
				.then((result) => {
					if (!cancelled) setData(result);
				})
				.catch((error) => {
					if (!cancelled) setError(error.message);
				})
				.finally(() => {
					if (!cancelled) setLoading(false);
				});
		}, 150);
		return () => {
			cancelled = true;
			clearTimeout(timeout);
		};
	}, [query, cubeType, algoType, status, page, version]);
	function refresh() {
		setVersion((current) => current + 1);
	}
	return (
		<div className="space-y-5">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<h2 className="text-xl font-semibold">Trainer algorithms</h2>
					<p className="text-text/60 text-sm">
						{data?.initialized
							? `PostgreSQL · ${data.catalogTotal} records · ${data.published} published`
							: 'Awaiting first CSV import · using the legacy cache when available'}
					</p>
				</div>
				<div className="flex gap-3">
					<Button variant="secondary" onClick={() => setImporting(true)}>
						Upload CSV
					</Button>
					<Button
						disabled={!data?.initialized || loading || !!error}
						onClick={() => setEditor({initial: null, revision: data!.revision})}
					>
						New algorithm
					</Button>
				</div>
			</div>
			{data && !data.initialized && (
				<p className="text-text/60 text-sm">
					Upload your trainer CSV to initialize the catalog and start editing algorithms.
				</p>
			)}
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				<Input
					className="w-full"
					placeholder="Search by ID or name"
					aria-label="Search algorithms"
					value={query}
					onChange={(event) => {
						setQuery(event.target.value);
						setPage(0);
					}}
				/>
				<NativeSelect
					aria-label="Cube type filter"
					value={cubeType}
					onChange={(event) => {
						setCubeType(event.target.value);
						setAlgoType('');
						setPage(0);
					}}
				>
					<option value="">All cubes</option>
					{[...new Set(data?.sets.map((set) => set.cube_type))].sort().map((cube) => (
						<option key={cube} value={cube}>
							{cube}
						</option>
					))}
				</NativeSelect>
				<NativeSelect
					aria-label="Algorithm set filter"
					value={algoType}
					onChange={(event) => {
						setAlgoType(event.target.value);
						setPage(0);
					}}
				>
					<option value="">All sets</option>
					{[
						...new Set(
							data?.sets
								.filter((set) => !cubeType || set.cube_type === cubeType)
								.map((set) => set.algo_type),
						),
					]
						.sort()
						.map((set) => (
							<option key={set} value={set}>
								{set}
							</option>
						))}
				</NativeSelect>
				<NativeSelect
					aria-label="Published status filter"
					value={status}
					onChange={(event) => {
						setStatus(event.target.value as typeof status);
						setPage(0);
					}}
				>
					<option value="all">All statuses</option>
					<option value="published">Published</option>
					<option value="unpublished">Unpublished</option>
				</NativeSelect>
			</div>
			{error && (
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
					<Button onClick={refresh}>Retry</Button>
				</Alert>
			)}
			{loading ? (
				<div role="status" aria-label="Loading algorithms" className="space-y-3">
					{[0, 1, 2, 3, 4].map((key) => (
						<Skeleton key={key} aria-hidden className="h-12 w-full" />
					))}
				</div>
			) : (
				!error &&
				data && (
					<>
						<div className="border-text/15 overflow-x-auto rounded border">
							<Table>
								<TableHeader>
									<TableRow>
										{['ID', 'Name', 'Cube / set', 'Status', ''].map((label) => (
											<TableHead key={label}>{label}</TableHead>
										))}
									</TableRow>
								</TableHeader>
								<TableBody>
									{data.items.map((algorithm) => (
										<TableRow
											className="border-text/15 border-b last:border-0"
											key={algorithm.id}
										>
											<TableCell className="font-mono">
												{algorithm.id}
											</TableCell>
											<TableCell>{algorithm.name}</TableCell>
											<TableCell>
												{algorithm.cube_type} / {algorithm.algo_type}
											</TableCell>
											<TableCell>
												{algorithm.active ? 'Published' : 'Unpublished'}
											</TableCell>
											<TableCell>
												<Button
													variant="secondary"
													onClick={() =>
														setEditor({
															initial: algorithm,
															revision: data.revision,
														})
													}
													aria-label={`Edit ${algorithm.id}`}
												>
													Edit
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							{!data.items.length && <Empty text="No matching algorithms." />}
						</div>
						<PageControls
							page={page}
							totalPages={Math.ceil(data.total / 25)}
							hasMore={(page + 1) * 25 < data.total}
							onPrevious={() => setPage(page - 1)}
							onNext={() => setPage(page + 1)}
						/>
					</>
				)
			)}
			<Dialog
				open={importing}
				onOpenChange={(open) => {
					if (!importBusy) setImporting(open);
				}}
			>
				<DialogContent width={900} hideCloseButton={importBusy} closeOnEscape={!importBusy}>
					<DialogTitle className="mb-4 text-xl font-semibold">
						Import trainer CSV
					</DialogTitle>
					<TrainerCsvImport
						onImported={refresh}
						onBusyChange={setImportBusy}
						onClose={() => setImporting(false)}
					/>
				</DialogContent>
			</Dialog>
			<Dialog
				open={!!editor}
				onOpenChange={(open) => {
					if (!open) setEditor(null);
				}}
			>
				{editor && (
					<DialogContent className="max-w-3xl">
						<DialogTitle>
							{editor.initial ? 'Edit algorithm' : 'New algorithm'}
						</DialogTitle>
						<TrainerAlgorithmEditor
							{...editor}
							onSaved={() => {
								setEditor(null);
								refresh();
							}}
							onCancel={() => setEditor(null)}
						/>
					</DialogContent>
				)}
			</Dialog>
		</div>
	);
}
