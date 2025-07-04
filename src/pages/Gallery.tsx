import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MessageCircle, ImageIcon, X, ZoomIn, Share2, Download } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { api } from '@/lib/api';

interface GalleryImage {
  FileName: string;
}

const Gallery = () => {
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Base URL for documents
  const DOCUMENTS_BASE_URL = 'https://cbe.taxi/documents/';

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Loading images from API...');
      
      const filesData = await api.fetchDocs();
      console.log('Fetched files:', filesData);
      
      if (filesData && filesData.length > 0) {
        setGalleryImages(filesData);
        console.log('Using uploaded images:', filesData.length, 'images');
      } else {
        setGalleryImages([]);
        console.log('No uploaded images found');
      }
    } catch (error) {
      console.error('Error loading images:', error);
      setError('Failed to load images from server');
      setGalleryImages([]);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (image: GalleryImage) => {
    return `${DOCUMENTS_BASE_URL}${image.FileName}`;
  };

  const getDisplayName = (image: GalleryImage) => {
    return image.FileName.split('/').pop() || image.FileName;
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white pt-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 sm:h-32 sm:w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-base">Loading gallery...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80"
            alt="Travel Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Travel Gallery
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 px-2 sm:px-4 leading-relaxed">
              Discover the beauty of South India through our curated collection of travel moments
            </p>
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Journey Gallery</h2>
            <p className="section-subheading">
              {galleryImages.length > 0 
                ? "Experience the breathtaking destinations we cover across South India"
                : "No images uploaded yet"
              }
            </p>
          </div>
          
          {galleryImages.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto bg-gray-100 p-8 rounded-full w-fit mb-6">
                <ImageIcon className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Gallery is Empty</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                No travel images have been uploaded yet. Check back soon to see beautiful travel moments from South India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="w-full sm:w-auto"
                >
                  View Our Services
                </Button>
                <a 
                  href="https://wa.me/+917373555444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={getImageUrl(image)}
                      alt={`Travel image ${index + 1}`}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-7xl w-full mx-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={getImageUrl(selectedImage)}
                alt="Selected travel image"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              
              {/* Image Actions */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <p className="text-sm font-medium truncate">
                    {getDisplayName(selectedImage)}
                  </p>
                  <div className="flex gap-4">
                    <button className="hover:text-gray-300 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="hover:text-gray-300 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-b from-white to-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="text-center mb-12">
            <h2 className="section-heading text-white">Ready to Create Your Own Memories?</h2>
            <p className="section-subheading text-gray-200">
              Let us help you plan your perfect South Indian adventure
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-black hover:bg-white hover:text-primary px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px]"
              onClick={() => navigate('/')}
            >
              View Our Services
            </Button>
            <a 
              href="https://wa.me/+917373555444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px]"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery; 