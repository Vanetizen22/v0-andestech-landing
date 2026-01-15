"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const allPartners = [
    { name: "Tech Argentina", logo: "/tech-argentina-logo.jpg" },
    { name: "Dev Salta", logo: "/dev-salta-logo.jpg" },
    { name: "Universidad Nacional de Salta", logo: "/universidad-nacional-salta-logo.jpg" },
    { name: "Polo Tecnológico NOA", logo: "/polo-tecnologico-noa-logo.jpg" },
    { name: "TechCorp Solutions", logo: "/techcorp-solutions-logo.jpg" },
    { name: "Digital Innovations", logo: "/digital-innovations-logo.jpg" },
    { name: "CloudHost Argentina", logo: "/cloudhost-argentina-logo.jpg" },
    { name: "CodeAcademy NOA", logo: "/codeacademy-noa-logo.jpg" },
    { name: "StartupHub Salta", logo: "/startuphub-salta-logo.jpg" },
    { name: "Pizza&Code", logo: "/pizza-code-logo.jpg" },
  ]

  const duplicatedPartners = [...allPartners, ...allPartners]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollInterval: NodeJS.Timeout

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 20)
    }

    startScrolling()

    return () => {
      if (scrollInterval) clearInterval(scrollInterval)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Colaboradores y <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Organizaciones y empresas que confían en nosotros
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden items-center py-8"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 relative bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] p-4 flex items-center justify-center group"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={180}
                  height={90}
                  className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>

          {/* Gradientes de desvanecimiento en los bordes */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Call to action para sponsors */}
        <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">¿Querés ser sponsor?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Apoyá a la comunidad tecnológica y dale visibilidad a tu marca en nuestros eventos
            </p>
            <a
              href="mailto:sponsors@andestech.dev"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
