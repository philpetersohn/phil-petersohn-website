import { FaCode } from "react-icons/fa";

export default function CoreCompetencies() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center mb-6">
        <FaCode className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl font-bold">Core Competencies</h1>
      </div>
      <ul className="list-disc list-inside pl-8 space-y-2 text-xl mb-6">
        <li>Full Stack Development (React, TypeScript, Node.js, MongoDB)</li>
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
  );
}
