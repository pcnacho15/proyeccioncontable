"use client"

import { Button } from "@/components/ui/button"
import { Star, Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react"
import { FadeIn, FadeInStagger, FadeInItem } from "./animations"

const services = [
  { id: "accounting", label: "Contabilidad General" },
  { id: "tax", label: "Declaraciones de Impuestos" },
  { id: "advisory", label: "Asesoramiento Fiscal" },
  { id: "payroll", label: "Gestión de Nómina" },
  { id: "audit", label: "Auditoría" },
  { id: "consulting", label: "Consultoría Financiera" },
]

const company = [
  { id: "home", label: "Inicio", href: "#" },
  { id: "about", label: "Nosotros", href: "#nosotros" },
  { id: "team", label: "Equipo", href: "#equipo" },
  { id: "services", label: "Servicios", href: "#servicios" },
  { id: "contact", label: "Contacto", href: "#contacto" },
]

const legal = [
  { id: "terms", label: "Términos y Condiciones", href: "#" },
  { id: "privacy", label: "Política de Privacidad", href: "#" },
  { id: "notice", label: "Aviso de Privacidad", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#1C1917] text-[#FAF8F5] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8956B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C8C74]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#B8956B]/20 rounded-lg blur-sm" />
                    <div className="relative h-12 w-12 bg-[#FAF8F5] rounded-lg flex items-center justify-center">
                      <span className="text-[#1C1917] font-serif text-xl font-semibold">P</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-serif text-xl font-semibold text-[#FAF8F5]">
                      Proyección Contable
                    </span>
                    <p className="text-xs text-[#FAF8F5]/50 tracking-widest uppercase">
                      Asesoría Profesional
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[#FAF8F5]/60 text-sm leading-relaxed mb-6 max-w-sm">
                  Expertos en soluciones contables y fiscales. Simplificamos tu contabilidad para concentrarte en hacer crecer tu negocio.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-[#B8956B] text-[#B8956B]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#FAF8F5]/60">4.9/5 basado en +200 reseñas</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Button className="bg-[#B8956B] text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-[#B8956B]/90 transition-all duration-300 group">
                  Consulta Gratis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </FadeIn>
            </div>

            {/* Services */}
            <div>
              <FadeIn delay={0.2}>
                <h3 className="font-serif text-lg font-semibold text-[#FAF8F5] mb-6">Servicios</h3>
              </FadeIn>
              <FadeInStagger delay={0.25} staggerAmount={0.05}>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <FadeInItem key={service.id}>
                      <a href="#" className="text-sm text-[#FAF8F5]/60 hover:text-[#B8956B] transition-colors">
                        {service.label}
                      </a>
                    </FadeInItem>
                  ))}
                </ul>
              </FadeInStagger>
            </div>

            {/* Company */}
            <div>
              <FadeIn delay={0.3}>
                <h3 className="font-serif text-lg font-semibold text-[#FAF8F5] mb-6">Empresa</h3>
              </FadeIn>
              <FadeInStagger delay={0.35} staggerAmount={0.05}>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <FadeInItem key={item.id}>
                      <a href={item.href} className="text-sm text-[#FAF8F5]/60 hover:text-[#B8956B] transition-colors">
                        {item.label}
                      </a>
                    </FadeInItem>
                  ))}
                </ul>
              </FadeInStagger>
            </div>

            {/* Contact */}
            <div>
              <FadeIn delay={0.4}>
                <h3 className="font-serif text-lg font-semibold text-[#FAF8F5] mb-6">Contacto</h3>
              </FadeIn>
              <FadeInStagger delay={0.45} staggerAmount={0.05}>
                <ul className="space-y-4">
                  <FadeInItem>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-0.5 text-[#B8956B]" />
                      <span className="text-sm text-[#FAF8F5]/60">
                        Av. Principal #123, Col. Centro<br />
                        Medellín - Antioquia
                      </span>
                    </li>
                  </FadeInItem>
                  <FadeInItem>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#B8956B]" />
                      <a href="tel:+525512345678" className="text-sm text-[#FAF8F5]/60 hover:text-[#B8956B] transition-colors">
                        +57 302 2456451
                      </a>
                    </li>
                  </FadeInItem>
                  <FadeInItem>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#B8956B]" />
                      <a href="mailto:contacto@proyeccioncontable.com" className="text-sm text-[#FAF8F5]/60 hover:text-[#B8956B] transition-colors">
                        contacto@proyeccioncontable.com
                      </a>
                    </li>
                  </FadeInItem>
                  <FadeInItem>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#B8956B]" />
                      <span className="text-sm text-[#FAF8F5]/60">
                        Lun - Vie: 9:00 AM - 6:00 PM
                      </span>
                    </li>
                  </FadeInItem>
                </ul>
              </FadeInStagger>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-8 border-t border-[#FAF8F5]/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social icons */}
              <FadeIn>
                <div className="flex items-center gap-3">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/5 hover:bg-[#B8956B] hover:text-white transition-all duration-300">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/5 hover:bg-[#B8956B] hover:text-white transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/5 hover:bg-[#B8956B] hover:text-white transition-all duration-300">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/5 hover:bg-[#B8956B] hover:text-white transition-all duration-300">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </FadeIn>

              {/* Legal links */}
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#FAF8F5]/40">
                  {legal.map((item) => (
                    <a key={item.id} href={item.href} className="hover:text-[#FAF8F5]/80 transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              </FadeIn>

              {/* Copyright */}
              <FadeIn delay={0.2}>
                <p className="text-xs text-[#FAF8F5]/30">
                  © {new Date().getFullYear()} Proyección Contable. Todos los derechos reservados.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
