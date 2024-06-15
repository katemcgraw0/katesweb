import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
    <div className="flex flex-col min-h-full">
    <main className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row">
          {/* Picture */}
          <div className="lg:w-1/2 flex items-center w-full lg:mb-0 mb-4">
            <img
              src="/me.jpeg"  
              alt="Your Image"
              className="max-w-full rounded-3xl items-center mx-auto   "
            />
          </div>
          {/* Text Box */}
          <div className="lg:w-1/2 lg:pl-8  flex items-center ">
            <div>
              <h2 className="font-custom sm:text-4xl text-2xl font-bold mb-0 bg-green3 mt-0 p-4 text-white rounded-t-xl ">
                Hi! My name's Kate McGraw.
              </h2>
              <p className="sm:text-2xl text-lg mb-4 bg-green3 mt-0 p-4 text-white rounded-b-xl font-bodyCust">
                I am a rising senior from San Diego, CA studying Computer Science at UMich! I am currently a Software Engineering Intern at Walmart Global Tech. When in school, I am a Teaching Assistant for the class EECS 376: Foundations of Computer Science, where I teach students about different techniques for analyzing and writing algorithms, computability, complexity, and cryptography basics. I really love getting to share my love for learning new things with other students. I am an up and coming software engineer with a diverse set of passions. When I am not coding, I like to spend my time outdoors (although the outdoors in the midwest aren't quite like home), watching Michigan football (Go Blue!), listening to music, or hanging out at the beach with friends. I am excited to be beginning my career and am looking forward to learning more about the tech industry and becoming a better software engineer!
              </p>
             
            </div>
          </div>
        </div>
      </div>
    
    </main>

      {/* Footer */}
     
    </div>
    </Layout>
  );
}