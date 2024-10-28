import { FaLanguage } from "react-icons/fa";

function Languages() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center mb-6">
        <FaLanguage className="text-blue-600 text-3xl mr-2" />
        <h2 className="text-blue-600 text-3xl font-bold">Languages I Speak</h2>
      </div>
      <ul className="list-disc space-y-2 text-xl mb-6">
        <li>English</li>
        <li>German</li>
      </ul>
    </div>
  );
}

export default Languages;
