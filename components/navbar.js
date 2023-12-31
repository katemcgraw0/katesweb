import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isProjectsPage = router.pathname == '/projects';
  return (
    <nav className="bg-toolBar sm:pt-5 pt pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <a className="md:text-5xl font-custom font-bold text-green5 sm:text-5xl text-4xl"><span className="hidden md:inline">Katherine (</span>Kate<span className="hidden md:inline">)</span> McGraw</a>
            </div>
          </div>
          <div className="flex px-4">
            <Link legacyBehavior href="/">
            <a
                className={`block text-2xl sm:text-5xl font-custom font-bold text-white rounded-l-lg px-4 ${isHomePage ? 'bg-green5' : 'bg-green4'
                } hover:bg-green5 transition-colors`}
              >
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/projects">
              <a className={`block text-2xl sm:text-5xl font-custom font-bold text-white rounded-r-lg px-4 ${isProjectsPage ? 'bg-green5' : 'bg-green4'
                } hover:bg-green5 transition-colors`}>Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;