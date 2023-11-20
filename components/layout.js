import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full p-0">
      {/* Include the Head component here */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* Rest of your layout */}
      <Navbar />
      <main className="flex flex-col flex-grow w-full">{children}</main>
      <Footer className="mt-auto w-full m-0 p-0" />
    </div>
  );
};
export default Layout;