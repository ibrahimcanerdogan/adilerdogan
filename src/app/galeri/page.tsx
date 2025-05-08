'use client';
import { useState } from 'react';

export default function Galeri() {
  const images = [
    {
      src: '/sources/gallery/kuafor1.jpeg',
      alt: 'Kuaför Salonu Görünümü 1',
    },
    {
      src: '/sources/gallery/kuafor2.jpeg',
      alt: 'Kuaför Salonu Görünümü 2',
    },
    {
      src: '/sources/gallery/kuafor3.jpeg',
      alt: 'Kuaför Salonu Görünümü 3',
    },
    {
      src: '/sources/gallery/kuafor4.jpeg',
      alt: 'Kuaför Salonu Görünümü 4',
    },
    {
      src: '/sources/gallery/kuafor5.jpeg',
      alt: 'Kuaför Salonu Görünümü 5',
    },
    {
      src: '/sources/gallery/kuafor6.jpeg',
      alt: 'Kuaför Salonu Görünümü 6',
    },
    {
      src: '/sources/gallery/kuafor7.jpeg',
      alt: 'Kuaför Salonu Görünümü 7',
    },
    {
      src: '/sources/gallery/kuafor8.jpeg',
      alt: 'Kuaför Salonu Görünümü 8',
    },
    {
      src: '/sources/gallery/kuafor9.jpeg',
      alt: 'Kuaför Salonu Görünümü 9',
    },
    {
      src: '/sources/gallery/kuafor10.jpeg',
      alt: 'Kuaför Salonu Görünümü 10',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Galeri
          </h1>
          <p className="text-lg text-gray-600">
            Modern ve şık salonumuzdan kareler
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 