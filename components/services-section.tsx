import { Button } from "@/components/ui/button"
import { Calculator, FileText, PieChart, TrendingUp, Shield, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, FadeInItem } from "./animations"

const services = [
  {
    id: "accounting",
    icon: Calculator,
    title: "Contabilidad General",
    description: "Llevamos tus libros contables al día con precisión y profesionalismo. Reconciliaciones bancarias y estados financieros mensuales.",
    accent: "#B8956B",
  },
  {
    id: "tax",
    icon: FileText,
    title: "Declaraciones de Impuestos",
    description: "Preparación y presentación de declaraciones fiscales (ISR, IVA, DIOT) con cumplimiento normativo vigente.",
    accent: "#7C8C74",
  },
  {
    id: "advisory",
    icon: TrendingUp,
    title: "Asesoramiento Fiscal",
    description: "Estrategias de optimización fiscal para reducir tu carga tributaria dentro del marco legal aplicable.",
    accent: "#D4A574",
  },
  {
    id: "payroll",
    icon: Users,
    title: "Gestión de Nómina",
    description: "Cálculo de nómina, INFONAVIT, IMSS, emitir recibos de nómina y todas las obligaciones patronales.",
    accent: "#1C1917",
  },
  {
    id: "audit",
    icon: Shield,
    title: "Auditoría",
    description: "Revisión exhaustiva de tus estados financieros para garantizar transparencia y cumplimiento normativo.",
    accent: "#B8956B",
  },
  {
    id: "consulting",
    icon: PieChart,
    title: "Consultoría Financiera",
    description: "Análisis financiero integral, proyecciones y recomendaciones para la toma de decisiones estratégicas.",
    accent: "#7C8C74",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E5E0D8] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#E5E0D8] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#B8956B]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B655C]">
                Lo que hacemos
              </span>
              <span className="h-px w-8 bg-[#B8956B]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] mb-6">
              Nuestros Servicios
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#6B655C] text-lg max-w-2xl mx-auto leading-relaxed">
              Soluciones contables integrales adaptadas a las necesidades
              específicas de tu negocio
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeInStagger
              key={service.id}
              delay={0.1 + index * 0.1}
              staggerAmount={0.1}
            >
              {/* <FadeInItem> */}
                {/* <motion.div> */}
                <div
                  className="group relative cursor-default h-full bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(28,25,23,0.06)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.12)] transition-all duration-500 border border-[#E5E0D8]/50 overflow-hidden"
                  // whileHover={{ y: -8 }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}08 0%, ${service.accent}15 100%)`,
                    }}
                  />

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${service.accent} 50%)`,
                    }}
                  />

                  <div className="relative flex flex-col h-full">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 shrink-0"
                      style={{
                        backgroundColor: `${service.accent}15`,
                        color: service.accent,
                      }}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-3 group-hover:text-[#B8956B] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[#6B655C] text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#1C1917] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-auto">
                      <span>Más información</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  </div>
                {/* </motion.div> */}
              {/* </FadeInItem> */}
            </FadeInStagger>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.7}>
          <div className="mt-16 text-center">
            <Button className="bg-[#1C1917] text-[#FAF8F5] cursor-pointer rounded-full px-10 py-5 text-base font-medium hover:bg-[#1C1917]/90 hover:shadow-xl transition-all duration-300 group">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
