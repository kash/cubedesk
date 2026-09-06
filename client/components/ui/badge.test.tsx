import {Badge, badgeVariants} from '@/components/ui/badge';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

describe('Badge', () => {
	it('renders a non-interactive span with neutral default styling', () => {
		const html = renderToStaticMarkup(<Badge>3x3</Badge>);
		expect(html).toMatch(/^<span\b/);
		expect(html).toContain('data-slot="badge"');
		expect(html).toContain('bg-button');
		expect(html).not.toContain('tabindex');
	});

	it.each([
		['sm', 'h-6'],
		['default', 'h-7'],
		['button', 'h-9'],
	] as const)('provides the %s size', (size, height) => {
		expect(badgeVariants({size})).toContain(height);
	});

	it.each(['success', 'warning', 'destructive', 'info'] as const)(
		'makes %s text follow the custom theme',
		(variant) => {
			const classes = badgeVariants({variant});
			expect(classes).toContain('var(--theme-text)');
			expect(classes).not.toContain('shadow');
		},
	);

	it('keeps unfilled labels without background styling', () => {
		expect(badgeVariants({variant: 'unfilled'})).not.toContain('bg-');
		expect(badgeVariants({variant: 'outline'})).toContain('border-tmo-module/15');
	});

	it('preserves icons, tooltips, and accessibility attributes', () => {
		const html = renderToStaticMarkup(
			<Badge title="Smart cube" aria-label="Bluetooth cube" role="status">
				3x3
				<svg aria-hidden="true" />
			</Badge>,
		);
		expect(html).toContain('title="Smart cube"');
		expect(html).toContain('aria-label="Bluetooth cube"');
		expect(html).toContain('role="status"');
		expect(html).toContain('<svg');
	});

	it('allows timer alerts to override height and wrap long text', () => {
		const html = renderToStaticMarkup(
			<Badge className="h-auto whitespace-normal">A long notification</Badge>,
		);
		expect(html).toContain('h-auto');
		expect(html).toContain('whitespace-normal');
		expect(html).not.toContain('h-7');
		expect(html).not.toContain('whitespace-nowrap');
	});
});
