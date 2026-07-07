import {
  FaCalendarAlt,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const CertificateCard = ({ certificate, onView }) => {
  return (
    <div
      className="
      group
      bg-slate-900/90
      backdrop-blur-md
      border
      border-slate-700
      rounded-3xl
      overflow-hidden
      shadow-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400
      hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
      "
    >
      {/* Certificate Image */}

      <div className="overflow-hidden">

        <img
          src={certificate.image}
          alt={certificate.title}
          className="
          w-full
          h-60
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
          "
        />

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Category */}

        <span
          className="
          inline-block
          px-4
          py-1
          rounded-full
          bg-blue-600/20
          text-blue-400
          text-sm
          "
        >
          {certificate.category}
        </span>

        {/* Title */}

        <h3 className="text-xl font-bold mt-4">
          {certificate.title}
        </h3>

        {/* Organization */}

        <p className="text-slate-400 mt-2">
          {certificate.organization}
        </p>

        {/* Date */}

        <div className="flex items-center gap-2 mt-4 text-slate-400">

          <FaCalendarAlt />

          {certificate.date}

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <button
        onClick={onView}
        className="
        flex-1
        flex
        justify-center
        items-center
        gap-2
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        transition
        "
        >

        <FaEye />

        View

        </button>

          <a
            href={certificate.pdf}
            download
            className="
            flex-1
            flex
            justify-center
            items-center
            gap-2
            py-3
            rounded-xl
            border
            border-slate-600
            hover:border-cyan-400
            hover:bg-slate-800
            transition
            "
          >
            <FaDownload />

            Download

          </a>

        </div>

      </div>

    </div>
  );
};

export default CertificateCard;