import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { useApi } from '@/hooks/use-api';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Upload, Trash2, LogOut, User as UserIcon, ImageIcon, HardDrive } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  title: string;
  alt: string;
  src: string;
  fileName: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [message, setMessage] = useState('');

  // Base URL for documents
  const DOCUMENTS_BASE_URL = 'https://cbe.taxi/documents/';

  const {
    user: apiUser,
    files,
    loading: apiLoading,
    uploading,
    loadUser,
    loadFiles,
    uploadFile,
    deleteFile,
    formatStorageUsage,
    getStoragePercentage,
  } = useApi();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setLoading(false);
      if (user) {
        loadUser();
        loadFiles();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage('Successfully logged in!');
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('Successfully logged out!');
    } catch (error) {
      console.error('Logout error:', error);
      setMessage('Logout failed. Please try again.');
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
    }
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage('Please select at least one image.');
      return;
    }

    let uploadCount = 0;
    
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        await uploadFile(file);
        uploadCount++;
      }

      setMessage(`Successfully uploaded ${uploadCount} image(s)!`);
      setSelectedFiles(null);
      // Reset the file input
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Upload failed. Please try again.');
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      await deleteFile(fileName);
      setMessage('Image deleted successfully!');
    } catch (error) {
      console.error('Delete error:', error);
      setMessage('Failed to delete image.');
    }
  };

  // Helper function to get the full image URL
  const getImageUrl = (fileName: string) => {
    return `${DOCUMENTS_BASE_URL}${fileName}`;
  };

  // Helper function to get display name
  const getDisplayName = (fileName: string) => {
    return fileName.split('/').pop() || fileName;
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white pt-24">
          <div className="text-center p-4">
            <div className="animate-spin rounded-full h-16 w-16 sm:h-32 sm:w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-base">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!firebaseUser) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white p-4 pt-24">
          <Card className="w-full max-w-sm sm:max-w-md">
            <CardHeader className="text-center space-y-2">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-primary">Admin Login</CardTitle>
              <p className="text-sm sm:text-base text-muted-foreground">Sign in with Google to access the admin panel</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {message && (
                <Alert>
                  <AlertDescription className="text-sm">{message}</AlertDescription>
                </Alert>
              )}
              <Button 
                className="w-full h-12" 
                onClick={handleGoogleLogin}
                size="lg"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-primary">Admin Panel</h1>
                <p className="text-sm text-muted-foreground">Manage your travel gallery and storage</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </section>

      {/* User Info Section */}
      {apiUser && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  User Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                    <p className="text-sm">{apiUser.Email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Domain</Label>
                    <p className="text-sm">{apiUser.Domain}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Storage Usage</Label>
                    <p className="text-sm">{formatStorageUsage(apiUser.Storage)}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Storage Usage</span>
                    <span>{formatStorageUsage(apiUser.Storage)}</span>
                  </div>
                  <Progress value={getStoragePercentage(apiUser.Storage)} className="h-2" />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <HardDrive className="h-3 w-3" />
                    <span>{getStoragePercentage(apiUser.Storage).toFixed(1)}% used</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Upload Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Images
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {message && (
                <Alert>
                  <AlertDescription className="text-sm">{message}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-input">Select Images</Label>
                  <Input
                    id="file-input"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="mt-1"
                  />
                </div>
                <Button
                  onClick={handleUpload}
                  disabled={!selectedFiles || uploading}
                  className="w-full"
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Images
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Management Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="h-5 w-5" />
                Gallery Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              {apiLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-sm text-muted-foreground">Loading images...</p>
                </div>
              ) : files.length === 0 ? (
                <div className="text-center py-8">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No images uploaded yet</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {files.map((file) => (
                    <div
                      key={file.FileName}
                      className="group relative overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={getImageUrl(file.FileName)}
                          alt={getDisplayName(file.FileName)}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-3">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(file.FileName)}
                          className="mt-2 w-full"
                        >
                          <Trash2 className="mr-2 h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin; 