const ProjectLearningRenderer = ({ message }) => {

  const learning = message.data?.learning || [];

  return (

    <div className="space-y-4">

      <p>{message.message}</p>

      {learning.map((item) => (

        <div
          key={item}
          className="rounded-xl bg-green-500/10 border border-green-500/30 p-4"
        >

          📚 {item}

        </div>

      ))}

    </div>

  );

};

export default ProjectLearningRenderer;