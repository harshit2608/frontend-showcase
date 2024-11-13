import { ThemeToggle } from '@/components/theme-toggle';
import { projects, siteConfig } from '@/config/site';
import { ProjectInfo } from '@/types';
import ProjectCard from './_components/project-card';

const HomePage = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 transition-colors duration-300 dark:bg-gray-900"
      data-testid="home-page"
    >
      <header className="mb-12 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-6xl md:text-7xl">
          Welcome to{' '}
          <span className="underline decoration-blue-500 decoration-wavy">
            {siteConfig.name}
          </span>
        </h1>
        <h2 className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
          {siteConfig.description}
        </h2>
      </header>

      <div className="mb-10 flex items-center space-x-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Switch Theme:
        </span>
        <ThemeToggle data-testid="theme-toggle-button" />
      </div>

      <section className="grid w-full max-w-2xl gap-6 p-6 sm:grid-cols-2 lg:max-w-3xl">
        {projects.map((project: ProjectInfo) => (
          <ProjectCard
            key={project.href}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
