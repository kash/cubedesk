import Checkbox from '@/components/common/Checkbox';
import CopyText from '@/components/common/CopyText';
import {Button} from '@/components/ui/button';
import {Solve} from '@/types/solve';
import {getCubeTypeName} from '@/util/cubes/util';
import {getTimeString} from '@/util/time';
import dayjs from 'dayjs';
import fileDownload from 'js-file-download';
import {Download} from 'phosphor-react';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
	time?: number;
	description: string;
	solves: Solve[];
	reverseOrder?: boolean;
}

export default function SolvesText(props: Props) {
	const {t, i18n} = useTranslation();
	const {solves, reverseOrder, description, time} = props;

	const [includeScramble, setIncludeScramble] = useState(true);
	const [wrapText, setWrapText] = useState(false);
	const [includeDate, setIncludeDate] = useState(false);
	const [includeCubeType, setIncludeCubeType] = useState(false);
	const [includeNotes, setIncludeNotes] = useState(false);

	function getSolveRows(csv?: boolean) {
		const lines: string[] = [];
		for (let i = 0; i < solves.length; i += 1) {
			let index = i;
			let displayIndex = solves.length - i;
			if (reverseOrder) {
				index = solves.length - i - 1;
				displayIndex = i + 1;
			}

			const solve = solves[index];
			const cubeType = getCubeTypeName(solve.cube_type);
			let time = getTimeString(solve);
			if (!solve.dnf && solve.plus_two) {
				time += '+';
			}

			const parts: string[] = [];
			if (csv) {
				parts.push(String(displayIndex));
			} else {
				parts.push(displayIndex + '.');
			}

			parts.push(time);

			const add: string[] = [];
			if (includeScramble) add.push(solve.scramble);
			if (includeCubeType) add.push(cubeType ?? solve.cube_type);
			if (includeDate) {
				add.push(new Date(solve.ended_at ?? 0).toLocaleString(i18n.language));
			}
			if (includeNotes) add.push(solve.notes ?? '');

			for (const a of add) {
				if (!csv) {
					parts.push('  ');
				}
				parts.push(a);
			}

			const dec = csv ? ',' : ' ';
			lines.push(parts.join(dec));
		}

		return lines;
	}

	function downloadCsv() {
		const keys = [t('solves.export.index'), t('solves.export.time')];
		if (includeScramble) keys.push(t('solves.export.scramble'));
		if (includeDate) keys.push(t('solves.export.date'));
		if (includeNotes) keys.push(t('solves.export.notes'));
		if (includeCubeType) keys.push(t('solves.export.cubeType'));

		let fileName = description.replace(/-/g, '');
		fileName = fileName.replace(/[^a-zA-Z\d\s]/g, '');
		fileName = fileName.replace(/\s/g, '-');
		fileName = fileName.toLowerCase();

		const lines = [keys.join(','), ...getSolveRows(true)];

		const encodedUri = lines.join('\r\n');
		const filename = `cubedesk_${fileName}.csv`;

		fileDownload(encodedUri, filename);
	}

	function getSolvesText() {
		const lines: string[] = [];
		lines.push(t('solves.export.generatedOn', {date: dayjs().format('YYYY-MM-DD')}));

		let desc = description;
		if (time && getTimeString(time)) {
			desc += `: ${getTimeString(time)}`;
		}

		lines.push(desc);
		lines.push('');
		lines.push(t('solves.export.solvesHeading'));
		lines.push(...getSolveRows());

		return lines.join('\n');
	}

	const solvesText = getSolvesText();
	const textClasses = [
		'box-border',
		'mt-2.5',
		'mb-[15px]',
		'max-h-[600px]',
		'overflow-x-auto',
		'rounded-[5px]',
		'bg-module',
		'p-[15px]',
		"font-['Roboto_Mono',monospace]",
		'text-base',
		'text-text',
		wrapText ? 'whitespace-pre-wrap' : 'whitespace-pre',
	];

	return (
		<div>
			<div>
				<div className="flex flex-col">
					<div className="w-1/2">
						<Checkbox
							text={t('solves.export.includeScramble')}
							onCheckedChange={() => setIncludeScramble(!includeScramble)}
							checked={includeScramble}
						/>
					</div>
					<div className="w-1/2">
						<Checkbox
							text={t('solves.export.includeCubeType')}
							onCheckedChange={() => setIncludeCubeType(!includeCubeType)}
							checked={includeCubeType}
						/>
					</div>
					<div className="w-1/2">
						<Checkbox
							text={t('solves.export.includeDate')}
							onCheckedChange={() => setIncludeDate(!includeDate)}
							checked={includeDate}
						/>
					</div>
					<div className="w-1/2">
						<Checkbox
							text={t('solves.export.includeNotes')}
							onCheckedChange={() => setIncludeNotes(!includeNotes)}
							checked={includeNotes}
						/>
					</div>
					<div className="w-1/2">
						<Checkbox
							text={t('solves.export.wrapText')}
							onCheckedChange={() => setWrapText(!wrapText)}
							checked={wrapText}
						/>
					</div>
				</div>
				<div className={textClasses.join(' ')}>{solvesText}</div>
			</div>
			<div className="flex flex-row items-center gap-[15px]">
				<CopyText
					labels={{
						copy: t('common.copyText'),
						copied: t('common.copied'),
						error: t('common.copyError'),
					}}
					text={solvesText}
					buttonProps={{
						variant: 'default',
						children: t('common.copyText'),
					}}
				/>
				<Button variant="secondary" onClick={downloadCsv}>
					{t('solves.export.downloadCsv')}
					<Download weight="bold" />
				</Button>
			</div>
		</div>
	);
}
