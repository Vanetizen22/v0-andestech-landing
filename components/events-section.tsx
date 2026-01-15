"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Workshop: Introducción a React",
    date: "15 de Enero, 2025",
    time: "18:00 - 21:00",
    location: "Coworking Tech Hub, Mendoza",
    attendees: 45,
    image: "/workshop-react.jpg",
  },
  {
    title: "/birras - Networking Casual",
    date: "20 de Enero, 2025",
    time: "19:00 - 23:00",
    location: "Cervecería Andes, San Juan",
    attendees: 60,
    image: "/birras-event.jpg",
  },
  {
    title: "DevCafé: Charlas Tech",
    date: "25 de Enero, 2025",
    time: "17:00 - 19:00",
    location: "Café Central, Mendoza",
    attendees: 30,
    image: "/devcafe-event.jpg",
  },
]

export function EventsSection() {
  return (
    <section className="relative py-24 px-4">
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
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-primary/40" />
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
                <Button className="w-full group-hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all">
                  Registrarse
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover-lift bg-transparent"
          >
            Ver Todos los Eventos
          </Button>
        </div>
      </div>
    </section>
  )
}
