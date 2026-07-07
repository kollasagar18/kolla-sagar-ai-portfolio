import { useState } from "react";

import { usePortfolio } from "../../context/PortfolioContext";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

const CertificateGrid = () => {

  const { portfolio, loading } = usePortfolio();

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  if (loading) {

    return (

      <div className="text-center py-20 text-slate-400">

        Loading Certificates...

      </div>

    );

  }

  if (!portfolio) {

    return null;

  }

  const certificates = portfolio.certificates || [];

  return (

    <>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {certificates.map((certificate, index) => (

          <CertificateCard
            key={certificate.id || index}
            certificate={certificate}
            onView={() => setSelectedCertificate(certificate)}
          />

        ))}

      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

    </>

  );

};

export default CertificateGrid;