import CheckboxField from '@/components/common/Checkbox';
import Radio from '@/components/common/Radio';
import {Checkbox} from '@/components/ui/checkbox';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

it('associates each checkbox label with a unique disabled control', () => {
	const html = renderToStaticMarkup(
		<>
			{[1, 2].map((key) => (
				<CheckboxField
					key={key}
					text="Include scramble"
					checked
					disabled
					onCheckedChange={() => {}}
				/>
			))}
		</>,
	);
	const ids = [...html.matchAll(/<button[^>]*id="([^"]+)"/g)].map((match) => match[1]);
	expect(ids).toHaveLength(2);
	expect(new Set(ids).size).toBe(2);
	for (const id of ids) expect(html).toContain(`for="${id}"`);
	expect(html).toContain('role="checkbox"');
	expect(html).toContain('aria-checked="true"');
	expect(html).toContain('disabled=""');
});

it('exposes mixed state for an indeterminate checkbox', () => {
	const html = renderToStaticMarkup(<Checkbox checked="indeterminate" aria-label="Select all" />);
	expect(html).toContain('aria-checked="mixed"');
	expect(html).toContain('data-state="indeterminate"');
});

it('selects radios by their values and scopes labels across repeated groups', () => {
	const html = renderToStaticMarkup(
		<>
			{[1, 2].map((key) => (
				<Radio
					key={key}
					name="rotation"
					legend="Rotation"
					value={90}
					disabled
					onValueChange={() => {}}
					options={[
						{id: 'quarter-turn', value: 90, label: '90°'},
						{id: 'half-turn', value: 180, label: '180°'},
					]}
				/>
			))}
		</>,
	);
	const buttons = html.match(/<button\b[^>]*>/g) || [];
	expect(buttons).toHaveLength(4);
	expect(buttons.filter((button) => button.includes('aria-checked="true"'))).toHaveLength(2);
	const ids = buttons.map((button) => button.match(/id="([^"]+)"/)![1]);
	expect(new Set(ids).size).toBe(4);
	for (const id of ids) expect(html).toContain(`for="${id}"`);
	for (const button of buttons) expect(button).toContain('disabled=""');
	expect(html).toContain('role="radiogroup"');
	expect(html).toContain('aria-label="Rotation"');
});
