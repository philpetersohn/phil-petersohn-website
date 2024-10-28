import { FaLanguage } from "react-icons/fa";
import "./coreCompetencies.css";

function Languages() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center my-6">
        <FaLanguage className="text-blue-600 text-3xl mr-2" />
        <h2 className="text-blue-600 text-3xl font-bold">Languages</h2>
      </div>
      <div className="flex items-start">
        <ul className="list-disc space-y-2 text-lg mb-6 blue-bullets pl-8">
          <li>English</li>
          <li>German</li>
        </ul>
      </div>
    </div>
  );
}

export default Languages;
