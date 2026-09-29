import {useTranslation} from 'react-i18next';
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
	const {t} = useTranslation();
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
			setError(t('admin.trainer.fileTooLarge'));
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
				t('admin.trainer.importComplete', {
					created: output.created,
					updated: output.updated,
					unchanged: output.unchanged,
					total: output.total,
				}),
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
			<p className="text-text/60 text-sm">{t('admin.trainer.importInstructions')}</p>
			<p className="text-text/60 text-sm">{t('admin.trainer.requiredColumns')}</p>
			<Input
				type="file"
				accept=".csv,text/csv"
				aria-label={t('admin.trainerCsvFile')}
				disabled={busy}
				onChange={(event) => void readFile(event.target.files?.[0])}
			/>
			<Button disabled={busy || !csv} onClick={() => void previewFile()}>
				{busy ? t('common.working') : t('admin.trainer.previewImport')}
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
					<p>{t('admin.trainer.previewSummary', preview)}</p>
					{preview.errors.length > 0 && (
						<Alert variant="destructive">
							<AlertTitle>{t('common.fixTheseErrorsBeforeImporting')}</AlertTitle>
							<ul className="max-h-48 overflow-auto">
								{preview.errors.map((issue, i) => (
									<li key={i}>{t('admin.trainer.issueAtRow', issue)}</li>
								))}
							</ul>
						</Alert>
					)}
					{preview.warnings.length > 0 && (
						<Alert>
							<AlertTitle>{t('admin.trainer.importWarningsTitle')}</AlertTitle>
							<ul className="max-h-48 overflow-auto">
								{preview.warnings.map((issue, i) => (
									<li key={i}>{t('admin.trainer.issueAtRow', issue)}</li>
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
														{t('admin.trainer.beforeValue', {
															value:
																field.before === null
																	? t('admin.trainer.newValue')
																	: String(field.before) ||
																		t(
																			'admin.trainer.emptyValue',
																		),
														})}
													</pre>
													<pre className="break-words whitespace-pre-wrap">
														{t('admin.trainer.afterValue', {
															value:
																String(field.after) ||
																t('admin.trainer.emptyValue'),
														})}
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
						{t('admin.trainer.confirmImport', {count: preview.total})}
					</Button>
				</div>
			)}
			<Button variant="secondary" disabled={busy} onClick={onClose}>
				{result ? t('common.done') : t('common.cancel')}
			</Button>
		</section>
	);
}
