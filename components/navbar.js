import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isProjectsPage = router.pathname == '/projects';
  return (
    <nav className="bg-gray-800 pt-5 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <a className=" text-4xl font-bold text-green5 ">Katherine (Kate) McGraw</a>
            </div>
          </div>
          <div className="flex px-4">
            <Link legacyBehavior href="/">
            <a
                className={`block text-4xl font-bold text-white rounded-l-lg px-4 ${isHomePage ? 'bg-green5' : 'bg-green4'
                } hover:bg-green5 transition-colors`}
              >
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/projects">
              <a className={`block text-4xl font-bold text-white rounded-r-lg px-4 ${isProjectsPage ? 'bg-green5' : 'bg-green4'
                } hover:bg-green5 transition-colors`}>Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;