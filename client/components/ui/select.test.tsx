/** @jest-environment jsdom */

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from './select';
import React, {act} from 'react';
import {createRoot, Root} from 'react-dom/client';

function TestSelect({value}: {value: string}) {
	return (
		<Select value={value}>
			<SelectTrigger aria-label="Event">
				<SelectValue placeholder="Choose an event" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="333">3x3</SelectItem>
				<SelectItem value="222">2x2</SelectItem>
			</SelectContent>
		</Select>
	);
}

// Chrome Translate replaces text nodes with elements without informing React.
function translateLabel(container: HTMLElement) {
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
	const text = walker.nextNode()!;
	expect(text.textContent).toBe('3x3');
	const translation = document.createElement('font');
	translation.textContent = 'Translated 3x3';
	text.parentNode!.replaceChild(translation, text);
}

describe('translated select labels', () => {
	let container: HTMLDivElement;
	let root: Root;
	let errors: unknown[];

	beforeEach(() => {
		(globalThis as typeof globalThis & {IS_REACT_ACT_ENVIRONMENT: boolean}).IS_REACT_ACT_ENVIRONMENT = true;
		container = document.createElement('div');
		document.body.appendChild(container);
		errors = [];
		root = createRoot(container, {onUncaughtError: (error) => errors.push(error)});
	});

	afterEach(async () => {
		await act(async () => root.unmount());
		container.remove();
		delete (globalThis as typeof globalThis & {IS_REACT_ACT_ENVIRONMENT?: boolean}).IS_REACT_ACT_ENVIRONMENT;
	});

	it('changes selection after the portalled label has been translated', async () => {
		await act(async () => root.render(<TestSelect value="333" />));
		translateLabel(container.querySelector('[role="combobox"]')!);

		await act(async () => root.render(<TestSelect value="222" />));

		expect(errors).toEqual([]);
		expect(container.querySelector('[role="combobox"]')?.textContent).toBe('2x2');
	});

	it('clears a translated selection and displays the placeholder', async () => {
		await act(async () => root.render(<TestSelect value="333" />));
		translateLabel(container.querySelector('[role="combobox"]')!);

		await act(async () => root.render(<TestSelect value="" />));

		expect(errors).toEqual([]);
		expect(container.querySelector('[role="combobox"]')?.textContent).toBe('Choose an event');
	});

	it('unmounts a select whose portalled label has been translated', async () => {
		await act(async () => root.render(<TestSelect value="333" />));
		translateLabel(container.querySelector('[role="combobox"]')!);

		await act(async () => root.render(null));

		expect(errors).toEqual([]);
		expect(container.childNodes).toHaveLength(0);
	});
});
