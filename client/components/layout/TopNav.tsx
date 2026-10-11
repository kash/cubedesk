import {LogoLockup} from '@/components/common/Logo';
import AuthDialog from '@/components/login/AuthDialog';
import {Button} from '@/components/ui/button';
import {useTheme} from '@/util/hooks/useTheme';
import React from 'react';

export default function TopNav() {
	const moduleColor = useTheme('module_color');

	return (
		<div className="bg-module fixed top-0 left-0 z-[10000] box-border h-[70px] w-full">
			<div className="mx-auto flex h-full w-[95%] max-w-[1600px] flex-row items-center justify-between">
				<a
					className="flex min-h-10 w-[100px] shrink-0 items-center rounded-md focus-visible:ring-2 focus-visible:ring-current sm:w-[120px]"
					href="/"
				>
					<LogoLockup dark={!moduleColor.isDark} />
				</a>

				<div className="flex shrink-0 flex-row items-center gap-2 sm:gap-3">
					<AuthDialog view="login">
						<Button variant="ghost" size="sm">
							Log In
						</Button>
					</AuthDialog>
					<AuthDialog view="signup">
						<Button variant="default" size="sm">
							Sign up
						</Button>
					</AuthDialog>
				</div>
			</div>
		</div>
	);
}
