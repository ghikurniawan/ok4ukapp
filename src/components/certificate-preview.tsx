
export default function CertificatePreview({ data }: { data: any }) {
  return (
    <div className="bg-white text-slate-600 border shadow p-4 md:p-10 w-full md:w-[794px] aspect-[4/3] mx-auto text-center font-serif mt-8 print:!hidden overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">OK4UK Academy</h2>
      <h3 className="text-lg md:text-xl font-medium mb-2">Certificate of Achievement</h3>
      <p className="mt-4 md:mt-6 text-base md:text-lg">This is to certify that</p>
      <h2 className="text-xl md:text-2xl font-bold mt-2">{data.fullName || 'Full Name'}</h2>
      <p className="mt-4">has successfully completed</p>
      <h3 className="text-lg md:text-xl font-semibold mt-2">
        {data.nvqLevel} in {data.unitTitle}
      </h3>
      <p className="mt-6">Date Issued: {data.issuedDate}</p>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-12 px-6">
        {/* Assessor */}
        <div className="text-center">
          <p className="border-t border-black inline-block mt-4 px-2">{data.assessorName}</p>
          <p className="text-sm">Assessor</p>
        </div>

        {/* QR Code */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Scan to verify the certificate:</p>
          {/* <QRCodeComponent value={data.certificateId} /> */}
        </div>

        {/* Issuer */}
        <div className="text-center">
          <p className="text-sm">Issued by {data.trainingCenter}</p>
        </div>
      </div>
    </div>
  );
}
