"use client"

import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Send, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="text-primary">Conectar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza a crecer junto a los mejores profesionales tech de los Andes
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contáctanos</h3>
              <div className="space-y-3">
                <a
                  href="mailto:hola@andestech.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>hola@andestech.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span>WhatsApp Community</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <span>Telegram Channel</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Mendoza & San Juan, Argentina</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Únete Ahora</h3>
              <p className="text-muted-foreground">
                Completa el formulario y te enviaremos toda la información para que formes parte de AndesTech.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <Button className="w-full group relative overflow-hidden">
                  <span className="relative z-10">Enviar Solicitud</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
