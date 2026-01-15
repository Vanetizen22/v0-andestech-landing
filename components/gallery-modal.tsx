"use client"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
}

const galleryImages = [
  { src: "/workshop-react.jpg", title: "Workshop React", description: "Evento de React en Mendoza" },
  { src: "/birras-event.jpg", title: "/birras Networking", description: "Encuentro informal de la comunidad" },
  { src: "/devcafe-event.jpg", title: "DevCafé", description: "Charlas tecnológicas en café" },
  { src: "/tech-conference-audience.png", title: "Conferencia Tech", description: "Gran evento anual" },
  { src: "/developers-coding-together.jpg", title: "Hackathon", description: "Maratón de programación" },
  { src: "/tech-meetup-casual.jpg", title: "Meetup Casual", description: "Encuentros mensuales" },
]

export function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10">
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all hover:scale-110 z-10"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-all hover:scale-110 z-10"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <div className="max-w-5xl w-full animate-in zoom-in-95 duration-300">
        <div className="relative aspect-video bg-card rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(0,217,255,0.3)]">
          <img
            src={galleryImages[currentIndex].src || "/placeholder.svg"}
            alt={galleryImages[currentIndex].title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-bold">{galleryImages[currentIndex].title}</h3>
          <p className="text-muted-foreground">{galleryImages[currentIndex].description}</p>
          <p className="text-sm text-primary mt-2">
            {currentIndex + 1} / {galleryImages.length}
          </p>
        </div>
      </div>
    </div>
  )
}
