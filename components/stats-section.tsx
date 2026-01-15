"use client"

import { Users, Calendar, Code, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Miembros Activos",
    description: "Desarrolladores y entusiastas tech",
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Eventos Realizados",
    description: "Workshops, meetups y conferencias",
  },
  {
    icon: Code,
    value: "100+",
    label: "Proyectos Colaborativos",
    description: "Open source y comunidad",
  },
  {
    icon: Award,
    value: "20+",
    label: "Speakers Invitados",
    description: "Expertos de la industria",
  },
]

export function StatsSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra <span className="text-primary">Comunidad</span> en Números
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creciendo juntos y construyendo el futuro de la tecnología en los Andes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-4 group-hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
