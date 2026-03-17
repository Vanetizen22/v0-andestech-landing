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

        <div className="max-w-7xl mx-auto">
          {/* First row: 6 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {staff.slice(0, 6).map((member, index) => (
              <Card
                key={index}
                className="p-3 sm:p-4 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] text-center"
              >
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 border-2 border-primary/30">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-base sm:text-lg">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-sm sm:text-base font-semibold mb-1 leading-tight">{member.name}</h3>
                <p className="text-xs text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-2 text-pretty hidden sm:block">{member.description}</p>
                <div className="flex gap-2 justify-center">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Second row: 5 cards centered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:px-[8.333%]">
            {staff.slice(6).map((member, index) => (
              <Card
                key={index + 6}
                className="p-3 sm:p-4 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] text-center"
              >
                <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 border-2 border-primary/30">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-base sm:text-lg">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-sm sm:text-base font-semibold mb-1 leading-tight">{member.name}</h3>
                <p className="text-xs text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-2 text-pretty hidden sm:block">{member.description}</p>
                <div className="flex gap-2 justify-center">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-1">
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
