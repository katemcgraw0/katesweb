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
          <div className="flex text-white text-center items-center justify-center w-full font-custom pb-5 text-5xl text-bold">
  <h1>Some things I've Built!</h1>
</div>
            <div className="flex flex-col-reverse md:flex-row gap-4 ">
              {/* Text Box */}
              <div className="flex items-start justify-center max-w-2xl flex-grow md:w-1/2 w-full">
                <div className="bg-green3 rounded-lg p-8 h-full">
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
                      A website I built that uses the Spotify API to access users' data and uses the OpenAI API to predict their zodiac sign based on this data. I also implemented features to display users' favorite artists and to give them song and artist recommendations. This app is in development phases so you cannot login without first adding your email address to a list of approved spotify users, but I am currently working on getting it approved to leave development phases. This project was really fun for me because it engaged a lot of my friends in what I was working on and I got a lot of positive feedback:)
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
              <div className="flex items-start justify-center max-w-2xl flex-grow md:w-1/2 w-full">
                <div className="bg-green3 rounded-lg p-8 h-full ">
                  <div className="flex flex-col items-center">
                    <img
                      src="/ThetaTauWeb.png"
                      alt="Your Image"
                      className="w-auto h-72 rounded-md"
                    />
                    <h2 className="font-custom text-4xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl">
                      Theta Tau Website
                    </h2>
                    <p className="text-2xl mt-4 text-white font-bodyCust">
                      A website I helped build to showcase my professional engineering fraternity. It serves to inform prospective members of our fraternity. Members can sign in using Google OAuth to see additional features, such as internal events, pledging progress, and accessing resources. This was an extremely rewarding project as it was a simple way to give back to my fraternity. Prior to the currently website, the fraternity's website had many issues including incompatibility with different screen sizes and outdated information. It also had no internal functionality, which has made a huge difference in the administration of our fraternity.
                    </p>
                    <p className="text-2xl mt-4 text-white font-bodyCust">
                      Technologies Used: Typescript, React, Next.js, TailwindCSS, Netlify, Supabase
                    </p>
                    <div className = "flex align-bottom">
                    <div className="flex mt-4 flex-row align-bottom">
                      <Link legacyBehavior href="https://thetatau-umich.org/" target = "_blank" passHref>
                        <a className="bg-green5 hover:bg-green4 text-2xl text-white font-bold font-custom py-2 px-4 rounded mr-2 s">
                          Click here to See!
                        </a>
                      </Link>
                      <Link  legacyBehavior href="https://github.com/thetatauthetagamma/THT-Website" target = "_blank" passHref>
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
          </div>
        </main>
        {/* Project section */}
      </div>
    </Layout>
  );
  }