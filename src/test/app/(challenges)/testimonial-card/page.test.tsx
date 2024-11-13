import { render, screen } from '@testing-library/react';
import TestimonialCardPage from '@/app/(challenges)/testimonial-card/page';

jest.mock('next/font/google', () => ({
  Noto_Sans: jest.fn(() => ({ className: 'mocked-noto-sans' })),
}));

describe('TestimonialCardPage', () => {
  beforeEach(() => {
    render(<TestimonialCardPage />);
  });

  it('applies the Noto Sans font family class', () => {
    const container = screen.getByTestId('sarah-dole-testimonial-card');
    expect(container.className).toContain('mocked-noto-sans');
  });

  it('renders the profile image with alt text', () => {
    const image = screen.getByAltText('Sarah Dole');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/testimonial-sarah.png');
  });

  it('displays the correct username and handle', () => {
    expect(screen.getByText('Sarah Dole')).toBeInTheDocument();
    expect(screen.getByText('@sarahdole')).toBeInTheDocument();
  });

  it('renders the testimonial text', () => {
    const testimonialText = screen.getByText(
      /I've been searching for high-quality abstract images/i,
    );
    expect(testimonialText).toBeInTheDocument();
  });
});
