"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"

export function StaffSection() {
  const staff = [
    {
      name: "María González",
      role: "Fundadora",
      description: "Full-stack developer especializada en React y Node.js",
      avatar: "/professional-woman-developer.png",
      initials: "MG",
    },
    {
      name: "Carlos Rodríguez",
      role: "Co-Fundador",
      description: "DevOps engineer y especialista en cloud computing",
      avatar: "/professional-man-developer.png",
      initials: "CR",
    },
    {
      name: "Ana Martínez",
      role: "Directora de Eventos",
      description: "UX/UI designer y frontend developer",
      avatar: "/professional-woman-designer.png",
      initials: "AM",
    },
    {
      name: "Diego Fernández",
      role: "Director Técnico",
      description: "Backend developer y arquitecto de software",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
    {
      name: "Lucía Herrera",
      role: "Coordinadora de Marketing",
      description: "Especialista en marketing digital y redes sociales",
      avatar: "/professional-woman-developer.png",
      initials: "LH",
    },
    {
      name: "Martín Sosa",
      role: "Coordinador de Comunidad",
      description: "Community manager y desarrollador web",
      avatar: "/professional-man-developer.png",
      initials: "MS",
    },
    {
      name: "Valentina Paz",
      role: "Diseñadora Gráfica",
      description: "Diseñadora visual y especialista en branding",
      avatar: "/professional-woman-designer.png",
      initials: "VP",
    },
    {
      name: "Joaquín Méndez",
      role: "Desarrollador Senior",
      description: "Full-stack developer con experiencia en startups",
      avatar: "/professional-man-software-architect.jpg",
      initials: "JM",
    },
    {
      name: "Camila Ruiz",
      role: "Coordinadora de Sponsors",
      description: "Gestión de relaciones empresariales y partnerships",
      avatar: "/professional-woman-developer.png",
      initials: "CR",
    },
    {
      name: "Federico López",
      role: "Productor Audiovisual",
      description: "Streaming, edición de video y contenido multimedia",
      avatar: "/professional-man-developer.png",
      initials: "FL",
    },
    {
      name: "Sofia Torres",
      role: "Coordinadora de Voluntarios",
      description: "Gestión de equipos y logística de eventos",
      avatar: "/professional-woman-designer.png",
      initials: "ST",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, staff.length - itemsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="staff" className="py-12 sm:py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance px-2">
            Staff de <span className="text-primary">AndesTech</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-2">
            Conoce a quienes hacen posible la comunidad
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-6 sm:mx-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {staff.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <Card className="p-4 sm:p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] text-center h-full">
                    <Avatar className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 border-2 border-primary/30">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg sm:text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="text-base sm:text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 text-pretty hidden sm:block">
                      {member.description}
                    </p>

                    <div className="flex gap-3 justify-center">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
