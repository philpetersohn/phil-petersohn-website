import { FaBriefcase } from "react-icons/fa";
import "./coreCompetencies.css";

function WorkExperience() {
  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="flex items-center mb-6 mt-6">
        <FaBriefcase className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl font-bold">Work Experience</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h1 className="font-bold text-xl">
          Full Stack Developer | GFT Technologies SE | Remote
        </h1>
        <p className="italic text-lg mb-2">Feb 2024 - Aug 2024</p>
        <ul className="list-disc space-y-2 text-lg mb-6 pl-6 blue-bullets">
          <li>
            Designed, created and maintained key features using React,
            TypeScript, and Node.js, ensuring the delivery of scalable and
            robust components that enhanced the products core functionality
          </li>
          <li>
            Utilized AWS Lambda, S3, and Parameter Store to create a scalable,
            serverless application for managing user data, automating processes
            to improve efficiency, and securely storing configuration
            parameters, which resulted in faster deployment times and reduced
            operational overhead
          </li>
          <li>
            Improved application test coverage using Jest and Cypress, which
            reduced bugs in production and enhanced overall code reliability
          </li>
          <li>
            Optimized application performance by monitoring with Datadog,
            leading to a 25% improvement in load times and smoother user
            experiences
          </li>
          <li>
            Spearheaded code review processes with source control management,
            establishing best practices and guidelines that elevated code
            quality and maintainability
          </li>
          <li>
            Collaborated with team members during Scrum meetings, fostering
            cross-functional communication, which increased team productivity by
            streamlining task prioritization and issue resolution
          </li>
          <li>
            Contributed to DevOps methodology for CI/CD, allowing for multiple
            developers and business teams to collaborate and release changes
            simultaneously
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h1 className="font-bold text-xl">
          Frontend Developer | Thinslices | Hybrid
        </h1>
        <p className="italic text-lg mb-2">May 2021 - Dec 2023</p>
        <ul className="list-disc space-y-2 text-lg mb-6 pl-6 blue-bullets">
          <li>
            Implemented dynamic content filtering using Next, React, and
            TypeScript, improving content discovery speed by 40% and enhancing
            user engagement
          </li>
          <li>
            Integrated AI-based tool for automating content categorization,
            reducing manual categorization efforts by 50% and increasing user
            efficiency and platform scalability
          </li>
          <li>
            Ensured responsiveness and cross-browser compatibility using
            Tailwind CSS, resulting in a seamless user experience across
            devices, with a 20% increase in mobile user retention
          </li>
          <li>
            Enhanced platform accessibility by applying HTML5 and SEO best
            practices, improving both user experience for diverse audiences and
            search engine visibility, leading to a 15% boost in organic traffic
          </li>
          <li>
            Conducted code reviews with GitHub and actively participated in the
            agile development process, ensuring timely, efficient product
            delivery while maintaining high code quality and reducing technical
            debt
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <h1 className="font-bold text-xl">
          Intern Frontend Developer | Thinslices | Hybrid
        </h1>
        <p className="italic text-lg mb-2">Feb 2021 - Apr 2021</p>
        <ul className="list-disc space-y-2 text-lg mb-6 pl-6 blue-bullets">
          <li>
            Learned HTML5, CSS3, and JavaScript through books, videos, and
            documentation, developing a strong foundation in front-end web
            development and best practices
          </li>
          <li>
            Collaborated on projects from Frontend Mentor with multiple team
            members, gaining hands-on experience in code reviews, agile
            methodologies, and working with tools like Jira, while effectively
            managing time and tasks
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkExperience;
