import React from 'react';

export const EventCardSkeleton: React.FC = () => {
	return <div data-testid="event-card-skeleton" className="flex flex-grow flex-col border-1 gap-1 rounded-sm border-gray-200 p-2 animate-pulse">
		<div className="h-4 w-16 bg-indigo-200 rounded"></div>
		<div className="h-3 w-full bg-gray-200 rounded"></div>
	</div>
}