const ProjectFutureRenderer = ({ message }) => {

  const future = message.data?.future || [];

  return (

    <div className="space-y-4">

      <p>{message.message}</p>

      {future.map((item) => (

        <div
          key={item}
          className="rounded-xl bg-purple-500/10 border border-purple-500/30 p-4"
        >

          🚀 {item}

        </div>

      ))}

    </div>

  );

};

export default ProjectFutureRenderer;