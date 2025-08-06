import { NextResponse } from 'next/server';
import { ResponseSchema } from './schema';

export async function GET(): Promise<Response> {
	const date = new Date();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	try {
		const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				accept: 'application/json',
			}

		});
		const jsonData = await res.json();
		const parsed = ResponseSchema.safeParse(jsonData);

		if (!parsed.success) {
			return NextResponse.json({ error: 'Invalid data format from WIKI API' }, { status: 502 });
		}

		return NextResponse.json(parsed.data, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: String(error) }, { status: 500 });
	}
}
