
import React from 'react';
import type { EventCardProps } from './types';

export const EventCard: React.FC<EventCardProps> = ({info}) => {
	return <div className="flex flex-col border-1 border-gray-200 p-2 rounded-sm">
		<div className="font-medium text-md text-indigo-400">{info.year}</div>
		<div className="text-sm">{info.title}</div>
	</div>
}