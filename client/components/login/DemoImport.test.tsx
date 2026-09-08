import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {DemoImportProvider, DemoSolveImportDialog, useDemoImport} from './DemoImport';
import {trpc} from '@/util/trpc';
import {Solve} from '@/types/solve';

let mockButtons: Record<string, {onClick: () => Promise<void> | void; disabled?: boolean}>;
let mockDialogProps: Record<string, unknown>;
jest.mock('@/components/ui/button', () => ({
	Button: ({children, ...props}) => {
		mockButtons[String(children)] = {onClick: props.onClick, disabled: props.disabled};
		return <button>{children}</button>;
	},
}));
jest.mock('@/components/ui/combobox', () => ({
	Combobox: ({options}) => (
		<select>
			{options.map((option) => (
				<option key={option.value}>{option.text}</option>
			))}
		</select>
	),
}));
jest.mock('@/components/ui/input', () => ({Input: (props) => <input {...props} />}));
jest.mock('@/components/ui/dialog', () => ({
	Dialog: ({children}) => <div>{children}</div>,
	DialogContent: ({children, ...props}) => {
		mockDialogProps = props;
		return <div>{children}</div>;
	},
	DialogHeader: ({title, description}) => (
		<header>
			{title}
			<p>{description}</p>
		</header>
	),
}));
jest.mock('@/util/cubes/util', () => ({
	getCubeTypeName: (id) => ({'333': '3x3', '222': '2x2'})[id],
}));
jest.mock('@/util/trpc', () => ({
	trpc: {
		demoSolve: {import: {mutate: jest.fn()}},
		session: {list: {query: jest.fn()}},
	},
}));
jest.mock('@/db/solves/init', () => ({getSolveDb: () => ({find: () => []})}));
jest.mock('@/db/lokijs', () => ({stripLokiJsMetadata: (solve) => solve}));

const solve = {
	id: '8f16a418-475a-4a30-a95a-5a283eea2242',
	raw_time: 12.5,
	time: 14.5,
	cube_type: '333',
	scramble: 'R U',
	started_at: 1000,
	ended_at: 13500,
	dnf: false,
	plus_two: true,
	notes: 'Edited note',
	inspection_time: 3,
	is_smart_cube: false,
	smart_turns: null,
	smart_turn_count: null,
	smart_put_down_time: null,
	demo_mode: true,
	user_id: 'demo',
	session_id: 'demo',
} as Solve;
const mutation = trpc.demoSolve.import.mutate as jest.Mock;
beforeEach(() => {
	jest.clearAllMocks();
	mockButtons = {};
});

it('shows a compact mixed-puzzle summary and no destination picker for signup', () => {
	const html = renderToStaticMarkup(
		<DemoSolveImportDialog
			pending={{mode: 'signup', redirect: '/', solves: [solve, {...solve, cube_type: '222'}]}}
			onComplete={() => {}}
		/>,
	);
	expect(html).toContain('2 solves · 1 × 3x3, 1 × 2x2');
	expect(html).toContain('default session');
	expect(html).not.toContain('<select');
	expect(mockDialogProps).toMatchObject({hideCloseButton: true, closeOnEscape: false});
});

it('offers a named new session on login', () => {
	const html = renderToStaticMarkup(
		<DemoSolveImportDialog
			pending={{mode: 'login', redirect: '/', solves: [solve]}}
			onComplete={() => {}}
		/>,
	);
	expect(html).toContain('Create a new session');
	expect(html).toContain('Demo 3x3 Session');
});

it('does not import until accepted, then saves into the signup default session before completing', async () => {
	const complete = jest.fn();
	renderToStaticMarkup(
		<DemoSolveImportDialog
			pending={{mode: 'signup', redirect: '/', solves: [solve]}}
			onComplete={complete}
		/>,
	);
	expect(mutation).not.toHaveBeenCalled();
	mutation.mockImplementation(async () => {
		expect(complete).not.toHaveBeenCalled();
		return {sessionId: 'session', count: 1};
	});
	await mockButtons['Import solves'].onClick();
	expect(mutation).toHaveBeenCalledWith({
		destination: {kind: 'new', name: 'New Session'},
		solves: [expect.objectContaining({id: solve.id, notes: 'Edited note', plus_two: true})],
	});
	expect(mutation.mock.calls[0][0].solves[0]).not.toHaveProperty('user_id');
	expect(complete).toHaveBeenCalledTimes(1);
});

it('discards without sending solves to the account', () => {
	const complete = jest.fn();
	renderToStaticMarkup(
		<DemoSolveImportDialog
			pending={{mode: 'signup', redirect: '/', solves: [solve]}}
			onComplete={complete}
		/>,
	);
	mockButtons['Discard solves'].onClick();
	expect(mutation).not.toHaveBeenCalled();
	expect(complete).toHaveBeenCalledTimes(1);
});

it('keeps the same request for retry after a lost response and does not redirect on failure', async () => {
	const complete = jest.fn();
	renderToStaticMarkup(
		<DemoSolveImportDialog
			pending={{mode: 'signup', redirect: '/', solves: [solve]}}
			onComplete={complete}
		/>,
	);
	mutation
		.mockRejectedValueOnce(new Error('Lost response'))
		.mockResolvedValueOnce({sessionId: 'session', count: 1});
	await mockButtons['Import solves'].onClick();
	expect(complete).not.toHaveBeenCalled();
	await mockButtons['Import solves'].onClick();
	expect(mutation.mock.calls[1][0]).toBe(mutation.mock.calls[0][0]);
	expect(complete).toHaveBeenCalledTimes(1);
});

it('skips the prompt and preserves the redirect when no demo solves exist', () => {
	let complete: ReturnType<typeof useDemoImport>['complete'];
	function Probe() {
		complete = useDemoImport().complete;
		return null;
	}
	const originalWindow = globalThis.window;
	globalThis.window = {location: {href: ''}} as Window & typeof globalThis;
	try {
		renderToStaticMarkup(
			<DemoImportProvider>
				<Probe />
			</DemoImportProvider>,
		);
		complete!({mode: 'login', redirect: '/sessions'});
		expect(window.location.href).toBe('/sessions');
		expect(mutation).not.toHaveBeenCalled();
	} finally {
		globalThis.window = originalWindow;
	}
});
