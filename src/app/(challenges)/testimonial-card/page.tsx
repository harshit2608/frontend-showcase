import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const notoSansFont = Noto_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const TestimonialCardPage = () => {
  return (
    <div
      className={cn(
        'flex h-full min-w-full items-start justify-center bg-gradient-to-br from-white to-[#D2D6DB] pt-[200px]',
        notoSansFont.className,
      )}
      data-testid="sarah-dole-testimonial-card"
    >
      <div className="flex max-w-[19rem] transform rounded-[8px] bg-white p-6 shadow">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              width={48}
              height={48}
              alt="Sarah Dole"
              src="/images/testimonial-sarah.png"
              className="rounded-full"
              priority
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Sarah Dole
              </h1>
              <p className="font-normal text-neutral-600">@sarahdole</p>
            </div>
          </div>

          <p className="text-sm font-normal text-neutral-600">
            I&apos;ve been searching for high-quality abstract images for my
            design projects, and I&apos;m thrilled to have found this platform.
            The variety and depth of creativity are astounding!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardPage;
