import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center my-6">
        <FaGraduationCap className="text-blue-600 text-3xl mr-2" />
        <h1 className="text-blue-600 text-3xl font-bold">Education</h1>
      </div>
      <div className="bg-white">
        <div className="shadow-md p-4 mb-4">
          <h1 className="font-bold text-lg">
            Bachelor of Science | International University IU | Online
          </h1>
          <p className="italic text-lg">2020 - 2022</p>
        </div>
        <div className="shadow-md p-4">
          <h1 className="font-bold text-lg">
            Apprenticeship | Technical University of Berlin | Berlin
          </h1>
          <p className="italic text-lg mb-2">2012</p>
        </div>
      </div>
    </div>
  );
}
