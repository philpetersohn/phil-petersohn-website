import { FaCode } from "react-icons/fa";
import "./coreCompetencies.css";

export default function CoreCompetencies() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center mb-6 mt-6">
        <FaCode className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl md:text-3xl font-bold text-nowrap">
          Core Competencies
        </h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <ul className="list-disc space-y-2 text-lg mb-6 pl-6 blue-bullets">
          <li>
            Full Stack Development (React, TypeScript, Node.js, Express,
            MongoDB)
          </li>
          <li>Cloud technologies (AWS)</li>
          <li>Database Design and Management</li>
          <li>RESTful API Development</li>
          <li>Deep Work & Productivity Optimizations</li>
          <li>Responsive Web Design</li>
          <li>Problem-Solving & Debugging</li>
          <li>Version Control (Git)</li>
          <li>Agile Methodologies (Scrum, Kanban)</li>
          <li>Committed to continuous learning and improvement</li>
        </ul>
      </div>
    </div>
  );
}
