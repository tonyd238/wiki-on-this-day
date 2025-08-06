import { FetchButton } from '@/components/fetch-button/view';
import { DataProvider } from '@/app/provider';
import { EventsList } from '@/components/events-list/view';

export default function Home () {
	return (
		<DataProvider defaultValues={null}>
			<div
				className="font-sans p-4 pb-20 gap-16 sm:p-20">
				<h2 className="text-center text-3xl font-bold mb-4">On This Day</h2>
				<div className="flex flex-col items-center gap-4">
					<FetchButton/>
					<EventsList/>
				</div>
			</div>
		</DataProvider>
	);
}
