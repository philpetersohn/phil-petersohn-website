import { FaLanguage } from "react-icons/fa";

function Languages() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-blue-600 text-5xl font-bold mb-6 mt-32">
          Languages
        </h1>
        <div className="flex items-center mb-6">
          <FaLanguage className="text-blue-600 text-3xl mr-2" />
          <h2 className="text-blue-600 text-3xl font-bold">
            Languages I Speak
          </h2>
        </div>
        <ul className="list-disc list-inside space-y-2 text-xl mb-6">
          <li className="flex items-start">
            <span className="inline-block">English</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block">German</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block">Spanish</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Languages;
