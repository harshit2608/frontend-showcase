import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectCard from '@/app/_components/project-card';

describe('ProjectCard', () => {
  const mockTitle = 'Project Title';
  const mockDescription = 'Project Description';
  const mockHref = '/project-link';

  beforeEach(() => {
    render(
      <ProjectCard
        title={mockTitle}
        description={mockDescription}
        href={mockHref}
      />,
    );
  });

  it('renders with the correct title, description, and link', () => {
    const title = screen.getByRole('heading', { name: mockTitle });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(mockDescription);
    expect(description).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /explore/i });
    expect(link).toHaveAttribute('href', mockHref);
  });

  it('has the correct hover effect classes', () => {
    const card = screen.getByRole('link');
    expect(card).toHaveClass(
      'group relative block overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800 dark:hover:bg-gray-700',
    );

    const overlay = card.querySelector('.absolute.inset-0');
    expect(overlay).toHaveClass(
      'opacity-0 transition-opacity duration-300 group-hover:opacity-20',
    );
  });

  it('applies scaling transform on hover', async () => {
    const card = screen.getByRole('link');

    expect(card).toHaveClass('hover:scale-105');

    await userEvent.hover(card);

    expect(card).toHaveClass('hover:scale-105');
  });

  it('renders the explore icon', () => {
    const icon = screen.getByRole('img', { name: /explore icon/i });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('ml-1 h-5 w-5');
  });

  it('navigates to the correct href on click', async () => {
    const link = screen.getByRole('link', { name: /explore/i });
    await userEvent.click(link);

    expect(link).toHaveAttribute('href', mockHref);
  });
});
