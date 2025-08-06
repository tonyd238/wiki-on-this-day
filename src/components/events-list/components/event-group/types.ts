import { EventCardProps } from '../event-card';

export interface EventGroupProps {
	data: Pick<EventCardProps, 'info'>['info'][];
	title: string;
}