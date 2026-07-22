import Button from '@/components/common/Button';
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
				<div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-background p-8 text-center text-text">
					<h1 className="text-2xl font-semibold">Something went wrong</h1>
					<p className="max-w-md text-text/70">
						An unexpected error occurred. If you were in the middle of a solve, it may not have been saved.
						Reloading the page should fix it.
					</p>
					<Button primary large text="Reload page" onClick={() => window.location.reload()} />
				</div>
			);
		}

		return this.props.children;
	}
}
