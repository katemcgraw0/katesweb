import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import RotatingImages from '../components/rotatingImages'

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
              <div className='flex md:flex-row flex-col gap-8'>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full'>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/Zodiacify.png'
                        alt='Your Image'
                        className='lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Zodiacify
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
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
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
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
                      <RotatingImages />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Theta Tau Website
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
                        A website I helped build to showcase my professional
                        engineering fraternity. It serves to inform prospective
                        members of our fraternity's values and purpose. Members
                        can sign in using Google OAuth to access additional
                        features such as viewing internal events, pledging
                        progress, and accessing resources. There is also a
                        feature to see what other brothers are taking the same
                        classes as you. This was an extremely rewarding project
                        as it was a simple way to give back to my fraternity.
                        Prior to the current website, the fraternity's website
                        had many issues including incompatibility with different
                        screen sizes, outdated information, and poor UI/UX
                        design. It also had no internal functionality, which has
                        made a huge difference in the administration of our
                        fraternity. This is definitely the project that I am
                        most proud of.
                      </p>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
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

{/*First two projects ^*/}


              <div className='flex md:flex-row flex-col gap-8 justify-center'>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full '>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/Insta485.png'
                        alt='Your Image'
                        className='lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Insta485
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
                        I created a full-stack mock instagram for my web dev
                        class! On the front end, I used React to ensure seamless
                        and responsive client-side interactions, and on the
                        server side, I implemented custom REST API enpoints,
                        which used Flask to access my SQLite database. SQLite
                        allowed the application to have the ability to handle
                        real-time user interactions, including account creation,
                        post publication, commenting functionality, an infinite
                        scroll feature. This was the first time that I manually
                        implemented security measures such as password salting
                        and hashing techniques to safeguard passwords stored
                        within the SQLite database, as previously I had used
                        Google OAuth or other secure login tools to avoid
                        writing vulnerable code. I didn't put as much work into
                        the front-end of this project, as I was more focused on
                        learning new back-end technologies, but I am excited to
                        use these new technologies in my projects moving
                        fowards!
                      </p>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
                        Technologies Used: JavaScript, React, Python, Flask,
                        Jinja, SQLite, AWS
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full '>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/trendee2.png'
                        alt='Your Image'
                        className='lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        Trendee.ai Frontend
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
                        Collaborated with Trendee.ai, a company specializing in
                        curating personalized feeds of TikTok videos for
                        efficient content discovery by social media managers. My
                        role centered on refining the application's front-end,
                        where I translated the design from Figma into a seamless
                        and user-friendly interface. This project was a unique
                        experience for me as I navigated working with limited
                        creative autonomy, implementing features precisely as
                        depicted in Figma, and adapting to a predefined Tech
                        Stack over which I had no control.
                      </p>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
                        Technologies Used: Next.js, Typescript, Mantine
                      </p>
                    </div>
                    <div className='flex justify-center mt-auto '>
                      <Link
                        legacyBehavior
                        href='https://www.trendee.ai/'
                        target='_blank'
                        passHref
                      >
                        <a className='bg-green5 hover:bg-green4 sm:text-2xl text-lg text-white font-bold font-custom py-2 px-4 rounded text-center'>
                          Check out the Company's Website Here
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
{/*Second two boxes */}



<div className='flex md:flex-row flex-col gap-8'>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full'>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center flex-grow'>
                      <img
                        src='/mapreduce.png'
                        alt='Your Image'
                        className='lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        MapReduce
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
                      I built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks. This project was a deep dive into distributed systems, aiming to implement a framework capable of executing MapReduce programs across a cluster of computers. Our framework comprised two main components: a Manager and multiple Workers. The Manager accepted user-submitted MapReduce jobs and distributed tasks among the Workers. Each Worker executed map and reduce tasks on the given data. The Manager ensured fault tolerance, task distribution, and system concurrency using OS-provided facilities such as threads and sockets for networking. One of the key challenges was ensuring efficient communication between the Manager and Workers while maintaining system robustness. We tackled this by implementing a reliable heartbeat mechanism, to monitor Worker status and reassign tasks if any Worker failed. To do this, we used UDP to send heartbeats and TCP for registration and ackowledgement communication. This experience not only strengthened my understanding of distributed systems but also enhanced my skills in Python programming, concurrency, and network communication.
                      </p>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
                        Technologies Used: Python, Sockets, Threads and Processes, AWS
                      </p>
                    </div>
                    <div className='flex justify-center mt-auto '>
                    </div>
                  </div>
                </div>
                <div className='flex  flex-col justify-center max-w-2xl flex-grow md:w-1/2 w-full'>
                  <div className='bg-green3 rounded-lg p-8 flex flex-grow flex-col border border-transparent hover:border-green5 transform transition-transform hover:scale-105'>
                    <div className='flex flex-col items-center'>
                    <img
                        src='/ask485.png'
                        alt='Your Image'
                        className='lg:w-auto lg:h-72 rounded-md md:h-52 md:w-auto'
                      />
                      <h2 className='font-custom sm:text-4xl text-3xl font-bold mb-0 mt-0 p-4 text-white rounded-t-xl'>
                        ask485
                      </h2>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust'>
                      For my web systems class, my team and I developed a scalable search engine akin to Google. This project involved several key learning goals, including information retrieval concepts like text analysis using tf-idf, link analysis with PageRank, and parallel data processing using MapReduce. We built a segmented inverted index of web pages using MapReduce programs. This involved parsing, cleaning text, and calculating tf-idf scores. Our index server used a REST API that returns search results in JSON format. It loads inverted index segments, PageRank data, and stopwords into memory. Each server instance handles different index segments. For the seach server, we created a user interface for querying the search engine. It aggregates results from multiple Index servers and displays the top 10 results. The UI includes a query input and a PageRank weight slider.


                      </p>
                      <p className='sm:text-xl text-lg mt-4 text-white font-bodyCust text-left flex w-full text-left'>
                        Technologies Used: Python, Flask, SQLite, MapReduce
                      </p>
                      <div className='flex align-bottom'>
                        <div className='flex justify-center mt-auto'>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
