import {Button} from '@/components/ui/button';
import * as Sentry from '@sentry/browser';
import React, {ErrorInfo, ReactNode} from 'react';

interface Props {
	children: ReactNode;
}

interface State {
	error: Error | null;
}

// The app previously had no error boundary anywhere, so any uncaught render error (see #193)
// unmounted the entire React tree with no fallback, leaving a blank/grey page that only a full
// refresh could recover from. This catches those errors, reports them to Sentry so the exact
// trigger can be diagnosed, and shows a recoverable screen instead of a silent crash.
export default class ErrorBoundary extends React.Component<Props, State> {
	state: State = {error: null};

	static getDerivedStateFromError(error: Error): State {
		return {error};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		Sentry.captureException(error, {
			contexts: {
				react: {componentStack: errorInfo.componentStack},
			},
		});
	}

	render() {
		if (this.state.error) {
			return (
				<div className="bg-background text-text flex h-screen w-screen flex-col items-center justify-center gap-4 p-8 text-center">
					<h1 className="text-2xl font-semibold">Something went wrong</h1>
					<p className="text-text/70 max-w-md">
						An unexpected error occurred. If you were in the middle of a solve, it may
						not have been saved. Reloading the page should fix it.
					</p>
					<Button variant="default" onClick={() => window.location.reload()} size="lg">
						{'Reload page'}
					</Button>
				</div>
			);
		}

		return this.props.children;
	}
}
