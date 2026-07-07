const ExperienceRenderer = ({ message }) => {

  const experiences = message.data?.experience || [];

  return (

    <div className="space-y-5">

      <p className="text-slate-300">
        {message.message}
      </p>

      {experiences.map((exp, index) => (

        <div
          key={index}
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-5
          "
        >

          <h3 className="text-xl font-bold text-cyan-400">

            {exp.role}

          </h3>

          <p className="text-white mt-1">

            {exp.company}

          </p>

          <p className="text-slate-400">

            {exp.duration}

          </p>

        </div>

      ))}

    </div>

  );

};

export default ExperienceRenderer;