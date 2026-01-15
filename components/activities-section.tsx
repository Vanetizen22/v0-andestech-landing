import { Card } from "@/components/ui/card"
import { Coffee, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ActivitiesSection() {
  const activities = [
    {
      icon: Coffee,
      title: "/birras",
      subtitle: "Infraestructura & Telco",
      description: "Encuentros informales para discutir sobre infraestructura, cloud computing y telecomunicaciones.",
      slug: "birras",
    },
    {
      icon: Code,
      title: "devcafé",
      subtitle: "Desarrollo de software",
      description: "Sesiones de coding, pair programming y discusiones sobre las mejores prácticas de desarrollo.",
      slug: "devcafe",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            ¿Qué <span className="text-primary">Hacemos</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Espacios de networking y formación en diversas áreas tecnológicas
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Actividades Semanales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <Link key={index} href={`/eventos/${activity.slug}`}>
                <Card className="h-full p-8 bg-gradient-to-br from-card to-card/50 border-primary/30 hover:border-primary/60 transition-all hover:shadow-[0_0_40px_rgba(0,217,255,0.3)] cursor-pointer group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-primary mb-1">{activity.title}</h4>
                      <p className="text-sm text-primary/70">{activity.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground text-pretty">{activity.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">Nuestra Misión</h3>
          <p className="text-lg text-muted-foreground text-center text-pretty leading-relaxed">
            Construir tanto una comunidad como un formato de eventos que permitan reunir personas, recursos y
            experiencias alrededor de la tecnología. Siempre bajo la luz de los valores fundamentales basados en el
            respeto mutuo y la tolerancia.
          </p>
        </Card>
      </div>
    </section>
  )
}
