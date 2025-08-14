import type { FC } from 'react';
import type { UiButtonProps } from './types';
import { Button } from '@headlessui/react';
import { cn } from 'clsx-for-tailwind';

export const UiButton: FC<UiButtonProps> = ({children, className, ...props}) => {
	return <Button {...props} className={cn(
		"rounded bg-sky-600 transition-all duration-150 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500",
		className,
		{
			["cursor-pointer"]: !props.disabled,
			['bg-gray-400']: props.disabled
		}
	)}>
		{children}
	</Button>
}