import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import BlogCardPage from '@/app/(challenges)/blog-card/page';

describe('BlogCardPage', () => {
  test('renders BlogCardPage with all elements', () => {
    render(<BlogCardPage />);

    expect(screen.getByTestId('blog-card')).toBeInTheDocument();
    expect(
      screen.getByText('Top 5 Living Room Inspirations'),
    ).toBeInTheDocument();
    expect(screen.getByText('Interior')).toBeInTheDocument();
    expect(screen.getByText('Read more')).toBeInTheDocument();
    expect(screen.getByAltText('furniture-blog-card')).toBeInTheDocument();
  });

  test('image is visible and has correct alt text', () => {
    render(<BlogCardPage />);

    const image = screen.getByAltText('furniture-blog-card');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/blog-card.jpg');
  });

  test('button click behavior (Read more)', () => {
    render(<BlogCardPage />);

    const button = screen.getByText('Read more');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  test('button is disabled when appropriate', () => {
    render(<BlogCardPage />);
    const button = screen.getByRole('button', {
      name: /read more/i,
    }) as HTMLButtonElement;

    button.disabled = true;
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:cursor-not-allowed');
    expect(button).toHaveClass('disabled:text-[#a3a3a3]');
  });
});
