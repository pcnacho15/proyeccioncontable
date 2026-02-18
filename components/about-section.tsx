import { Button } from "@/components/ui/button"
import { Award, Shield, Clock, Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, FadeInItem, ParallaxSection, ParallaxImage, AnimatedCounter } from "./animations"

const stats = [
  { value: 15, suffix: "+", label: "Años de Experiencia", color: "#B8956B" },
  { value: 500, suffix: "+", label: "Clientes Satisfechos", color: "#7C8C74" },
  { value: 100, suffix: "%", label: "Dedicación", color: "#1C1917" },
  { value: 40, suffix: "%", label: "Ahorro en Impuestos", color: "#D4A574" },
]

const values = [
  {
    id: "trust",
    icon: Shield,
    title: "Confianza",
    description: "Transparencia y honestidad en cada operación",
    color: "#B8956B",
  },
  {
    id: "punctuality",
    icon: Clock,
    title: "Puntualidad",
    description: "Cumplimos con todos tus plazos tributarios",
    color: "#7C8C74",
  },
  {
    id: "professionalism",
    icon: Award,
    title: "Profesionalismo",
    description: "Expertos certificados actualizados en fiscal",
    color: "#1C1917",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-[#B8956B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#7C8C74]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Stats & Text */}
          <div className="order-2 lg:order-1 space-y-10">
            {/* Section Label */}
            <FadeIn>
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-[#B8956B]" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B655C]">
                  Sobre nosotros
                </span>
              </div>
            </FadeIn>

            {/* Stats Grid */}
            <ParallaxSection speed={0.05}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(28,25,23,0.08)] border border-[#E5E0D8]/50">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="text-center p-4 rounded-2xl bg-[#FAF8F5]">
                        <p 
                          className="font-serif text-4xl sm:text-5xl font-semibold mb-1"
                          style={{ color: stat.color }}
                        >
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="text-xs sm:text-sm text-[#6B655C]">
                          {stat.label}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </ParallaxSection>

            {/* Text Content */}
            <FadeInStagger staggerAmount={0.1}>
              <FadeInItem>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917]">
                  ¿Quiénes Somos?
                </h2>
              </FadeInItem>

              <FadeInItem>
                <p className="text-[#6B655C] text-base leading-relaxed">
                  En <span className="font-semibold text-[#1C1917]">Proyección Contable</span>, somos un equipo de profesionales comprometidos con la salud financiera de tu negocio. 
                </p>
              </FadeInItem>

              <FadeInItem>
                <p className="text-[#6B655C] text-base leading-relaxed">
                  Nos especializamos en ofrecer soluciones contables personalizadas que te permiten concentrarte en lo que mejor haces: hacer crecer tu empresa.
                </p>
              </FadeInItem>
            </FadeInStagger>

            {/* Values */}
            <FadeInStagger staggerAmount={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((value) => (
                  <FadeInItem key={value.id}>
                    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[#E5E0D8]/50 hover:border-[#B8956B]/30 transition-colors duration-300">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-xl mb-3"
                        style={{ 
                          backgroundColor: `${value.color}15`,
                          color: value.color
                        }}
                      >
                        <value.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-[#1C1917] mb-1">{value.title}</h3>
                      <p className="text-xs text-[#6B655C]">{value.description}</p>
                    </div>
                  </FadeInItem>
                ))}
              </div>
            </FadeInStagger>

            {/* CTA */}
            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button className="bg-[#1C1917] text-[#FAF8F5] rounded-full px-8 py-4 text-base font-medium hover:bg-[#1C1917]/90 hover:shadow-lg transition-all duration-300 group">
                  Contáctanos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-4 text-base font-medium border-[#1C1917]/20 bg-transparent hover:bg-[#1C1917]/5"
                >
                  Conoce Nuestro Equipo
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2">
            <ParallaxSection speed={-0.05}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#B8956B]/30 rounded-tl-3xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#7C8C74]/30 rounded-br-3xl" />
                
                {/* Main image container */}
                {/* <ParallaxImage speed={0.3}> */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/two-diverse-women-smiling-close-together-wearing-d.jpg"
                      alt="Equipo de profesionales contables"
                      width={600}
                      height={700}
                      className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/30 via-transparent to-transparent" />
                  </div>
                {/* </ParallaxImage> */}

                {/* Floating badge */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#E5E0D8]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#B8956B]">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1C1917]">Certificación Profesional</p>
                      <p className="text-sm text-[#6B655C]">Contadores públicos certificados</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </div>
    </section>
  )
}
