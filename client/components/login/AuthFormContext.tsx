import React, {createContext, useContext} from 'react';
import {Link} from 'react-router-dom';

export type AuthView = 'login' | 'signup' | 'forgot';

export const AuthFormContext = createContext<{
	onNavigate: (view: AuthView) => void;
	redirectTo: string;
} | null>(null);

export function useAuthForm() {
	return useContext(AuthFormContext);
}

export function AuthFormLink({
	view,
	to,
	children,
	className,
}: {
	view: AuthView;
	to: string;
	children: React.ReactNode;
	className?: string;
}) {
	const auth = useAuthForm();
	if (auth) {
		return (
			<button type="button" className={className} onClick={() => auth.onNavigate(view)}>
				{children}
			</button>
		);
	}
	return (
		<Link to={to} className={className}>
			{children}
		</Link>
	);
}
