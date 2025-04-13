export default function CertificatePreview({ data }: { data: any }) {
    return (
      <div className="bg-white border shadow p-10 w-[794px] mx-auto text-center font-serif mt-8 print:!hidden">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">OK4UK Academy</h2>
        <h3 className="text-xl font-medium mb-2">Certificate of Achievement</h3>
        <p className="mt-6 text-lg">This is to certify that</p>
        <h2 className="text-2xl font-bold mt-2">{data.fullName || 'Full Name'}</h2>
        <p className="mt-4">has successfully completed</p>
        <h3 className="text-xl font-semibold mt-2">
          {data.nvqLevel} in {data.unitTitle}
        </h3>
        <p className="mt-6">Date Issued: {data.issuedDate}</p>
  
        <div className="flex justify-between items-end mt-12 px-10">
          <div>
            <p className="border-t border-black inline-block mt-4 px-2">{data.assessorName}</p>
            <p className="text-sm">Assessor</p>
          </div>
          <div>
            <p className="text-sm">Issued by {data.trainingCenter}</p>
          </div>
        </div>
      </div>
    );
  }
  