const ProjectCompareRenderer = ({ message }) => {

  const projects = message.data?.projects || [];

  return (

    <div className="space-y-6">

      <h2 className="text-xl font-bold">

        {message.message}

      </h2>

      <div className="overflow-auto">

        <table className="w-full border border-slate-700">

          <thead>

            <tr className="bg-slate-900">

              <th className="p-3 border">Property</th>

              <th className="p-3 border">

                {projects[0]?.title}

              </th>

              <th className="p-3 border">

                {projects[1]?.title}

              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="border p-3">

                Category

              </td>

              <td className="border p-3">

                {projects[0]?.category}

              </td>

              <td className="border p-3">

                {projects[1]?.category}

              </td>

            </tr>

            <tr>

              <td className="border p-3">

                Duration

              </td>

              <td className="border p-3">

                {projects[0]?.duration}

              </td>

              <td className="border p-3">

                {projects[1]?.duration}

              </td>

            </tr>

            <tr>

              <td className="border p-3">

                Role

              </td>

              <td className="border p-3">

                {projects[0]?.role}

              </td>

              <td className="border p-3">

                {projects[1]?.role}

              </td>

            </tr>

            <tr>

              <td className="border p-3">

                Technologies

              </td>

              <td className="border p-3">

                {projects[0]?.tech.join(", ")}

              </td>

              <td className="border p-3">

                {projects[1]?.tech.join(", ")}

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ProjectCompareRenderer;