import React, { useState } from 'react';
import { Images, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=150&fit=crop',
        caption: 'Vista panorámica del trazado de la línea'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=150&fit=crop',
        caption: 'Torres de transmisión instaladas'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=200&h=150&fit=crop',
        caption: 'Paisaje de la zona del proyecto'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=200&h=150&fit=crop',
        caption: 'Trabajos de construcción en campo'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=150&fit=crop',
        caption: 'Instalación de cimentaciones'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1413882353314-73389f63b6fd?w=800&h=600&fit=crop',
        thumbnail: 'https://images.unsplash.com/photo-1413882353314-73389f63b6fd?w=200&h=150&fit=crop',
        caption: 'Reunión de socialización comunitaria'
    },
];

export default function ImageGallery() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [thumbnailStart, setThumbnailStart] = useState(0);

    const visibleThumbnails = 5;

    const goToPrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const scrollThumbnails = (direction) => {
        if (direction === 'left') {
            setThumbnailStart(Math.max(0, thumbnailStart - 1));
        } else {
            setThumbnailStart(Math.min(galleryImages.length - visibleThumbnails, thumbnailStart + 1));
        }
    };

    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="p-2 bg-[#00853E]/10 rounded-lg">
                            <Images className="w-5 h-5 text-[#00853E]" />
                        </span>
                        Galería de imágenes
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 ml-12">{galleryImages.length} imágenes del proyecto</p>
                </div>
            </div>

            {/* Main Image */}
            <div
                className="relative rounded-xl overflow-hidden shadow-lg mb-4 cursor-pointer group"
                onClick={() => setIsLightboxOpen(true)}
            >
                <img
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].caption}
                    className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-gray-900" />
                    </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-sm">{galleryImages[selectedIndex].caption}</p>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                    {selectedIndex + 1} / {galleryImages.length}
                </div>
            </div>

            {/* Thumbnail Slider */}
            <div className="relative">
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={() => scrollThumbnails('left')}
                        disabled={thumbnailStart === 0}
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>

                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex gap-2 transition-transform duration-300"
                            style={{ transform: `translateX(-${thumbnailStart * (100 / visibleThumbnails)}%)` }}
                        >
                            {galleryImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`flex-shrink-0 w-[calc(20%-6.4px)] rounded-lg overflow-hidden transition-all duration-200 ${index === selectedIndex
                                            ? 'ring-2 ring-[#00853E] ring-offset-2'
                                            : 'opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={image.thumbnail}
                                        alt={image.caption}
                                        className="w-full h-16 sm:h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={() => scrollThumbnails('right')}
                        disabled={thumbnailStart >= galleryImages.length - visibleThumbnails}
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Lightbox Dialog */}
            <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
                    <div className="relative">
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <img
                            src={galleryImages[selectedIndex].src}
                            alt={galleryImages[selectedIndex].caption}
                            className="w-full max-h-[80vh] object-contain"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-center">{galleryImages[selectedIndex].caption}</p>
                        </div>

                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}