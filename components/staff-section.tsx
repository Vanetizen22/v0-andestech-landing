import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"

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
      role: "Administrador",
      description: "DevOps engineer y especialista en cloud computing",
      avatar: "/professional-man-developer.png",
      initials: "CR",
    },
    {
      name: "Ana Martínez",
      role: "Administradora",
      description: "UX/UI designer y frontend developer",
      avatar: "/professional-woman-designer.png",
      initials: "AM",
    },
    {
      name: "Diego Fernández",
      role: "Administrador",
      description: "Backend developer y arquitecto de software",
      avatar: "/professional-man-software-architect.jpg",
      initials: "DF",
    },
  ]

  return (
    <section id="staff" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Staff de <span className="text-primary">AndesTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conocé a quienes hacen posible la comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {staff.map((member, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] text-center"
            >
              <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/30">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xl">{member.initials}</AvatarFallback>
              </Avatar>

              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.description}</p>

              <div className="flex gap-3 justify-center">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
