import { Linkedin, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, FadeInItem } from "./animations"

const team = [
  {
    id: "maria",
    name: "María González",
    role: "Directora General",
    image: "/placeholder-user.jpg",
    description: "Contadora Pública Certificada con más de 15 años de experiencia en asesoría fiscal y financiera.",
  },
  {
    id: "carlos",
    name: "Juan José Marín",
    role: "Socio Principal",
    image: "/placeholder-user.jpg",
    description: "Especialista en auditoría y cumplimiento normativo. Ex-director en firmas Big Four.",
  },
  {
    id: "ana",
    name: "Ana Martínez",
    role: "Gerente de Contabilidad",
    image: "/placeholder-user.jpg",
    description: "Experta en contabilidad de empresas medianas y pequeño comercio.",
  },
  {
    id: "roberto",
    name: "Roberto Sánchez",
    role: "Especialista Fiscal",
    image: "/placeholder-user.jpg",
    description: "Consultor en optimización fiscal y planeación patrimonial.",
  },
]

export function TeamSection() {
  return (
    <section
      id="equipo"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E5E0D8] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E5E0D8] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#B8956B]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B655C]">
                Nuestro equipo
              </span>
              <span className="h-px w-8 bg-[#B8956B]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] mb-6">
              Nuestro Equipo
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#6B655C] text-lg max-w-2xl mx-auto">
              Profesionales comprometidos con el éxito financiero de tu negocio
            </p>
          </FadeIn>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <FadeInStagger
              key={member.id}
              delay={0.1 + index * 0.1}
              staggerAmount={0.1}
            >
              {/* <FadeInItem> */}
                {/* <motion.div */}
                <div
                  className="group relative h-full bg-white rounded-2xl p-6 sm:p-8 shadow-[0_2px_20px_rgba(28,25,23,0.06)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.12)] transition-all duration-500 border border-[#E5E0D8]/50 overflow-hidden"
                  // whileHover={{ y: -8 }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#B8956B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    {/* Avatar */}
                    <div className="flex-none relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 rounded-full overflow-hidden border-3 border-[#FAF8F5] shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Decorative ring on hover */}
                    {/* <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/1.4 w-28 h-28 rounded-full border border-[#B8956B]/0 group-hover:border-[#B8956B]/30 transition-all duration-500 pointer-events-none" /> */}

                    <div className="flex-1 text-center">
                      <h3 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#B8956B] mb-3">
                        {member.role}
                      </p>
                      <p className="text-xs text-[#6B655C] leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Social icons */}
                    <div className="flex-none flex items-center justify-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1917]/5 hover:bg-[#1C1917] hover:text-white transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1917]/5 hover:bg-[#1C1917] hover:text-white transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                {/* </motion.div> */}
                </div>
              {/* </FadeInItem> */}
            </FadeInStagger>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-[#6B655C] text-sm mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1C1917] hover:text-[#B8956B] transition-colors"
            >
              Ver ofertas de trabajo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
