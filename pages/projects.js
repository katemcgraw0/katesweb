import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row">
              {/* Text Box */}
              <div className="flex items-start justify-center mt-[-500px] max-w-2xl">
                <div className="bg-green3 rounded-lg p-8">
                  <div className="flex flex-col items-center">
                    <img
                      src="/Zodiacify.png"
                      alt="Your Image"
                      className="w-auto h-72 rounded-md"
                    />
                    <h2 className="font-custom text-4xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl">
                      Zodiacify
                    </h2>
                    <p className="text-2xl mt-4 text-white font-bodyCust">
                      A website I built that uses the Spotify API to access users' data and uses the OpenAI API to predict their zodiac sign based on this data. I also implemented features to display users' favorite artists and to give them song and artist recommendations. This app is in development phases so you cannot login without first adding your email address to a list of approved spotify users, but I am currently working on getting it approved to leave development phases. 
                    </p>
                    <p className="text-2xl mt-4 text-white font-bodyCust">
                      Technologies Used: React, Next.js, NextAuth.js, TailwindCSS, OpenAI API, Spotify API, Vercel
                    </p>
                    <div className="flex mt-4">
                      <Link legacyBehavior href="https://zodiacify.vercel.app/" target = "_blank" passHref>
                        <a className="bg-green5 hover:bg-green4 text-2xl text-white font-bold font-custom py-2 px-4 rounded mr-2">
                          Click here to See!
                        </a>
                      </Link>
                      <Link  legacyBehavior href="https://github.com/katemcgraw0/Zodiacify" target = "_blank" passHref>
                        <a className="bg-green5 hover:bg-green4 text-2xl text-white font-bold font-custom py-2 px-4 rounded">
                          Github Repo
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Project section */}
      </div>
    </Layout>
  );
  }