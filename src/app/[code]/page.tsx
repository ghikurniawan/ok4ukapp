import ValidateCard from "@/components/validate-card";
import prisma from "@/lib/prisma";

interface PageProps {
  params: {
    code: string;
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const { code } = await params;
  const certificate = await prisma.certificate.findUnique({
    where: {
      certificateId: code,
    },
    include: {
      user: true,
      issuer: true,
      course: true,
      accessor: true,
    },
  });
  
  if (!certificate) {
    return (
      <main className="flex items-center justify-center min-h-screen p-6">
        <p>Certificate not found.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <ValidateCard certificate={certificate} />
    </main>
  );
}