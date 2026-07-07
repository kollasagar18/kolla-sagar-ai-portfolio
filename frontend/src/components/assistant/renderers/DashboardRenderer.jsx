import {
  FaUserTie,
  FaProjectDiagram,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaStar,
} from "react-icons/fa";

const DashboardRenderer = ({ message }) => {

  const dashboard = message.data?.dashboard;

  if (!dashboard) {

    return (
      <p className="text-red-400">
        Dashboard data not available.
      </p>
    );

  }

  return (

    <div className="space-y-5">

      <p className="text-slate-300">
        {message.message}
      </p>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

        {/* Header */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-2xl">

            <FaUserTie />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">

              {dashboard.name}

            </h2>

            <p className="text-cyan-400">

              {dashboard.title}

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2">

              <FaProjectDiagram className="text-green-400"/>

              <span>Projects</span>

            </div>

            <p className="text-2xl font-bold mt-2">

              {dashboard.projects}

            </p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2">

              <FaBriefcase className="text-blue-400"/>

              <span>Internships</span>

            </div>

            <p className="text-2xl font-bold mt-2">

              {dashboard.internships}

            </p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2">

              <FaCertificate className="text-yellow-400"/>

              <span>Certificates</span>

            </div>

            <p className="text-2xl font-bold mt-2">

              {dashboard.certificates}

            </p>

          </div>

          <div className="bg-slate-800 rounded-xl p-4">

            <div className="flex items-center gap-2">

              <FaCode className="text-purple-400"/>

              <span>LeetCode</span>

            </div>

            <p className="text-2xl font-bold mt-2">

              {dashboard.leetcode}+

            </p>

          </div>

        </div>

        {/* Best Project */}

        <div className="mt-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-5">

          <div className="flex items-center gap-2 text-yellow-400">

            <FaStar />

            <span className="font-semibold">

              Best Project

            </span>

          </div>

          <p className="text-lg font-bold mt-3">

            {dashboard.best_project}

          </p>

        </div>

        {/* Skills */}

        <div className="mt-6">

          <h3 className="font-semibold text-cyan-400 mb-3">

            Core Skills

          </h3>

          <div className="flex flex-wrap gap-2">

            {dashboard.skills.map((skill) => (

              <span

                key={skill}

                className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"

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

export default DashboardRenderer;