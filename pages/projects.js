import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Projects () {
  return (
    <Layout>
      <div className='flex flex-col min-h-screen'>
        <main className='flex-grow flex items-center justify-center'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex text-white text-center items-center justify-center w-full font-custom pb-5 text-5xl text-bold'>
              <h1>Some things I've Built!</h1>
            </div>
            <div className='flex flex-col gap-8 mt-5 mb-5'>
              {/* Text Box */}
              <div className='flex md:flex-row flex-col md:gap-8'>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full'>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/Zodiacify.png'
                        alt='Your Image'
                        className='w-auto h-72 rounded-md'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Zodiacify
                      </h2>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust'>
                        A website I built that uses the Spotify API to access
                        users' data and uses the OpenAI API to predict their
                        zodiac sign based on this data. I also implemented
                        features to display users' favorite artists and to give
                        them song and artist recommendations. This was my first
                        personal project, and I learned a lot about web dev and
                        options for choosing my tech stack. This project was
                        really fun for me because it engaged a lot of my friends
                        in what I was working on and I got a lot of positive
                        feedback:)
                      </p>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust '>
                        Technologies Used: React, Next.js, NextAuth.js,
                        TailwindCSS, OpenAI API, Spotify API, Vercel
                      </p>
                    </div>
                    <div className='flex justify-center mt-auto '>
                      <Link
                        legacyBehavior
                        href='https://zodiacify.vercel.app/'
                        target='_blank'
                        passHref
                      >
                        <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded mr-2 text-center'>
                          Click here to See!
                        </a>
                      </Link>
                      <Link
                        legacyBehavior
                        href='https://github.com/katemcgraw0/Zodiacify'
                        target='_blank'
                        passHref
                      >
                        <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded text-center'>
                          Github Repo
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full'>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center'>
                      <img
                        src='/ThetaTauWeb.png'
                        alt='Your Image'
                        className='w-auto h-72 rounded-md'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Theta Tau Website
                      </h2>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust'>
                        A website I helped build to showcase my professional
                        engineering fraternity. It serves to inform prospective
                        members of our fraternity's values and purpose. Members
                        can sign in using Google OAuth to access additional
                        features, such as viewing internal events, pledging
                        progress, and accessing resources. This was an extremely
                        rewarding project as it was a simple way to give back to
                        my fraternity. Prior to the currently website, the
                        fraternity's website had many issues including
                        incompatibility with different screen sizes, outdated
                        information, and poor UI/UX design. It also had no
                        internal functionality, which has made a huge difference
                        in the administration of our fraternity.
                      </p>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust mb-2'>
                        Technologies Used: Typescript, React, Next.js,
                        TailwindCSS, Netlify, Supabase
                      </p>
                      <div className='flex align-bottom'>
                        <div className='flex justify-center mt-auto'>
                          <Link
                            legacyBehavior
                            href='https://thetatau-umich.org/'
                            target='_blank'
                            passHref
                          >
                            <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded mr-2 s text-center'>
                              Click here to See!
                            </a>
                          </Link>
                          <Link
                            legacyBehavior
                            href='https://github.com/thetatauthetagamma/THT-Website'
                            target='_blank'
                            passHref
                          >
                            <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded text-center'>
                              Github Repo
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex md:flex-row flex-col md:gap-8 justify-center'>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full '>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/coming-soon.jpg'
                        alt='Your Image'
                        className='w-auto h-72 rounded-md'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        YOULearnToCook
                      </h2>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust'>
                        A social media application that I am currently building for people to share what they have been cooking lately. With the rise of cooking instagrams, I am building this website to keep the cooking accounts off of instagram. Users will be able to create an account, login, add friends, and post meals they are cooking. In each post will be a picture (or pictures) of the meal as well as a section for the recipe and a section for an optional caption. There will be a feed of others' recent meals and opportunities to interact with these posts, as well as save these recipes to your upcoming meals. Stay tuned as I develop this concept!
                      </p>
                      <p className='sm:text-2xl text-lg mt-4 text-white font-bodyCust '>
                        Technologies Used: TBD
                      </p>
                    </div>
                    <div className='flex justify-center mt-auto '>
                      
                      <Link
                        legacyBehavior
                        href='https://github.com/katemcgraw0/Zodiacify'
                        target='_blank'
                        passHref
                      >
                        <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded text-center'>
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
  )
}
