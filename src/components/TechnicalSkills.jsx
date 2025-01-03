import { FaCode } from "react-icons/fa";
import Card from "./Card";

export default function TechnicalSkills() {
  const cardData = [
    {
      title: "Frontend",
      description:
        "React, Next.js, JavaScript, TypeScript, HTML5, CSS3, TailwindCSS, Responsive Design",
    },
    {
      title: "Backend",
      description: "Node.js, Amazon Web Services, RESTful APIs, Express, MongoDB, PostgreSQL",
    },
    {
      title: "Tools",
      description: "Git, VS Code, Jira, Kanban, Babel, Npm/Yarn, webpack, Jest, Cypress",
    },
  ];

  return (
    <div className="w-full max-w-4xl mt-6">
      <div className="flex items-center">
        <FaCode className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl md:text-3xl font-bold">
          Technical Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}
