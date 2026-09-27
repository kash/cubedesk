import {useDemoImport} from '@/components/login/DemoImport';
import {AuthFormContext, AuthView} from '@/components/login/AuthFormContext';
import Forgot from '@/components/login/Forgot';
import Login from '@/components/login/Login';
import SignUp from '@/components/login/SignUp';
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from '@/components/ui/dialog';
import {getRedirectLink} from '@/util/auth/login';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

export default function AuthDialog({
	children,
	view = 'login',
}: {
	children: React.ReactElement;
	view?: AuthView;
}) {
	const {t} = useTranslation();
	const {pending} = useDemoImport();
	const [open, setOpen] = useState(false);
	const [activeView, setActiveView] = useState(view);
	const [redirectTo, setRedirectTo] = useState('/');

	return (
		<Dialog
			open={open && !pending}
			onOpenChange={(open) => {
				setOpen(open);
				if (open) {
					setActiveView(view);
					setRedirectTo(
						['/login', '/signup', '/forgot'].includes(window.location.pathname)
							? getRedirectLink()
							: window.location.pathname +
									window.location.search +
									window.location.hash,
					);
				}
			}}
		>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent
				closeLabel={t('common.closeDialog')}
				width={440}
				aria-describedby={undefined}
			>
				<DialogHeader
					title={
						{
							login: t('auth.logIn'),
							signup: t('auth.signUp'),
							forgot: t('auth.resetPassword'),
						}[activeView]
					}
				/>
				<AuthFormContext.Provider value={{onNavigate: setActiveView, redirectTo}}>
					{activeView === 'login' ? (
						<Login />
					) : activeView === 'signup' ? (
						<SignUp />
					) : (
						<Forgot />
					)}
				</AuthFormContext.Provider>
			</DialogContent>
		</Dialog>
	);
}
