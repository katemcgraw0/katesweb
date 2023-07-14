import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Toolbar */}
        

        {/* Page Content */}
        {/* Add your content here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-center">
          <Link legacyBehavior href="/about">
            <a className="mr-4">About</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </footer>
    </div>
    </Layout>
  );
}