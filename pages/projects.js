import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import RotatingImages from '../components/rotatingImages';

export default function Projects() {
  const projects = [
    {
      imageSrc: '/pager.png',
      title: 'Pager',
      description: `For my advanced operating systems class, I designed and implemented a memory manager, or "pager," to manage virtual memory for application processes. This pager handles critical functions such as memory allocation, process switching, and page fault handling by maintaining virtual memory backed by swap space or files. The system uses a single-level page table and simulates memory management hardware, enabling complex memory operations like copy-on-write and eviction with a second-chance FIFO algorithm. This project emphasized efficient resource use and robust fault handling, and I developed extensive test cases to verify the pager’s functionality and performance.`,
      technologies: 'C++, Make, Bash/Shell Scripting, OS',
    },
    {
      imageSrc: '/fileserver.png',
      title: 'Network File Server',
      description: `I developed a multi-threaded network file server that provides a hierarchical file system accessible to clients via network requests. The server supports creating, reading, writing, and deleting files or directories while enforcing access control based on ownership. I implemented socket-based communication and used Boost threads with reader/writer locks to handle concurrency safely and efficiently. The project emphasized fault tolerance, secure handling of untrusted client input, and maintaining file system consistency during crashes, giving me hands-on experience in systems programming, concurrency, and client-server architecture.`,
      technologies: 'C++, Make, Bash/Shell Scripting, OS',
    },
    {
      customComponent: <RotatingImages />,
      title: 'Theta Tau Website',
      description: `A website I helped build to showcase my professional engineering fraternity. It serves to inform prospective members of our fraternity's values and purpose. Members can sign in using Google OAuth to access additional features such as viewing internal events, pledging progress, and accessing resources. There is also a feature to see what other brothers are taking the same classes as you. I got the opportunity to lead a team of developers in this project, and help them learn the basics of web dev. This was an extremely rewarding project as it was a simple way to give back to my fraternity. Prior to the current website, the fraternity's website had many issues including incompatibility with different screen sizes, outdated information, and poor UI/UX design. It also had no internal functionality, which has made a huge difference in the administration of our fraternity. This is definitely the project that I am most proud of.`,
      technologies: 'Typescript, React, Next.js, TailwindCSS, Netlify, Supabase',
      links: [
        { href: 'https://thetatau-umich.org/', text: 'View Live' },
        {
          href: 'https://github.com/thetatauthetagamma/THT-Website',
          text: 'Github Repo',
        },
      ],
    },
    {
      imageSrc: '/Insta485.png',
      title: 'Insta485',
      description: `I created a full-stack mock instagram for my web dev class! On the front end, I used React to ensure seamless and responsive client-side interactions, and on the server side, I implemented custom REST API enpoints, which used Flask to access my SQLite database. SQLite allowed the application to have the ability to handle real-time user interactions, including account creation, post publication, commenting functionality, an infinite scroll feature. This was the first time that I manually implemented security measures such as password salting and hashing techniques to safeguard passwords stored within the SQLite database, as previously I had used Google OAuth or other secure login tools to avoid writing vulnerable code. I didn't put as much work into the front-end of this project, as I was more focused on learning new back-end technologies, but I am excited to use these new technologies in my projects moving fowards!`,
      technologies: 'JavaScript, React, Python, Flask, Jinja, SQLite, AWS',
    },
    {
      imageSrc: '/trendee2.png',
      title: 'Trendee.ai Frontend',
      description: `Collaborated with Trendee.ai, a company specializing in curating personalized feeds of TikTok videos for efficient content discovery by social media managers. My role centered on refining the application's front-end, where I translated the design from Figma into a seamless and user-friendly interface. This project was a unique experience for me as I navigated working with limited creative autonomy, implementing features precisely as depicted in Figma, and adapting to a predefined Tech Stack over which I had no control.`,
      technologies: 'Next.js, Typescript, Mantine',
      links: [{ href: 'https://www.trendee.ai/', text: 'Visit Website' }],
    },
    {
      imageSrc: '/mapreduce.png',
      title: 'MapReduce',
      description: `I built a multi-worker and fault-tolerant MapReduce server in Python which can process user-submitted tasks. This project was a deep dive into distributed systems, aiming to implement a framework capable of executing MapReduce programs across a cluster of computers. Our framework comprised two main components: a Manager and multiple Workers. The Manager accepted user-submitted MapReduce jobs and distributed tasks among the Workers. Each Worker executed map and reduce tasks on the given data. The Manager ensured fault tolerance, task distribution, and system concurrency using OS-provided facilities such as threads and sockets for networking. One of the key challenges was ensuring efficient communication between the Manager and Workers while maintaining system robustness. We tackled this by implementing a reliable heartbeat mechanism, to monitor Worker status and reassign tasks if any Worker failed. To do this, we used UDP to send heartbeats and TCP for registration and ackowledgement communication. This experience not only strengthened my understanding of distributed systems but also enhanced my skills in Python programming, concurrency, and network communication`,
      technologies: 'Python, Sockets, Threads and Processes, AWS',
    },
    {
      imageSrc: '/ask485.png',
      title: 'ask485',
      description: `For my web systems class, my team and I developed a scalable search engine akin to Google. This project involved several key learning goals, including information retrieval concepts like text analysis using tf-idf, link analysis with PageRank, and parallel data processing using MapReduce. We built a segmented inverted index of web pages using MapReduce programs. This involved parsing, cleaning text, and calculating tf-idf scores. Our index server used a REST API that returns search results in JSON format. It loads inverted index segments, PageRank data, and stopwords into memory. Each server instance handles different index segments. For the seach server, we created a user interface for querying the search engine. It aggregates results from multiple Index servers and displays the top 10 results. The UI includes a query input and a PageRank weight slider.

`,
      technologies: 'Python, Flask, SQLite, MapReduce',
    },
    {
      imageSrc: '/Zodiacify.png',
      title: 'Zodiacify',
      description: `A website I built that uses the Spotify API to access users' data and uses the OpenAI API to predict their zodiac sign based on this data. I also implemented features to display users' favorite artists and to give them song and artist recommendations. This was my first personal project, and I learned a lot about web dev and options for choosing my tech stack. This project was really fun for me because it engaged a lot of my friends in what I was working on and I got a lot of positive feedback:)`,
      technologies: 'React, Next.js, NextAuth.js, TailwindCSS, OpenAI API, Spotify API, Vercel',
      links: [
        { href: 'https://zodiacify.vercel.app/', text: 'View Live' },
        { href: 'https://github.com/katemcgraw0/Zodiacify', text: 'Github Repo' },
      ],
    },
  ];

  const projectRows = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectRows.push(projects.slice(i, i + 2));
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex text-white text-center items-center justify-center w-full font-custom pb-5 text-5xl text-bold">
              <h1>Some things I've Built!</h1>
            </div>
            <div className="flex flex-col gap-8 mt-5 mb-5">
              {projectRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex md:flex-row flex-col gap-8 justify-center"
                >
                  {row.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
