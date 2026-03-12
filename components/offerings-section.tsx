import { Card } from "@/components/ui/card"
import { BookOpen, Network, Briefcase } from "lucide-react"

export function OfferingsSection() {
  const offerings = [
    {
      icon: BookOpen,
      title: "Compartir Conocimiento.",
      description:
        "Talleres y workshops sobre las últimas tecnologías, frameworks y herramientas del desarrollo moderno.",
    },
    {
      icon: Network,
      title: "Networking Profesional",
      description:
        "Conecta con profesionales, comparte experiencias y construye relaciones duraderas en la industria tech.",
    },
    {
      icon: Briefcase,
      title: "Oportunidades Laborales",
      description: "Accede a ofertas de trabajo, proyectos colaborativos y oportunidades de crecimiento profesional.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            ¿Qué <span className="text-primary">Ofrecemos</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            AndesTech es más que una comunidad, es un ecosistema de crecimiento tecnológico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <offering.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{offering.title}</h3>
              <p className="text-muted-foreground text-center text-pretty">{offering.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
