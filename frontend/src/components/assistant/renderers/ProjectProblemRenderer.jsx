const ProjectProblemRenderer = ({ message }) => {

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div
        className="
        rounded-2xl
        bg-red-500/10
        border
        border-red-500/30
        p-5
        "
      >

        <h3 className="text-red-400 font-bold mb-3">

          Problem

        </h3>

        <p className="text-slate-300 leading-8">

          {message.data.problem}

        </p>

      </div>

    </div>

  );

};

export default ProjectProblemRenderer;