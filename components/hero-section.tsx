"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react"
import { CodeBackground } from "@/components/code-background"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > 50 || scrollPosition === 0) {
        setIsVisible(true)
      }
    }

    setIsVisible(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("eventos")
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CodeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div
          className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-transparent backdrop-blur mb-8">
            <Image
              src="/andestech-logo.jpg"
              alt="AndesTech Logo"
              width={192}
              height={192}
              className="rounded-full object-contain animate-float"
              style={{ filter: "drop-shadow(0 0 30px rgba(0, 217, 255, 0.6))" }}
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Bienvenido a la comunidad de <span className="text-primary animate-glow">AndesTech</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conectamos desarrolladores, diseñadores y entusiastas de la tecnología a través de eventos, talleres y
            networking en el oeste de Argentina.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => window.open("https://chat.whatsapp.com/XXXXXXXXXXXXXX", "_blank")}
              className="group relative text-lg px-8 animate-pulse-glow hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <span className="relative z-10">¡Únete a la Comunidad!</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToEvents}
              className="text-lg px-8 border-primary/50 hover:bg-primary/10 bg-transparent hover-lift"
            >
              Ver Próximos Eventos
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center pt-8">
            <a
              href="https://instagram.com/andestech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/company/andestech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/5492611234567?text=Hola!%20Quiero%20unirme%20a%20AndesTech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/andestech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
