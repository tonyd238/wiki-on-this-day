import type { FC } from 'react';
import { toast } from 'react-toastify';
import { UiButton } from '../../ui/button';
import { fetchWikiOnThisDay } from '../../api/get-events';
import { normalizeResponse } from '../../utils/normalize-response.ts';
import { useDataContext } from '../../context.ts';

export const FetchButton: FC = () => {
	const { updateContext, startTransition, loading } = useDataContext();
	const handleFetch = async () => {
		startTransition(async () => {
			try {
				const response = await fetchWikiOnThisDay();
				if (response) {
					updateContext({
						data: normalizeResponse(response),
					});
				}
			} catch (e) {
				console.error(e);
				toast(`Something went wrong (${e})`, {
					type: 'error',
				});
			}
		});
	};

	return <UiButton disabled={loading} onClick={handleFetch}>
		Get events for today
	</UiButton>;
};