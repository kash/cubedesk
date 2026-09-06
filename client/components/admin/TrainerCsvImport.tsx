import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible';
import {Input} from '@/components/ui/input';
import {MAX_CSV_BYTES} from '@/shared/trainer/catalog';
import {trpc} from '@/util/trpc';
import {CaretDown} from 'phosphor-react';
import React, {useEffect, useState} from 'react';

type Preview = Awaited<ReturnType<typeof trpc.adminTrainer.previewImport.mutate>>;

export default function TrainerCsvImport({
	onImported,
	onBusyChange,
	onClose,
}: {
	onImported: () => void;
	onBusyChange: (busy: boolean) => void;
	onClose: () => void;
}) {
	const [csv, setCsv] = useState('');
	const [preview, setPreview] = useState<Preview | null>(null);
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState('');
	const [result, setResult] = useState('');
	useEffect(() => {
		onBusyChange(busy);
	}, [busy, onBusyChange]);

	async function readFile(file?: File) {
		setPreview(null);
		setCsv('');
		setError('');
		setResult('');
		if (!file) return;
		if (file.size > MAX_CSV_BYTES) {
			setError('Choose a CSV file no larger than 5 MiB.');
			return;
		}
		setBusy(true);
		try {
			setCsv(await file.text());
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setBusy(false);
		}
	}
	async function previewFile() {
		setBusy(true);
		setError('');
		setPreview(null);
		setResult('');
		try {
			setPreview(await trpc.adminTrainer.previewImport.mutate({csv}));
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setBusy(false);
		}
	}
	async function confirm() {
		if (!preview) return;
		setBusy(true);
		setError('');
		try {
			const output = await trpc.adminTrainer.confirmImport.mutate({
				csv,
				fingerprint: preview.fingerprint,
			});
			setResult(
				`Import complete: ${output.created} added, ${output.updated} updated, ${output.unchanged} unchanged. ${output.total} algorithms in the catalog.`,
			);
			setPreview(null);
			onImported();
		} catch (error) {
			setError((error as Error).message);
			setPreview(null);
		} finally {
			setBusy(false);
		}
	}
	return (
		<section className="space-y-4">
			<p className="text-text/60 text-sm">
				Match records by ID. Algorithms absent from the file stay unchanged. Preview all
				changes before importing. Legacy Pro columns are ignored.
			</p>
			<p className="text-text/60 text-sm">
				Required columns: id, name, cube_type, algo_type. Optional columns default to empty
				text, published status, and zero rotation when omitted. Blank fields clear existing
				values.
			</p>
			<Input
				type="file"
				accept=".csv,text/csv"
				aria-label="Trainer CSV file"
				disabled={busy}
				onChange={(event) => void readFile(event.target.files?.[0])}
			/>
			<Button disabled={busy || !csv} onClick={() => void previewFile()}>
				{busy ? 'Working…' : 'Preview import'}
			</Button>
			{error && (
				<Alert variant="destructive">
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{result && (
				<Alert>
					<AlertDescription>{result}</AlertDescription>
				</Alert>
			)}
			{preview && (
				<div className="space-y-4">
					<p>
						{preview.created} new · {preview.updated} changed · {preview.unchanged}{' '}
						unchanged
					</p>
					{preview.errors.length > 0 && (
						<Alert variant="destructive">
							<AlertTitle>Fix these errors before importing:</AlertTitle>
							<ul className="max-h-48 overflow-auto">
								{preview.errors.map((issue, i) => (
									<li key={i}>
										Row {issue.row}: {issue.message}
									</li>
								))}
							</ul>
						</Alert>
					)}
					{preview.warnings.length > 0 && (
						<Alert>
							<AlertTitle>
								Warnings — these records will still be imported:
							</AlertTitle>
							<ul className="max-h-48 overflow-auto">
								{preview.warnings.map((issue, i) => (
									<li key={i}>
										Row {issue.row}: {issue.message}
									</li>
								))}
							</ul>
						</Alert>
					)}
					<div className="max-h-96 space-y-2 overflow-auto">
						{preview.changes
							.filter((change) => change.kind !== 'unchanged')
							.map((change) => (
								<Collapsible
									key={change.id}
									className="border-text/15 rounded border p-3"
								>
									<CollapsibleTrigger asChild>
										<Button
											variant="ghost"
											className="group w-full justify-between"
										>
											{change.id} — {change.kind}
											<CaretDown
												aria-hidden
												className="transition-transform group-data-[state=open]:rotate-180"
											/>
										</Button>
									</CollapsibleTrigger>
									<CollapsibleContent>
										{change.fields.map((field) => (
											<div key={field.field} className="mt-3 text-sm">
												<p className="font-semibold">{field.field}</p>
												<div className="grid gap-2 sm:grid-cols-2">
													<pre className="text-text/60 break-words whitespace-pre-wrap">
														Before:{' '}
														{field.before === null
															? '(new)'
															: String(field.before) || '(empty)'}
													</pre>
													<pre className="break-words whitespace-pre-wrap">
														After: {String(field.after) || '(empty)'}
													</pre>
												</div>
											</div>
										))}
									</CollapsibleContent>
								</Collapsible>
							))}
					</div>
					<Button
						disabled={busy || !!preview.errors.length}
						onClick={() => void confirm()}
					>
						Confirm import of {preview.total} algorithms
					</Button>
				</div>
			)}
			<Button variant="secondary" disabled={busy} onClick={onClose}>
				{result ? 'Done' : 'Cancel'}
			</Button>
		</section>
	);
}
