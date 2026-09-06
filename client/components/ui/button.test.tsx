import CopyText from '@/components/common/CopyText';
import {Button} from '@/components/ui/button';
import {Dialog, DialogTrigger} from '@/components/ui/dialog';
import {DropdownMenu, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {Link, MemoryRouter} from 'react-router-dom';

describe('button composition', () => {
	it('renders a native non-submitting button without a layout wrapper', () => {
		const html = renderToStaticMarkup(<Button>Save</Button>);
		expect(html).toMatch(/^<button\b/);
		expect(html).toContain('type="button"');
		expect(html).toMatch(/>Save<\/button>$/);
	});

	it('preserves submit, disabled, and busy attributes', () => {
		const html = renderToStaticMarkup(
			<Button type="submit" disabled aria-busy>
				Saving
			</Button>,
		);
		expect(html).toContain('type="submit"');
		expect(html).toContain('disabled=""');
		expect(html).toContain('aria-busy="true"');
	});

	it('styles a router link while preserving its link semantics', () => {
		const html = renderToStaticMarkup(
			<MemoryRouter>
				<Button asChild>
					<Link to="/sessions">Sessions</Link>
				</Button>
			</MemoryRouter>,
		);
		expect(html).toMatch(/^<a\b/);
		expect(html).toContain('href="/sessions"');
		expect(html).not.toContain('<button');
		expect(html).not.toContain('type="button"');
		expect(html).not.toContain('role="button"');
	});

	it('marks disabled external links unavailable and removes them from tab order', () => {
		const html = renderToStaticMarkup(
			<Button asChild disabled>
				<a href="https://example.com" target="_blank">
					Connect
				</a>
			</Button>,
		);
		expect(html).toMatch(/^<a\b/);
		expect(html).toContain('aria-disabled="true"');
		expect(html).toContain('tabindex="-1"');
		expect(html).toContain('target="_blank"');
		expect(html).not.toContain(' disabled=""');
	});

	it('places Radix trigger attributes on the interactive element', () => {
		const dialog = renderToStaticMarkup(
			<Dialog>
				<DialogTrigger asChild>
					<Button>Open dialog</Button>
				</DialogTrigger>
			</Dialog>,
		);
		const menu = renderToStaticMarkup(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button>Open menu</Button>
				</DropdownMenuTrigger>
			</DropdownMenu>,
		);
		for (const html of [dialog, menu]) {
			expect(html).toMatch(/^<button\b/);
			expect(html).toContain('aria-expanded="false"');
			expect(html).toContain('data-state="closed"');
		}
	});

	it('retains copy labels passed through buttonProps', () => {
		const html = renderToStaticMarkup(
			<CopyText
				text="R U R'"
				buttonProps={{children: 'Copy scramble', variant: 'secondary'}}
			/>,
		);
		expect(html).toMatch(/^<button\b/);
		expect(html).toContain('Copy scramble');
		expect(html).toContain('role="status"');
	});
});
