const ListRenderer = ({ message }) => {

  const items = message.data?.items || [];

  return (

    <div className="space-y-3">

      <p className="font-semibold text-cyan-400">

        {message.data?.title}

      </p>

      <ul className="space-y-2">

        {items.map((item, index) => (

          <li
            key={index}
            className="flex items-center gap-2"
          >

            <span className="text-green-400">

              ✔

            </span>

            <span>

              {item}

            </span>

          </li>

        ))}

      </ul>

    </div>

  );

};

export default ListRenderer;