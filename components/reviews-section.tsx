"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { FadeIn, AnimatedCounter } from "./animations"

const reviews = [
  {
    id: "javier",
    name: "Javier Mendoza",
    company: "Mendoza Constructora",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Desde que trabajamos con Proyección Contable, nuestra carga fiscal se ha reducido significativamente. El equipo es profesional, puntual y siempre está disponible para resolver nuestras dudas.",
  },
  {
    id: "laura",
    name: "Laura Flores",
    company: "Flores & Asociados",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Excelente servicio. Me ayudaron a organizar completamente la contabilidad de mi empresa. Ahora tengo claridad total sobre mis finanzas y puedo tomar mejores decisiones.",
  },
  {
    id: "miguel",
    name: "Miguel Ángel Torres",
    company: "Torres Restaurante",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Como pequeño empresario, necesitaba alguien de confianza para manejar mi contabilidad. El equipo de Proyección Contable ha sido fundamental en el crecimiento de mi negocio.",
  },
  {
    id: "patricia",
    name: "Patricia Ramírez",
    company: "Moda Elegante",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Recomendación 100%. Me ahorraron tiempo y dinero con su asesoría fiscal. El trato es personalizado y siempre me siento bien atendida.",
  },
]

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-2">
      <motion.div 
        className="relative h-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_20px_rgba(28,25,23,0.06)] hover:shadow-[0_20px_40px_rgba(28,25,23,0.12)] transition-all duration-500 border border-[#E5E0D8]/50 overflow-hidden"
        whileHover={{ y: -4 }}
      >
        {/* Quote icon */}
        <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 h-12 w-12 text-[#B8956B]/10" />
        
        {/* Stars */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[#B8956B] text-[#B8956B]" />
          ))}
        </div>

        <p className="text-[#6B655C] text-base leading-relaxed mb-6 relative z-10">
          "{review.text}"
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-[#E5E0D8]/50">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FAF8F5] shadow-md">
            <Image src={review.image} alt={review.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold text-[#1C1917]">{review.name}</p>
            <p className="text-sm text-[#6B655C]">{review.company}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#B8956B]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#7C8C74]/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#B8956B]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B655C]">
                Testimonios
              </span>
              <span className="h-px w-8 bg-[#B8956B]" />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] mb-6">
              Lo Que Dicen Nuestros Clientes
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[#6B655C] text-lg max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor orgullo
            </p>
          </FadeIn>
        </div>

        {/* Mobile carousel */}
        <div className="relative md:hidden mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
          
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#1C1917] hover:text-white transition-colors border border-[#E5E0D8]"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-[#1C1917] hover:text-white transition-colors border border-[#E5E0D8]"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={0.1 + index * 0.1}>
              <ReviewCard review={review} />
            </FadeIn>
          ))}
        </div>

        {/* Rating summary */}
        <FadeIn delay={0.5}>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-[#E5E0D8]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B8956B] text-[#B8956B]" />
                ))}
              </div>
              <span className="text-[#1C1917] font-medium">
                4.9/5 basado en +<AnimatedCounter value={200} /> reseñas
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
