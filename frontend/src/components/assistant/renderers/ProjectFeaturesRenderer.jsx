const ProjectFeaturesRenderer = ({ message }) => {

  const features = message.data?.features || [];

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div className="grid gap-3">

        {features.map((feature) => (

          <div
            key={feature}
            className="
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            bg-slate-900
            border
            border-slate-700
            "
          >

            <span className="text-green-400">

              ✔

            </span>

            <span>

              {feature}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ProjectFeaturesRenderer;