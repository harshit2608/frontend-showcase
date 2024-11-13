import Link from 'next/link';
import { CircleChevronRightIcon } from 'lucide-react';

const ProjectCard = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => (
  <Link
    href={href}
    className="group relative block overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
    <div className="relative z-10">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
    <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
      <span className="font-medium">Explore</span>
      <CircleChevronRightIcon
        className="ml-1 h-5 w-5"
        role="img"
        aria-label="explore icon"
      />
    </div>
  </Link>
);

export default ProjectCard;
