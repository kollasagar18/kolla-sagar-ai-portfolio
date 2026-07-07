const ProjectResponsibilitiesRenderer = ({ message }) => {

  const list = message.data?.responsibilities || [];

  return (

    <div className="space-y-4">

      <p>{message.message}</p>

      {list.map((item) => (

        <div
          key={item}
          className="p-4 rounded-xl bg-slate-900 border border-slate-700"
        >

          ✅ {item}

        </div>

      ))}

    </div>

  );

};

export default ProjectResponsibilitiesRenderer;