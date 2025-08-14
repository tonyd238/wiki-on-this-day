import { z } from 'zod';

export const DataSchema = z.array(
		z.object({
			text: z.string(),
			year: z.number(),
			pages: z.array(
				z.object({
					type: z.string(),
					title: z.string(),
					displaytitle: z.string(),
					namespace: z.object({
						id: z.number(),
						text: z.string(),
					}),
					wikibase_item: z.string().optional(),
					titles: z.object({
						canonical: z.string(),
						normalized: z.string(),
						display: z.string(),
					}),
					pageid: z.number(),
					thumbnail: z
						.object({
							source: z.url(),
							width: z.number(),
							height: z.number(),
						})
						.optional(),
					originalimage: z
						.object({
							source: z.url(),
							width: z.number(),
							height: z.number(),
						})
						.optional(),
					lang: z.string(),
					dir: z.string(),
					revision: z.string(),
					tid: z.string(),
					timestamp: z.string(),
					description: z.string().optional(),
					description_source: z.string().optional(),
					content_urls: z.object({
						desktop: z.object({
							page: z.url(),
							revisions: z.url(),
							edit: z.url(),
							talk: z.url(),
						}),
						mobile: z.object({
							page: z.url(),
							revisions: z.url(),
							edit: z.url(),
							talk: z.url(),
						}),
					}),
					extract: z.string(),
					extract_html: z.string(),
					normalizedtitle: z.string(),
				})
			),
		})
	);

export const NormalizedSchema = z.array(
	z.object({
		title: z.string(),
		year: z.string(),
	})
)

export const ResponseSchema = z.object({
	events: DataSchema,
	births: DataSchema,
	deaths: DataSchema,
	selected: DataSchema
}).nullable();

export const ReturnSchema = z.object({
	events: NormalizedSchema,
	births: NormalizedSchema,
	deaths: NormalizedSchema,
	selected: NormalizedSchema
}).nullable()
