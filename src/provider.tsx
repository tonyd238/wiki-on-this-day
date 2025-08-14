
import { type ReactElement, type ReactNode, useState, useTransition } from 'react';
import { DataContext, type DataContextType } from './context';

export interface ProvidersProps {
	children: ReactNode;
	defaultValues: Pick<DataContextType, 'data'> | null;
}

export function DataProvider({
	children,
	defaultValues
}: ProvidersProps): ReactElement {

	const [contextData, setContextData] = useState<Pick<DataContextType, 'data'> | null>(defaultValues)
	const [isPending, startTransition] = useTransition();

	return (
		<DataContext.Provider value={{
			data: contextData?.data || null,
			startTransition,
			loading: isPending,
			updateContext: setContextData
		}}>{children}</DataContext.Provider>
	);
}
