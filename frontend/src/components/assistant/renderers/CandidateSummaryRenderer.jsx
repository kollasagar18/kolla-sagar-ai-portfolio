import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const CandidateSummaryRenderer = ({ message }) => {

  const summary = message.data?.summary;

  if (!summary) {

    return (
      <p className="text-red-400">
        Candidate summary not available.
      </p>
    );

  }

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div
        className="
        bg-slate-900
        border
        border-slate-700
        rounded-2xl
        p-5
        space-y-5
        "
      >

        {/* Name */}

        <div className="flex items-center gap-3">

          <FaUser className="text-cyan-400 text-xl" />

          <div>

            <h2 className="text-xl font-bold">

              {summary.name}

            </h2>

            <p className="text-slate-400">

              {summary.title}

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <FaBriefcase className="text-blue-400" />

              <span className="font-semibold">

                Experience

              </span>

            </div>

            <p>{summary.experience}</p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <FaProjectDiagram className="text-green-400" />

              <span className="font-semibold">

                Projects

              </span>

            </div>

            <p>{summary.projects}</p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <FaCertificate className="text-yellow-400" />

              <span className="font-semibold">

                Certificates

              </span>

            </div>

            <p>{summary.certificates}</p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2 mb-2">

              <FaCode className="text-purple-400" />

              <span className="font-semibold">

                LeetCode

              </span>

            </div>

            <p>{summary.leetcode}+</p>

          </div>

        </div>

        {/* Education */}

        <div className="bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 mb-2">

            <FaGraduationCap className="text-cyan-400" />

            <span className="font-semibold">

              Education

            </span>

          </div>

          <p>{summary.education}</p>

        </div>

        {/* Skills */}

        <div>

          <div className="flex items-center gap-2 mb-3">

            <FaLaptopCode className="text-green-400" />

            <span className="font-semibold">

              Core Skills

            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {summary.skills.map((skill) => (

              <span
                key={skill}
                className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/20
                text-cyan-300
                text-sm
                "
              >

                {skill}

              </span>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};

export default CandidateSummaryRenderer;