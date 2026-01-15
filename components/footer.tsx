import { Mountain } from "lucide-react"

export function Footer() {
  const links = {
    comunidad: ["Empresas", "Staff", "Comunidad", "Eventos", "Reglamento"],
  }

  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">AndesTech</span>
            </div>
            <p className="text-muted-foreground text-pretty max-w-md">
              Comunidad tecnológica del oeste de Argentina. Conectamos desarrolladores, diseñadores y entusiastas de la
              tecnología a través de eventos, talleres y networking.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Comunidad</h4>
            <ul className="space-y-2">
              {links.comunidad.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mendoza, Argentina</li>
              <li>info@andestech.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p>© 2025 AndesTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
