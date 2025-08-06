import * as z from 'zod';

export async function apiFetch<T>(
	url: string,
	schema: z.ZodType<T>,
	options?: RequestInit,
): Promise<T> {

	const res = await fetch(url, {
		...options,
		headers: {
			...options?.headers,
		}
	});
	const json = await res.json();
	const parsed = schema.safeParse(json);
	if (!parsed.success) {
		throw new Error('Invalid response data');
	}

	return parsed.data;
}