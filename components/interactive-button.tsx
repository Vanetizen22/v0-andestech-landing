"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState, useRef, type MouseEvent } from "react"
import type { ButtonProps } from "@/components/ui/button"

interface InteractiveButtonProps extends ButtonProps {
  children: React.ReactNode
  magneticEffect?: boolean
}

export function InteractiveButton({
  children,
  magneticEffect = true,
  className = "",
  ...props
}: InteractiveButtonProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 50, y: 50 })
  }

  return (
    <Button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ${
        magneticEffect && isHovered ? "scale-105" : ""
      } ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Efecto de brillo que sigue al cursor */}
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 100px at ${position.x}% ${position.y}%, rgba(0, 217, 255, 0.4), transparent)`,
        }}
      />

      {/* Efecto de borde brillante */}
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 80px at ${position.x}% ${position.y}%, rgba(0, 217, 255, 0.6), transparent)`,
          filter: "blur(20px)",
        }}
      />
    </Button>
  )
}
