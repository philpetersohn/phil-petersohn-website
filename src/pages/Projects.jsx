import ProjectCard from '../components/ProjectCard'
import { useEffect } from 'react'

const Projects = () => {
  useEffect(() => {
    const section = document.querySelector('section')
    section.classList.add('slide-in')
  }, [])

  const projects = [
    {
      title: 'Task Management App',
      description: 'I created a task management app using the MERN stack.',
      techStack: [
        'React',
        'JavaScript',
        'TailwindCSS',
        'ChakraUI',
        'Node.js',
        'Express',
        'MongoDB',
      ],
      githubLink: 'https://github.com/philpetersohn/nre-mern',
    },
    {
      title: 'Pizza App',
      description: 'I created a pizza app using React.',
      techStack: [
        'React',
        'JavaScript',
        'CSS3',
        'HTML5',
        'Node.js',
      ],
      githubLink: 'https://github.com/philpetersohn/pizza-app',
    },
    {
      title: 'Intro to Node.js',
      description:
        'I created a Node.js app. This is a simple app that demonstrates how to use Node.js.',
      techStack: ['Node.js', 'JavaScript', 'NPM', 'CLI', 'Jest'],
      githubLink: 'https://github.com/philpetersohn/intro-to-node',
    },
    {
      title: 'API design in Node.js',
      description:
        'I created a API design with Node.js. The API connects to a PostgreSQL database',
      techStack: [
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Express',
        'PostgreSQL',
        'Jest',
      ],
      githubLink: 'https://github.com/philpetersohn/api-design-node',
    },
  ]

  return (
    <section className="bg-gray-100 px-8 md:px-16 lg:px-0">
      <div className="container mx-auto">
        <h2 className="text-blue-600 text-4xl md:text-6xl font-bold mt-16 text-center mb-6">
          My Projects
        </h2>
        <div className="flex flex-col space-y-8 mb-8 md:mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
