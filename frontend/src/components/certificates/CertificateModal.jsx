import {
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const CertificateModal = ({ certificate, onClose }) => {

  if (!certificate) return null;

  return (

    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-6">

      <div className="bg-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-slate-700">

          <div>

            <h2 className="text-3xl font-bold">

              {certificate.title}

            </h2>

            <p className="text-slate-400 mt-2">

              {certificate.organization}

            </p>

          </div>

          <button
            onClick={onClose}
            className="text-3xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Certificate */}

        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full object-contain max-h-[600px]"
        />

        {/* Footer */}

        <div className="p-6 flex flex-wrap gap-4">

          <a
            href={certificate.pdf}
            download
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 transition"
          >
            <FaDownload />

            Download Certificate

          </a>

        </div>

      </div>

    </div>

  );

};

export default CertificateModal;