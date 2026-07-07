const ProjectHighlightsRenderer = ({ message }) => {

  const highlights = message.data?.highlights || [];

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div className="grid gap-3">

        {highlights.map((item) => (

          <div
            key={item}
            className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex gap-3"
          >

            ⭐

            <span>{item}</span>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ProjectHighlightsRenderer;