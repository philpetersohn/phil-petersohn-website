import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center mb-6">
        <FaGraduationCap className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl font-bold">Education</h1>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-2">
          Bachelor of Science | International University IU | Online
        </h1>
        <p className="italic text-xl mb-2">2020 - 2022</p>
        <h1 className="font-bold text-xl">
          Apprenticeship | Technical University of Berlin | Berlin
        </h1>
        <p className="italic text-xl mb-2">2012</p>
      </div>
    </div>
  );
}
