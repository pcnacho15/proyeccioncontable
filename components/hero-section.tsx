import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Check, Calculator, FileText, PieChart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, FadeInItem, FloatingElement, ClipPathReveal } from "./animations"

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-12 lg:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#B8956B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7C8C74]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-linear-to-b from-transparent via-[#B8956B]/20 to-transparent" />
        {/* <div className="absolute bottom-1/4 left-1/4 w-px h-32 bg-linear-to-b from-transparent via-[#7C8C74]/20 to-transparent" /> */}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInStagger staggerAmount={0.15}>
              <FadeInItem>
                <motion.div 
                  className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-[#E5E0D8]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8956B]">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1C1917]">5.0 Calificación</p>
                    <p className="text-xs text-[#6B655C]">
                      +200 reseñas verificadas
                    </p>
                  </div>
                </motion.div>
              </FadeInItem>

              <FadeInItem>
                <div className="relative">
                  <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#1C1917] leading-[1.1]">
                    Proyección
                    <br />
                    <span className="relative">
                      Contable
                      <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 8" preserveAspectRatio="none">
                        <path d="M0,6 Q50,0 100,4 T200,3" stroke="#B8956B" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </h1>
                </div>
              </FadeInItem>

              <FadeInItem>
                <p className="text-lg text-[#6B655C] max-w-md leading-relaxed mt-4">
                  Transformamos la complejidad contable en claridad estratégica. 
                  <span className="text-[#1C1917] font-medium"> Expertos dedicados 100% </span> 
                  a hacer crecer tu negocio.
                </p>
              </FadeInItem>

              <FadeInItem>
                <div className="flex flex-wrap items-center gap-6 text-sm my-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1C1917]/5">
                      <Calculator className="h-4 w-4 text-[#1C1917]" />
                    </div>
                    <span className="text-[#6B655C]">
                      Contabilidad <span className="font-semibold text-[#1C1917]">actualizada</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#B8956B] text-[#B8956B]" />
                      ))}
                    </div>
                    <span className="font-semibold text-[#1C1917]">5.0</span>
                  </div>
                </div>
              </FadeInItem>

              <FadeInItem>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button className="bg-[#1C1917] text-[#FAF8F5] rounded-full px-8 py-4 text-base font-medium hover:bg-[#1C1917]/90 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    Consulta Gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-4 text-base font-medium border-[#1C1917]/20 bg-transparent hover:bg-[#1C1917]/5 cursor-pointer"
                  >
                    Agendar Reunión
                  </Button>
                </div>
              </FadeInItem>
            </FadeInStagger>
          </div>

          {/* Right Content - Visual Composition */}
          <div className="relative lg:h-[600px]">
            {/* Floating badge */}
            <FloatingElement amplitude={15} duration={4} className="absolute top-0 right-0 z-20 cursor-default">
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-[#E5E0D8]"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C8C74]/10">
                    <TrendingUp className="h-5 w-5 text-[#7C8C74]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B655C]">Crecimiento</p>
                    <p className="font-semibold text-sm text-[#1C1917]">+40% ahorro fiscal</p>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>

            {/* Main Image Container */}
            <ClipPathReveal direction="left" delay={0.3}>
              <div className="relative rounded-3xl overflow-hidden ">
                <Image
                  src="/professional-accountant-working.jpg"
                  alt="Contador profesional trabajando"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[400px] lg:h-[550px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1C1917]/20 via-transparent to-transparent" />
              </div>
            </ClipPathReveal>

            {/* Floating stats card */}
            <FloatingElement amplitude={10} duration={3.5} delay={0.5} className="absolute bottom-32 left-0 cursor-default">
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-[#E5E0D8]"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B8956B]/10">
                    <PieChart className="h-6 w-6 text-[#B8956B]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#6B655C]">Experiencia</p>
                    <p className="font-serif text-2xl font-semibold text-[#1C1917]">+15 años</p>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>

            {/* Floating check items */}
            <div className="absolute bottom-16 right-4 lg:right-8 space-y-3 cursor-default">
              <FloatingElement amplitude={8} duration={3} delay={0.2}>
                <motion.div 
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7C8C74]">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-[#1C1917]">Declaraciones al día</span>
                </motion.div>
              </FloatingElement>
              <FloatingElement amplitude={6} duration={3.2} delay={0.4}>
                <motion.div 
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7C8C74]">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-[#1C1917]">Impuestos optimizados</span>
                </motion.div>
              </FloatingElement>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -bottom-4 md:bottom-6 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#B8956B]/30 rounded-bl-3xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-[#7C8C74]/30 rounded-tr-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
