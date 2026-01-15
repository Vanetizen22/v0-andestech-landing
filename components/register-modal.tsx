"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { X, Calendar, User, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  eventTitle?: string
}

export function RegisterModal({ isOpen, onClose, eventTitle }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Formulario enviado:", formData)
    alert(`Registro exitoso para: ${eventTitle || "AndesTech"}!\n\nNombre: ${formData.name}\nEmail: ${formData.email}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-card border border-primary/30 rounded-lg shadow-[0_0_50px_rgba(0,217,255,0.3)] max-w-md w-full p-6 animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <Calendar className="w-12 h-12 text-primary mb-3" />
          <h2 className="text-2xl font-bold mb-2">Registro de Evento</h2>
          {eventTitle && <p className="text-muted-foreground">{eventTitle}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-primary/50" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Juan Pérez"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-primary/50" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="juan@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Teléfono (opcional)</label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-primary/50" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="+54 261 123-4567"
              />
            </div>
          </div>

          <Button type="submit" className="w-full group relative overflow-hidden">
            <span className="relative z-10">Confirmar Registro</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
          </Button>
        </form>
      </div>
    </div>
  )
}
