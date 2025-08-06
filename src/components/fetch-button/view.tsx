'use client';
import { FC } from 'react';
import { UiButton } from '@/ui/button';
import { apiFetch } from '@/utils/api-fetch';
import { ApiGetEventsSchema, routeApiGetEvents } from '@/app/api/get-events';
import { useDataContext } from '@/app/context';
import { toast } from 'react-toastify';
import { normalizeResponse } from '@/utils/normalize-response';

export const FetchButton: FC = () => {
	const {updateContext, startTransition, loading} = useDataContext()
	const handleFetch = async () => {
		startTransition(async () => {
			try {
				const response = await apiFetch(routeApiGetEvents, ApiGetEventsSchema)
				if (response) {
					updateContext({
						data: normalizeResponse(response)
					})
				}
			} catch (e) {
				console.error(e);
				toast(`Something went wrong (${e})`, {
					type: 'error'
				})
			}
		})
	}

	return <UiButton disabled={loading} onClick={handleFetch}>
		Get events for today
	</UiButton>
}