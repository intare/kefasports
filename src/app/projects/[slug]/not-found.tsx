import Link from 'next/link';
import Image from 'next/image';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-brand-offWhite flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="mx-auto h-24 w-24 bg-brand-accent rounded-full flex items-center justify-center">
            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Project Not Found</h1>
        <p className="text-brand-secondary mb-8">
          Sorry, we couldn&apos;t find the project you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/projects"
            className="inline-block w-full bg-brand-accent text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors"
          >
            View All Projects
          </Link>
          <Link
            href="/"
            className="inline-block w-full border border-brand-accent text-brand-accent px-6 py-3 rounded-md font-medium hover:bg-brand-accent hover:text-white transition-colors"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Featured Projects */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-brand-dark mb-4">Popular Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/projects/kepler-university-indoor-basketball-court" className="group">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/gallery/k1.jpg"
                  alt="Kepler University Court"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-brand-dark bg-opacity-40 group-hover:bg-opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">Kepler University</span>
                </div>
              </div>
            </Link>
            <Link href="/projects/giants-of-africa-outdoor-basketball-court" className="group">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/gallery/court1.jpg"
                  alt="Giants of Africa Court"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-brand-dark bg-opacity-40 group-hover:bg-opacity-60 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-medium text-center px-2">Giants of Africa</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
