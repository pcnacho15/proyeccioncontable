import { FadeIn } from "./animations"

export function LogosSection() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Background line */}
      {/* <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E5E0D8] to-transparent" /> */}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[#6B655C] mb-8 sm:mb-10">
            Empresas que confían en nosotros
          </p>
        </FadeIn>
        
        <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 flex-wrap">
          {[
            { name: "TechCorp", type: "text" },
            { name: "Grupo MX", type: "icon-square" },
            { name: "Inversora.lat", type: "icon-triangle" },
            { name: "Finanzas Plus", type: "serif" },
            { name: "StartupHub", type: "icon-circle" },
          ].map((company, index) => (
            <FadeIn key={company.name} delay={index * 0.1}>
              <div className="flex items-center gap-2 text-[#1C1917]/40 hover:text-[#1C1917]/70 transition-colors duration-300 cursor-default">
                {company.type === "icon-square" && (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                )}
                {company.type === "icon-triangle" && (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
                {company.type === "icon-circle" && (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )}
                <span className={`font-medium text-sm sm:text-base lg:text-lg ${company.type === "serif" ? "font-serif italic" : "font-semibold"}`}>
                  {company.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
