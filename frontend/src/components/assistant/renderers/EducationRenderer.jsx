const EducationRenderer = ({ message }) => {

  const education = message.data || {};

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
        rounded-xl
        p-5
        "
      >

        <h2 className="text-xl font-bold text-cyan-400">

          🎓 {education.degree}

        </h2>

        <p className="mt-3">
          <strong>Branch :</strong> {education.branch}
        </p>

        <p>
          <strong>College :</strong> {education.college}
        </p>

        <p>
          <strong>University :</strong> {education.university}
        </p>

        <p>
          <strong>Graduation :</strong> {education.year}
        </p>

      </div>

    </div>

  );

};

export default EducationRenderer;