import { FaCode } from "react-icons/fa";
import Card from "./Card";

export default function TechnicalSkills() {
  const cardData = [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, TailwindCSS, Responsive Design",
    },
    {
      title: "Backend Development",
      description: "Node.js, AWS, RESTful APIs, Express, MongoDB, Mongoose",
    },
    {
      title: "Tools",
      description: "Git, VS Code, Jira, Jest, npm, Cypress",
    },
  ];

  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center mb-6">
        <FaCode className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl font-bold">Technical Skills</h1>
      </div>
      <div className="flex justify-center space-x-4">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}
