const actions = [

  {
    icon: "💻",
    title: "Projects",
    prompt: "Show Projects",
  },

  {
    icon: "⚡",
    title: "Skills",
    prompt: "Show Skills",
  },

  {
    icon: "🏢",
    title: "Experience",
    prompt: "Show Experience",
  },

  {
    icon: "🏆",
    title: "Certificates",
    prompt: "Show Certificates",
  },

  {
    icon: "🎓",
    title: "Education",
    prompt: "Show Education",
  },

  {
    icon: "📧",
    title: "Contact",
    prompt: "Show Contact",
  },

];

const QuickActions = ({ onSelect }) => {

  return (

    <div className="mb-4">

      <h3 className="text-sm text-slate-400 mb-3">

        🚀 Quick Actions

      </h3>

      <div className="grid grid-cols-2 gap-3">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => onSelect(action.prompt)}
            className="
            bg-slate-800
            hover:bg-blue-600
            rounded-xl
            p-4
            transition
            text-left
            "
          >

            <div className="text-2xl">

              {action.icon}

            </div>

            <div className="mt-2 text-sm font-semibold">

              {action.title}

            </div>

          </button>

        ))}

      </div>

    </div>

  );

};

export default QuickActions;