import {Field, FieldDescription, FieldError, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group';
import {AutosizeTextarea, Textarea} from '@/components/ui/textarea';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

function ExampleField() {
	const id = React.useId();
	return (
		<Field>
			<FieldLabel htmlFor={id}>Duration</FieldLabel>
			<Input
				id={id}
				name="duration"
				type="number"
				step={0.1}
				disabled
				defaultValue={3}
				aria-invalid
				aria-describedby={`${id}-description ${id}-error`}
			/>
			<FieldDescription id={`${id}-description`}>Duration in seconds</FieldDescription>
			<FieldError id={`${id}-error`}>Choose a positive duration</FieldError>
		</Field>
	);
}

describe('text field composition', () => {
	it('links labels, help, and errors without duplicate IDs across field instances', () => {
		const html = renderToStaticMarkup(
			<>
				<ExampleField />
				<ExampleField />
			</>,
		);
		const ids = [...html.matchAll(/<input[^>]* id="([^"]+)"/g)].map((match) => match[1]);
		expect(ids).toHaveLength(2);
		expect(new Set(ids).size).toBe(2);
		for (const id of ids) {
			expect(html).toContain(`for="${id}"`);
			expect(html).toContain(`aria-describedby="${id}-description ${id}-error"`);
			expect(html).toContain(`id="${id}-description"`);
			expect(html).toContain(`id="${id}-error"`);
		}
		expect(html).toContain('Choose a positive duration');
		expect(html).toContain('Duration in seconds');
		expect(html).toContain('role="alert"');
	});

	it('preserves native disabled, numeric, and validation attributes on the control', () => {
		const html = renderToStaticMarkup(<ExampleField />);
		const input = html.match(/<input\b[^>]*>/)?.[0];
		expect(input).toContain('disabled=""');
		expect(input).toContain('type="number"');
		expect(input).toContain('step="0.1"');
		expect(input).toContain('name="duration"');
		expect(input).toContain('value="3"');
		expect(input).toContain('aria-invalid="true"');
	});

	it.each([Textarea, AutosizeTextarea])(
		'preserves text and maximum length in textarea variants',
		(Component) => {
			const html = renderToStaticMarkup(
				<Component
					name="notes"
					defaultValue="R U R′"
					maxLength={300}
					disabled
					aria-label="Notes"
				/>,
			);
			expect(html).toMatch(/^<textarea\b/);
			expect(html).toContain('name="notes"');
			expect(html).toContain('maxLength="300"');
			expect(html).toContain('disabled=""');
			expect(html).toContain('aria-label="Notes"');
			expect(html).toContain('>R U R′</textarea>');
		},
	);

	it('keeps search icons decorative and the input named', () => {
		const html = renderToStaticMarkup(
			<InputGroup>
				<InputGroupAddon>
					<svg />
				</InputGroupAddon>
				<InputGroupInput aria-label="Search users" />
			</InputGroup>,
		);
		expect(html).toMatch(/<span[^>]*aria-hidden="true"/);
		expect(html).toMatch(/<input[^>]*aria-label="Search users"/);
	});

	it('does not announce an empty error', () => {
		expect(renderToStaticMarkup(<FieldError>{''}</FieldError>)).toBe('');
	});
});
