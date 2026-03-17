import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"

export function StaffSection() {
  const staff = [
    {
      name: "Lautaro Celedon",
      role: "Fundador",
      description: "Técnico en Redes y Telecomunicaciones especializado en infraestructura cloud, virtualización y networking corporativo.",
      avatar: "/lauta.jpeg",
      initials: "LC",
    },
    {
      name: "Arturo Baldo ",
      role: "Fundador",
      description: "un tipazo",
      avatar: "/arturo.png",
      initials: "CR",
    },
    {
      name: "Francesco Gentile",
      role: "Fundador",
      description: "un fachero",
      avatar: "/fran.png",
      initials: "AM",
    },
    {
      name: "Joaquin Rodriguez",
      role: "Fundador",
      description: "le pelea a YSY A",
      avatar: "/joaco.jpeg",
      initials: "DF",
    },
     {
      name: "David Enamorado",
      role: "Fundador",
      description: "tiene buenos sombreros",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Mariano Marino",
      role: "Fundador",
      description: "jacker",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Marisol Herrera",
      role: "Fundador",
      description: "una vez compro un kilo de helado de sambayon",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Mauricio Caceres",
      role: "Fundador",
      description: "padre de una princesa",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Federico Vazques",
      role: "Fundador",
      description: "niño fintech",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Vane",
      role: "Fundador",
      description: "le pinta la tecnologia",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
     {
      name: "Diego Fernández",
      role: "Administrador",
      description: "Backend developer y arquitecto de software",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    }
  ]

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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
          {staff.map((member, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] text-center"
            >
              <Avatar className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 border-2 border-primary/30">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-lg sm:text-xl">{member.initials}</AvatarFallback>
              </Avatar>

              <h3 className="text-base sm:text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">{member.role}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 text-pretty hidden sm:block">{member.description}</p>

              <div className="flex gap-3 justify-center">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
