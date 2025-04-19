'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useActionState } from 'react';
import { CertificateType, validateCertificate, type ValidationResult } from '@/app/actions/validate';

export default function ValidateCard({certificate} : {certificate? : CertificateType}) {

    const [state, formAction] = useActionState<ValidationResult | null, FormData>(
        validateCertificate,
        null
      );
      console.log(certificate?.certificateId)
  return (
    <Card className="w-full max-w-md shadow-xl">
    <CardHeader>
      <CardTitle className="text-center text-xl">Certificate Validation</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <form action={formAction} className="space-y-4">
        <Input
          name="code"
          placeholder="Enter certificate code"
          required
          defaultValue={certificate?.certificateId}
            readOnly={!!certificate}
        />
        <Button type="submit" className="w-full">
          Validate
        </Button>
      </form>

      {certificate && (
        <div className="mt-4 space-y-2">
          {certificate ? (
            <Card className="bg-green-100 border-green-300">
              <CardHeader>
                <Badge className="text-green-700 bg-green-200">
                  Certificate is valid
                </Badge>
              </CardHeader>
              <CardContent className="text-sm text-primary">
                <p><strong>Name:</strong> {certificate.user?.name}</p>
                <p><strong>Course:</strong> {certificate.course.title}</p>
                <p><strong>Date:</strong> {certificate.createdAt.toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-red-100 border-red-300">
              <CardHeader>
                <Badge variant="destructive" className="text-red-700 bg-red-200">
                  Not Found
                </Badge>
              </CardHeader>
              <CardContent className="text-sm text-red-700">
                Certificate not found or is invalid.
              </CardContent>
            </Card>
          )}
        </div>
      )}
      {state && (
        <div className="mt-4 space-y-2">
          {state.valid && state.data ? (
            <Card className="bg-green-100 border-green-300">
              <CardHeader>
                <Badge className="text-green-700 bg-green-200">
                  Certificate is valid
                </Badge>
              </CardHeader>
              <CardContent className="text-sm text-primary">
                <p><strong>Name:</strong> {state.data.user?.name}</p>
                <p><strong>Course:</strong> {state.data.course.title}</p>
                <p><strong>Date:</strong> {state.data.createdAt.toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-red-100 border-red-300">
              <CardHeader>
                <Badge variant="destructive" className="text-red-700 bg-red-200">
                  Not Found
                </Badge>
              </CardHeader>
              <CardContent className="text-sm text-red-700">
                Certificate not found or is invalid.
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </CardContent>
  </Card>
  )
}
