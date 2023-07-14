import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (

    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;