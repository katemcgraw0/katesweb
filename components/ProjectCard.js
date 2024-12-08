import Link from 'next/link';

export default function ProjectCard({
  imageSrc,
  title,
  description,
  technologies,
  links = [],
  customComponent = null,
}) {
  return (
    <div className="flex flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full">
      <div className="bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={`${title} Image`}
              className="lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto"
            />
          )}
          {customComponent}
          <h2 className="font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl">
            {title}
          </h2>
          <p className="sm:text-xl text-lg mt-4 text-white font-bodyCust">
            {description}
          </p>
          <p className="sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full">
            Technologies Used: {technologies}
          </p>
          <div className="flex justify-center mt-auto space-x-4">
            {links.map((link, index) => (
              <Link
                key={index}
                legacyBehavior
                href={link.href}
                target="_blank"
                passHref
              >
                <a className="bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded text-center">
                  {link.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
