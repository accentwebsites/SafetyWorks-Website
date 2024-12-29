'use client';
import Image from 'next/image'
import { useState } from 'react'

const images = [
  "/api/placeholder/400/300",
  "/api/placeholder/400/300",
  "/api/placeholder/400/300",
  "/api/placeholder/400/300",
  "/api/placeholder/400/300"
]

export default function JobGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Job Site</h2>
        <p className="text-gray-600 text-center mb-12">Experience the quality of our scaffolding work</p>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={image}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            →
          </button>
          
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-teal-400' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}