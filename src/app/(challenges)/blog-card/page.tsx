import { Noto_Sans } from 'next/font/google';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const notoSansFont = Noto_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const BlogCardPage = () => {
  return (
    <div
      className={cn(
        'flex h-full min-w-full items-start justify-center bg-gradient-to-br from-white to-[#D2D6DB]',
        notoSansFont.className,
      )}
      data-testid="blog-card"
    >
      <div className="mt-[120px] flex max-w-[340px] flex-col overflow-hidden rounded-[8px] bg-white shadow">
        <div className="relative h-72 w-full">
          <Image
            alt="furniture-blog-card"
            src="/images/blog-card.jpg"
            fill
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col px-4 py-6 text-neutral-900">
          <span className="w-min rounded-full border border-green-200 bg-green-50 px-[10px] py-[3px] text-sm font-normal text-green-700">
            Interior
          </span>
          <h1 className="pt-2 text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </h1>
          <p className="pt-3 text-lg font-medium leading-6 text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <div className="w-full pt-6">
            <button className="flex items-center gap-1 text-base font-medium text-indigo-700 hover:text-indigo-800 focus:rounded focus:text-indigo-800 focus:shadow-[0px_0px_0px_1px_#444ce7,_0px_0px_0px_4px_rgba(68,_76,_231,_0.12)] disabled:cursor-not-allowed disabled:text-[#a3a3a3]">
              <p>Read more</p>
              <ArrowRightIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardPage;
