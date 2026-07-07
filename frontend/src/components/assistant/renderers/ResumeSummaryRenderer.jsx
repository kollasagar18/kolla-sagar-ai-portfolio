const ResumeSummaryRenderer = ({ message }) => {

  const data = message.data;

  return (

    <div className="space-y-5">

      <p className="text-slate-300">
        {message.message}
      </p>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">

        <h2 className="text-2xl font-bold text-cyan-400">
          {data.name}
        </h2>

        <p className="text-slate-300 mt-1">
          {data.title}
        </p>

        <p className="text-slate-400 mt-4">
          {data.summary}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

          <div>
            <strong>Education</strong>
            <br />
            {data.education}
          </div>

          <div>
            <strong>College</strong>
            <br />
            {data.college}
          </div>

          <div>
            <strong>Experience</strong>
            <br />
            {data.experience}
          </div>

          <div>
            <strong>Projects</strong>
            <br />
            {data.projects}
          </div>

          <div>
            <strong>Internships</strong>
            <br />
            {data.internships}
          </div>

          <div>
            <strong>Certificates</strong>
            <br />
            {data.certificates}
          </div>

          <div>
            <strong>LeetCode</strong>
            <br />
            {data.leetcode}+
          </div>

        </div>

      </div>

    </div>

  );

};

export default ResumeSummaryRenderer;