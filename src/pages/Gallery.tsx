import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface GalleryImage {
  id: string;
  title: string;
  alt: string;
  src: string;
  fileName: string;
}

const Gallery = () => {
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Default fallback images in case no images are uploaded yet
  const defaultImages = [
    {
      id: "default-1",
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800",
      alt: "Scenic Mountain View",
      title: "Mountain Adventures",
      fileName: ""
    },
    {
      id: "default-2",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
      alt: "Beach Sunset",
      title: "Coastal Journeys",
      fileName: ""
    },
    {
      id: "default-3",
      src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73925?auto=format&fit=crop&q=80&w=800",
      alt: "Temple Architecture",
      title: "Cultural Heritage",
      fileName: ""
    },
    {
      id: "default-4",
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800",
      alt: "Backwaters",
      title: "Kerala Backwaters",
      fileName: ""
    },
    {
      id: "default-5",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
      alt: "Hill Station",
      title: "Hill Station Retreats",
      fileName: ""
    },
    {
      id: "default-6",
      src: "https://images.unsplash.com/photo-1565649811358-2b8e8e503f17?auto=format&fit=crop&q=80&w=800",
      alt: "Palace Architecture",
      title: "Royal Palaces",
      fileName: ""
    }
  ];

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'gallery'));
      const loadedImages: GalleryImage[] = [];
      querySnapshot.forEach((doc) => {
        loadedImages.push({ id: doc.id, ...doc.data() } as GalleryImage);
      });
      
      // If no images are uploaded, use default images
      setGalleryImages(loadedImages.length > 0 ? loadedImages : defaultImages);
    } catch (error) {
      console.error('Error loading images:', error);
      // On error, fallback to default images
      setGalleryImages(defaultImages);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Similar to HeroSection but simpler */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80"
            alt="Travel Gallery Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Travel Gallery
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 px-2 sm:px-4 leading-relaxed">
              Discover the beauty of South India through our curated collection of travel moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section - Following the same pattern as FleetSection/PackagesSection */}
      <section className="py-24 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Journey Gallery</h2>
            <p className="section-subheading">
              Experience the breathtaking destinations we cover across South India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Following the same pattern as other sections */}
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
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px]"
              onClick={() => navigate('/')}
            >
              View Our Packages
            </Button>
            <a 
              href="https://wa.me/+917397080671" 
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