'use server';

export type Certificate = {
  code: string;
  name: string;
  event: string;
  date: string;
};

const dummyDB: Certificate[] = [
  { code: 'abc123', name: 'Alice Johnson', event: 'Web Workshop', date: '2025-04-01' },
  { code: 'xyz789', name: 'Bob Smith', event: 'AI Training', date: '2025-03-15' },
];

export type ValidationResult = {
  valid: boolean;
  data?: Certificate;
};

export async function validateCertificate(
  _prevState: ValidationResult | null,
  formData: FormData
): Promise<ValidationResult> {
  const code = formData.get('code') as string;

  const cert = dummyDB.find((c) => c.code === code);

  if (!cert) return { valid: false };

  return {
    valid: true,
    data: cert,
  };
}
