const SkillsRenderer = ({ message }) => {

  const skills = message.data || {};

  return (

    <div className="space-y-5">

      <p className="text-slate-300">
        {message.message}
      </p>

      {Object.entries(skills).map(([category, values]) => (

        <div
          key={category}
          className="
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-4
          "
        >

          <h3 className="text-cyan-400 font-bold capitalize mb-3">
            {category}
          </h3>

          <div className="flex flex-wrap gap-2">

            {values.map((skill) => (

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

      ))}

    </div>

  );

};

export default SkillsRenderer;