"use client"

import { useState, useTransition, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { useScrollProgress } from "./animations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [scrolled, setScrolled] = useState(false)
  const scaleX = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#B8956B] origin-left z-[60]"
        style={{ scaleX }}
      />
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(28,25,23,0.08)]" 
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-[#B8956B]/20 rounded-lg blur-sm" />
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 bg-[#1C1917] rounded-lg flex items-center justify-center">
                  <span className="text-[#FAF8F5] font-serif text-xl lg:text-2xl font-semibold">P</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-serif text-lg lg:text-xl font-semibold text-[#1C1917] tracking-wide">
                  Proyección Contable
                </span>
                <p className="text-[10px] lg:text-xs text-[#6B655C] -mt-1 tracking-widest uppercase">
                  Asesoría Profesional
                </p>
              </div>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  className="relative px-5 py-2 text-sm font-medium text-[#1C1917]/80 hover:text-[#1C1917] transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-5 right-5 h-px bg-[#B8956B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-3"
            >
              <Button 
                className="hidden sm:flex bg-[#1C1917] text-[#FAF8F5] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#1C1917]/90 hover:shadow-lg transition-all duration-300 group"
              >
                Consulta Gratis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <button
                onClick={() => startTransition(() => setIsMenuOpen(!isMenuOpen))}
                className="lg:hidden p-2.5 text-[#1C1917] hover:bg-[#1C1917]/5 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:hidden bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E5E0D8]"
              >
                <nav className="px-4 py-8 space-y-4">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-lg font-medium text-[#1C1917] border-b border-[#E5E0D8]/50"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="pt-6">
                    <Button className="w-full bg-[#1C1917] text-[#FAF8F5] rounded-full py-4 text-base font-medium">
                      Consulta Gratis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
