import type { DataContextType } from '../context';
import * as zod from 'zod'
import { ApiGetEventsSchema } from '../api/get-events';

type InitialDataType = zod.infer<typeof ApiGetEventsSchema>

export const normalizeResponse = (data: InitialDataType): DataContextType['data'] => {
	return {
		events: (data?.events || []).sort((a, b) => b.year - a.year).map((event) => ({
			title: event.text,
			year: event.year.toString(),
		})),
		births: (data?.births || []).sort((a, b) => b.year - a.year).map((event) => ({
			title: event.text,
			year: event.year.toString(),
		})),
		deaths: (data?.deaths || []).sort((a, b) => b.year - a.year).map((event) => ({
			title: event.text,
			year: event.year.toString(),
		})),
		selected: (data?.selected || []).sort((a, b) => b.year - a.year).map((event) => ({
			title: event.text,
			year: event.year.toString(),
		}))
	}
}