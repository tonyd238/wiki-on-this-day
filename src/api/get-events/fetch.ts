import { ResponseSchema } from './schema';
import * as zod from 'zod';


type Response = zod.infer<typeof ResponseSchema>

export async function fetchWikiOnThisDay(): Promise<Response> {
	const date = new Date();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	try {
		const res = await fetch(
			`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`,
			{
				headers: {
					accept: 'application/json',
				},
			}
		);

		const jsonData = await res.json();
		const parsed = ResponseSchema.safeParse(jsonData);

		if (!parsed.success) {
			throw new Error('Invalid data format from WIKI API');
		}

		return parsed.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
