"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ImageIcon } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    title: "Workshop: Introducción a React",
    date: "15 de Enero, 2025",
    time: "18:00 - 21:00",
    location: "Coworking Tech Hub, Mendoza",
    attendees: 45,
    image: "/workshop-react.jpg",
    lumaUrl: "https://lu.ma/andestech-react-workshop",
  },
  {
    title: "/birras - Networking Casual",
    date: "20 de Enero, 2025",
    time: "19:00 - 23:00",
    location: "Cervecería Andes, San Juan",
    attendees: 60,
    image: "/birras-event.jpg",
    lumaUrl: "https://lu.ma/andestech-birras",
  },
  {
    title: "DevCafé: Charlas Tech",
    date: "25 de Enero, 2025",
    time: "17:00 - 19:00",
    location: "Café Central, Mendoza",
    attendees: 30,
    image: "/devcafe-event.jpg",
    lumaUrl: "https://lu.ma/andestech-devcafe",
  },
]

export function EventsSection() {
  return (
    <section id="eventos" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestros eventos y conecta con la comunidad tech de los Andes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees} asistentes confirmados</span>
                  </div>
                </div>
                <Button
                  onClick={() => window.open(event.lumaUrl, "_blank")}
                  className="w-full group-hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all"
                >
                  Registrarse en Luma
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex gap-4 justify-center">
          <Link href="/galeria">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Ver Galería de Eventos
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://lu.ma/andestech", "_blank")}
            className="border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            Ver Todos los Eventos
          </Button>
        </div>
      </div>
    </section>
  )
}
