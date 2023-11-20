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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Picture */}
          <div className="lg:w-1/2 flex items-center w-full">
            <img
              src="/me.jpeg"  // Replace with the path to your image
              alt="Your Image"
              className="max-w-full rounded-3xl items-center mx-auto"
            />
          </div>
          {/* Text Box */}
          <div className="lg:w-1/2 lg:pl-8 flex items-center ">
            <div>
              <h2 className="font-custom text-4xl font-bold mb-0 bg-green3 mt-0 p-4 text-white rounded-t-xl ">
                Hi! My name's Kate McGraw.
              </h2>
              <p className="text-2xl mb-4 bg-green3 mt-0 p-4 text-white rounded-b-xl font-bodyCust">
                I am a junior from San Diego, CA studying Computer Science at UMich! I am currently an Instruction Aide for the class EECS 376: Foundations of Computer Science, where I teach students about different techniques for analyzing and writing algorithms, computability, complexity, and cryptography basics. I am an up and coming software engineer with a diverse set of passions. When I am not coding, I like to spend my time outdoors, watching Michigan football (Go Blue!), listening to music, or hanging out at the beach with friends. I am excited to be beginning my career as a software engineer and am looking forward to learning more about the tech industry and becoming a better software engineer!
              </p>
              {/* Add additional text content or any other elements you want */}
            </div>
          </div>
        </div>
      </div>
      {/* Add your additional page content here */}
    </main>

      {/* Footer */}
     
    </div>
    </Layout>
  );
}