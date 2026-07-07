const CertificateRenderer = ({ message }) => {

  const certificates = message.data?.certificates || [];

  return (

    <div className="space-y-5">

      <p className="text-slate-300">

        {message.message}

      </p>

      <div className="grid gap-3">

        {certificates.map((certificate, index) => (

          <div
            key={certificate.title || index}
            className="
            bg-slate-900
            border
            border-slate-700
            rounded-xl
            p-4
            "
          >

            <div className="flex items-center gap-3">

              <span className="text-2xl">

                🏆

              </span>

              <div>

                <h3 className="font-semibold text-white">

                  {certificate.title}

                </h3>

                <p className="text-slate-400 text-sm mt-1">

                  {certificate.issuer}

                </p>

                <p className="text-cyan-400 text-xs mt-1">

                  {certificate.year}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default CertificateRenderer;