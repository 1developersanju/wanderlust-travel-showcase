import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { api } from '@/lib/api';
import { auth } from '@/lib/firebase';

const ApiTest = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testApiAccessibility = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      // Test if the API base URL is accessible
      const response = await fetch('https://leetravels.cbe.taxi/api/FetchDocs', {
        method: 'GET',
        headers: {
          'Origin': window.location.origin,
        },
      });
      
      const result = {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        accessible: response.ok,
        cors: response.headers.get('access-control-allow-origin') !== null
      };
      
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testAuth = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No user signed in');
      }
      
      const token = await user.getIdToken();
      const tokenInfo = {
        uid: user.uid,
        email: user.email,
        tokenLength: token.length,
        tokenPreview: token.substring(0, 50) + '...',
        isEmailVerified: user.emailVerified,
        providerData: user.providerData.map(p => p.providerId)
      };
      
      setResult(tokenInfo);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testGetUser = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const user = await api.getUser();
      setResult(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const testFetchDocs = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const docs = await api.fetchDocs();
      setResult(docs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>API Integration Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <Button 
                onClick={testApiAccessibility} 
                disabled={loading}
                className="w-full"
              >
                Test API Access
              </Button>
              <Button 
                onClick={testAuth} 
                disabled={loading}
                className="w-full"
              >
                Test Auth
              </Button>
              <Button 
                onClick={testGetUser} 
                disabled={loading}
                className="w-full"
              >
                Test GetUser
              </Button>
              <Button 
                onClick={testFetchDocs} 
                disabled={loading}
                className="w-full"
              >
                Test FetchDocs
              </Button>
            </div>

            {loading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground mt-2">Testing API...</p>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {result && (
              <div className="space-y-2">
                <h4 className="font-medium">Result:</h4>
                <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-96">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Debug Information:</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Current User:</strong> {auth.currentUser ? auth.currentUser.email : 'None'}</p>
                <p><strong>User ID:</strong> {auth.currentUser ? auth.currentUser.uid : 'None'}</p>
                <p><strong>Email Verified:</strong> {auth.currentUser ? auth.currentUser.emailVerified.toString() : 'N/A'}</p>
                <p><strong>Origin:</strong> {window.location.origin}</p>
                <p><strong>API Base URL:</strong> https://leetravels.cbe.taxi/api</p>
                <p><strong>User Agent:</strong> {navigator.userAgent.substring(0, 50)}...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiTest; 