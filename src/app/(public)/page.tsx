'use client';

import { useActionState } from 'react';
import { validateCertificate, type ValidationResult } from './actions/validate';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const [state, formAction] = useActionState<ValidationResult | null, FormData>(
    validateCertificate,
    null
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
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
            />
            <Button type="submit" className="w-full">
              Validate
            </Button>
          </form>

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
                    <p><strong>Name:</strong> {state.data.name}</p>
                    <p><strong>Event:</strong> {state.data.event}</p>
                    <p><strong>Date:</strong> {state.data.date}</p>
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
    </main>
  );
}
