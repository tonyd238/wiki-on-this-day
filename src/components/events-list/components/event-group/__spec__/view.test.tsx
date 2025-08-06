import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { EventGroup } from '../view';
import { useDataContext } from '@/app/context';

vi.mock('@/app/context', () => ({
	useDataContext: vi.fn(),
}));

const mockedUseDataContext = useDataContext as unknown as ReturnType<typeof vi.fn>;

describe('EventGroup', () => {
	const testData = [
		{ title: 'Event 1', year: '2020' },
		{ title: 'Event 2', year: '2021' },
	];

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders EventCards when loading is false', () => {
		mockedUseDataContext.mockReturnValue({ loading: false });

		render(<EventGroup title="My Events" data={testData} />);

		expect(screen.getByText('My Events')).toBeInTheDocument();
		expect(screen.getByText('Event 1')).toBeInTheDocument();
		expect(screen.getByText('2020')).toBeInTheDocument();
	});

	it('renders skeletons when loading is true', () => {
		mockedUseDataContext.mockReturnValue({ loading: true });

		render(<EventGroup title="Loading Events" data={testData} />);

		expect(screen.getByText('Loading Events')).toBeInTheDocument();
		const skeletons = screen.getAllByTestId('event-card-skeleton');
		expect(skeletons).toHaveLength(20);
	});
});
