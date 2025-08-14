
import { createContext, type Dispatch, type SetStateAction, type TransitionStartFunction, useContext } from 'react';
import * as zod from 'zod';
import { ApiGetEventsReturnSchema } from './api/get-events';

export interface DataContextType {
	data: zod.infer<typeof ApiGetEventsReturnSchema>,
	updateContext: Dispatch<SetStateAction<Pick<DataContextType, 'data'> | null>>
	loading: boolean;
	startTransition: TransitionStartFunction;
}
export const DataContext = createContext<DataContextType>({
	data: null,
	loading: false,
	startTransition: () => {},
	updateContext: () => {}
});

export function useDataContext() {
	const context = useContext<DataContextType>(DataContext);

	if (!context) {
		throw new Error('useDataContext must be used within a DataContext.Provider');
	}

	return context;
}