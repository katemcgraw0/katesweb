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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Picture */}
          <div className="lg:w-1/2 flex items-center">
            <img
              src="/me.jpeg"  // Replace with the path to your image
              alt="Your Image"
              className="max-w-full rounded-3xl"
            />
          </div>
          {/* Text Box */}
          <div className="lg:w-1/2 lg:pl-8 flex items-center">
            <div>
              <h2 className="text-4xl font-bold mb-0 bg-green3 mt-0 p-4 text-white rounded-t-xl">
                Hi! My name's Kate McGraw.
              </h2>
              <p className="text-xl mb-4 bg-green3 mt-0 p-4 text-white rounded-b-xl">
                I am a junior studying Computer Science at UMich! I am currently assisting the Detection for Nuclear Nonproliferation, a research group in the Nuclear Engineering department at Michigan, to develop a python suite for processing and analyzing radiation data recorded from fission reactions. I am excited to be beginning my career as a software engineer and am looking forward to learning more about the tech industry and becoming a better software engineer!
              </p>
              {/* Add additional text content or any other elements you want */}
            </div>
          </div>
        </div>
      </div>
      {/* Add your additional page content here */}
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