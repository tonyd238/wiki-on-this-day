'use client';
import { FC } from 'react';
import { useDataContext } from '@/app/context';
import { EventGroup } from './components/event-group';

export const EventsList: FC = () => {
	const { data, loading } = useDataContext();
	if (!data && !loading) {
		return <div className="flex flex-col w-full items-stretch gap-2">
			<div>No data to show...</div>
		</div>;
	}
	return <div className="flex flex-col w-full items-stretch gap-5">
		<EventGroup data={data?.selected || []} title="Selected"/>
		<EventGroup data={data?.events || []} title="Events"/>
		<EventGroup data={data?.births || []} title="Births"/>
		<EventGroup data={data?.deaths || []} title="Deaths"/>
	</div>;
};
