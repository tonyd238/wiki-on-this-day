import * as zod from 'zod';
import { ApiGetEventsSchema } from '@/app/api/get-events';
import { describe, expect, it } from 'vitest';
import { normalizeResponse } from '@/utils/normalize-response';

describe('normalizeResponse', () => {
	const initialData: zod.infer<typeof ApiGetEventsSchema> = {
		events: [
			{
				text: '111',
				year: 1992,
				pages: [],
			}, {
				text: '123',
				year: 2003,
				pages: [],
			},
		],
		selected: [
			{
				text: '123',
				year: 2003,
				pages: [],
			},
		],
		births: [
			{
				text: '123',
				year: 2003,
				pages: [],
			},
		],
		deaths: [
			{
				text: '123',
				year: 2003,
				pages: [],
			},
		],
	};

	it('should be normalized', () => {
		expect(normalizeResponse(initialData)).toEqual({
			events: [
				{
					title: '123',
					year: '2003',
				},
				{
					title: '111',
					year: '1992',
				},
			],
			selected: [
				{
					title: '123',
					year: '2003',
				},
			],
			births: [
				{
					title: '123',
					year: '2003',
				},
			],
			deaths: [
				{
					title: '123',
					year: '2003',
				},
			],
		})
	});
});