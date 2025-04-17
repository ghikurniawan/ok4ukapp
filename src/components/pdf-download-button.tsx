'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { CertificatePDF } from './certificate-pdf';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function PDFDownloadButton({ data }: { data: any }) {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Pastikan ini hanya true saat render di browser
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <PDFDownloadLink
      document={<CertificatePDF data={data} qrCodeBase64={''} />}
      fileName={`${data.fullName || 'NVQ-Certificate'}.pdf`}
    >
      {({ loading }) =>
        loading ? (
          <Button disabled>Loading PDF...</Button>
        ) : (
          <Button>Download PDF</Button>
        )
      }
    </PDFDownloadLink>
  );
}
