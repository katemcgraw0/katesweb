import { useState } from 'react';
import Layout from '../components/layout';
import { ReactTyped } from 'react-typed';

const IconWithText = ({ src, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="icon-wrapper flex items-center"
     
      //onMouseLeave={() => setIsHovered(false)}
    >
      <img  onMouseEnter={() => setIsHovered(true)} src={src} alt={alt} className="icon rounded-full w-1/8" />
      {isHovered && (
        <ReactTyped
          className="typing-text ml-2 custom-typed"
          strings={[text]}
          typeSpeed={50}
          showCursor={true}
          cursorChar="|"
        />
      )}
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col min-h-full">
        <main className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              {/* Picture */}
              <div className="lg:w-1/2 flex items-center w-full lg:mb-0 mb-4">
                <div className="animated-image mx-auto">
                  <img
                    src="/me.jpeg"
                    alt="Your Image"
                    className="max-w-full rounded-3xl items-center mx-auto"
                  />
                </div>
              </div>
              {/* Text Box */}
              <div className="lg:w-1/2 lg:pl-8 flex items-center ">
                <div className="bg-green3 p-4 text-white rounded-xl w-full hover:transform hover:scale-105 transition-transform duration-300">
                  <h2 className="font-custom sm:text-5xl text-2xl font-bold mb-4">
                    Hi! My name's Kate McGraw.
                  </h2>
                  <p className="sm:text-2xl text-lg mb-4 font-bodyCust">
                    Hover on the icons below to learn more about me!
                  </p>
                  <div className="flex flex-col space-y-4 font-custom text-xl">
                    <IconWithText src="/icons/coding-icon.png" alt="Coding Icon" text="//I am an aspiring Software Engineer, previously interning at Walmart Global Tech working with the Data Ventures team." />
                    <IconWithText src="/icons/home-icon.png" alt="Home Icon" text="//I am from San Diego, CA-—born and raised." />
                    <IconWithText src="/icons/school-icon.png" alt="School Icon" text="//I am studying CS at UMich. Go Blue!!!!" />
                    <IconWithText src="/icons/teaching-icon.png" alt="Teacher Icon" text="//I am a TA for a CS Theory class,  <a href='https://eecs376.org/' target='_blank' rel='noopener noreferrer className ='font-blue' '>EECS 376</a>, and I love sharing my passion for learning with others." />
                    <IconWithText src="/icons/hobbies-icon.png" alt="Hobbies Icon" text="//My hobbies include hiking, listening to a lot of music, and slacklining." />
                  </div>
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
