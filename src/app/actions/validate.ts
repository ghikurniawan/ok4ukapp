'use server';

import prisma from "@/lib/prisma";

export type CertificateType = {
  id: string;
  certificateId: string;
  userId: string;
  courseId: string;
  issuerId: string;
  accessorId?: string | null;
  issuedDate: Date;
  expiryDate?: Date | null;
  validated: boolean;
  createdAt: Date;

  user: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    role: "STUDENT" | "ISSUER" | "ADMIN";
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    accessorId?: string | null;
  };

  issuer: {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    role: "STUDENT" | "ISSUER" | "ADMIN";
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    accessorId?: string | null;
  };

  course: {
    id: string;
    title: string;
    description?: string | null;
    accessorId?: string | null;
    createdAt: Date;
    updatedAt: Date;
  };

  accessor?: {
    id: string;
    name: string;
    email: string;
    organization?: string | null;
    phone?: string | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export type ValidationResult = {
  valid: boolean;
  data?: CertificateType;
};

export async function validateCertificate(
  _prevState: ValidationResult | null,
  formData: FormData
): Promise<ValidationResult> {
  const certificateCode = formData.get('code') as string;

  const certificate = await prisma.certificate.findUnique({
    where: {
      certificateId: certificateCode,
    },
    include: {
      user: true,       // opsional: info user penerima
      issuer: true,     // opsional: info penerbit
      course: true,     // opsional: info kursus
      accessor: true,   // opsional: info accessor
    },
  });

  if (!certificate) return { valid: false };

  return {
    valid: true,
    data: certificate,
  };
}
