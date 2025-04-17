'use client';

import { useState } from 'react';
import PDFDownloadButton from '@/components/pdf-download-button';
import CertificatePreview from '@/components/certificate-preview';
import { Input } from '@/components/ui/input';

export default function GeneratePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    nvqLevel: 'NVQ Level 2',
    unitTitle: 'Construction Operations',
    issuedDate: new Date().toISOString().split('T')[0],
    certificateId: `OK4UK-${Math.floor(Math.random() * 100000)}`,
    assessorName: 'John Doe',
    trainingCenter: 'OK4UK Academy',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Generate NVQ Certificate</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Input name='fullName' placeholder='Full Name' value={formData.fullName} onChange={handleChange}/>
        <input name="nvqLevel" placeholder="NVQ Level" value={formData.nvqLevel} onChange={handleChange} className="border px-4 py-2 rounded" />
        <input name="unitTitle" placeholder="Unit Title" value={formData.unitTitle} onChange={handleChange} className="border px-4 py-2 rounded" />
        <input type="date" name="issuedDate" value={formData.issuedDate} onChange={handleChange} className="border px-4 py-2 rounded" />
        <input name="assessorName" placeholder="Assessor Name" value={formData.assessorName} onChange={handleChange} className="border px-4 py-2 rounded" />
      </div>
      <CertificatePreview data={formData} />
      <PDFDownloadButton data={formData} />
    </div>
  );
}
