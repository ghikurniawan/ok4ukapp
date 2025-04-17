'use client'

import { useState } from "react";

export default function CertificateForm() {
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
    <div>CertificateForm</div>
  )
}
