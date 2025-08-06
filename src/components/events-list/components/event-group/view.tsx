'use client';
import React from 'react'
import { EventGroupProps } from './types';
import { EventCardSkeleton } from '../event-card/skeleton';
import { useDataContext } from '@/app/context';
import { EventCard } from '../event-card';

export const EventGroup: React.FC<EventGroupProps> = ({ data, title }) => {
	const { loading } = useDataContext();
	return <div className="flex gap-2 flex-col p-4 border-1 rounded-md border-gray-300">
		<div className="font-semibold text-xl">{title}</div>
		{!loading ?
			data.map((event) => (<EventCard key={event.title} info={{
				title: event.title,
				year: event.year.toString(),
			}}/>))
			:
			Array.from({ length: 20 }).map((_, index) => (
				<EventCardSkeleton key={['skeleton', index].join(('::'))}/>))}
	</div>;
};