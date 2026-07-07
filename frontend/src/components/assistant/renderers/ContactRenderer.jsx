const ContactRenderer = ({ message }) => {

  const contact = message.data || {};

  return (

    <div className="space-y-5">

      <p className="text-slate-300">
        {message.message}
      </p>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 space-y-4">

        <div>
          <p className="text-cyan-400 font-semibold">📧 Email</p>
          <p>{contact.email}</p>
        </div>

        <div>
          <p className="text-cyan-400 font-semibold">📱 Phone</p>
          <p>{contact.phone}</p>
        </div>

        <div>
          <p className="text-cyan-400 font-semibold">💼 LinkedIn</p>
          <a
            href={contact.linkedin}
            target="_blank"
            className="text-blue-400 underline"
          >
            {contact.linkedin}
          </a>
        </div>

        <div>
          <p className="text-cyan-400 font-semibold">💻 GitHub</p>
          <a
            href={contact.github}
            target="_blank"
            className="text-blue-400 underline"
          >
            {contact.github}
          </a>
        </div>

      </div>

    </div>

  );

};

export default ContactRenderer;