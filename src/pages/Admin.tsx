import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, googleProvider, storage, db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Upload, Trash2, LogOut, User as UserIcon, ImageIcon } from "lucide-react";
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        loadImages();
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

  const loadImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'gallery'));
      const loadedImages: GalleryImage[] = [];
      querySnapshot.forEach((doc) => {
        loadedImages.push({ id: doc.id, ...doc.data() } as GalleryImage);
      });
      setImages(loadedImages);
    } catch (error) {
      console.error('Error loading images:', error);
      setMessage('Failed to load images.');
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
    }
  };

  const generateDefaultTitle = (fileName: string) => {
    const name = fileName.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/[-_]/g, ' ');
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setMessage('Please select at least one image.');
      return;
    }

    setUploading(true);
    let uploadCount = 0;
    
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        
        // Upload to Firebase Storage
        const fileName = `gallery/${Date.now()}_${file.name}`;
        const storageRef = ref(storage, fileName);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Generate default title and alt from filename
        const defaultTitle = generateDefaultTitle(file.name);
        const defaultAlt = `Travel image - ${defaultTitle}`;

        // Save metadata to Firestore
        await addDoc(collection(db, 'gallery'), {
          title: defaultTitle,
          alt: defaultAlt,
          src: downloadURL,
          fileName: fileName,
          uploadedAt: new Date()
        });
        
        uploadCount++;
      }

      setMessage(`Successfully uploaded ${uploadCount} image(s)!`);
      setSelectedFiles(null);
      // Reset the file input
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      loadImages(); // Reload images
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image: GalleryImage) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      // Delete from Storage
      const storageRef = ref(storage, image.fileName);
      await deleteObject(storageRef);

      // Delete from Firestore
      await deleteDoc(doc(db, 'gallery', image.id));

      setMessage('Image deleted successfully!');
      loadImages(); // Reload images
    } catch (error) {
      console.error('Delete error:', error);
      setMessage('Failed to delete image.');
    }
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

  if (!user) {
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
              <Button 
                variant="outline" 
                className="w-full h-12" 
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
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
      
      {/* Admin Header */}
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Admin Dashboard</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Welcome, {user.displayName}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button variant="outline" onClick={() => navigate('/')} size="sm" className="h-10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <Button variant="outline" onClick={handleLogout} size="sm" className="h-10">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div>
                  <CardTitle className="text-lg sm:text-xl flex items-center">
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Upload Images
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Select one or multiple images to upload</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {message && (
                <Alert>
                  <AlertDescription className="text-sm">{message}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="file-input" className="text-sm font-medium">Select Images</Label>
                  <div className="mt-2">
                    <Input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileSelect}
                      className="cursor-pointer file:cursor-pointer file:bg-primary file:text-white file:border-0 file:rounded-md file:px-4 file:py-2 file:mr-4 hover:file:bg-primary/90"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    You can select multiple images at once. Supported formats: JPG, PNG, WebP
                  </p>
                </div>
                
                {selectedFiles && selectedFiles.length > 0 && (
                  <div className="bg-secondary/30 p-3 sm:p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Selected files ({selectedFiles.length}):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {Array.from(selectedFiles).map((file, index) => (
                        <div key={index} className="text-xs bg-white p-2 rounded border flex items-center">
                          <ImageIcon className="h-3 w-3 mr-2 text-primary" />
                          <span className="truncate">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleUpload} 
                  disabled={uploading || !selectedFiles || selectedFiles.length === 0}
                  className="w-full sm:w-auto h-12 px-6"
                  size="lg"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {uploading ? `Uploading...` : `Upload ${selectedFiles?.length || 0} Image(s)`}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Management */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">Gallery Management</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Manage your uploaded images ({images.length} total)</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base mb-1 truncate" title={image.title}>
                    {image.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2" title={image.alt}>
                    {image.alt}
                  </p>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(image)}
                    className="w-full h-9"
                  >
                    <Trash2 className="mr-2 h-3 w-3" />
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {images.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="mx-auto bg-gray-100 p-4 rounded-full w-fit mb-4">
                <ImageIcon className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">No images uploaded yet.</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Upload your first image to get started!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin; 