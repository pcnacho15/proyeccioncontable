"use client"

import { useRef, memo } from "react"
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from "framer-motion"
import { useEffect, useState } from "react"

export const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
  stagger = false,
  staggerAmount = 0.1,
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
  stagger?: boolean
  staggerAmount?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: stagger ? staggerAmount : 0
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const FadeInStagger = memo(function FadeInStagger({
  children,
  delay = 0,
  staggerAmount = 0.1,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  staggerAmount?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerAmount,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const FadeInItem = memo(function FadeInItem({
  children,
  direction = "up",
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration, ease: [0.25, 0.1, 0.25, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const ParallaxSection = memo(function ParallaxSection({
  children,
  speed = 1,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 15}%`])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
})

export const ParallaxImage = memo(function ParallaxImage({
  children,
  speed = 0.5,
  className = "",
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-[120%] -mt-[10%]">
        {children}
      </motion.div>
    </div>
  )
})

export const AnimatedCounter = memo(function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const incrementTime = (duration * 1000) / Math.max(end, 50)
    const timer = setInterval(() => {
      start += Math.ceil(end / 50)
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, Math.max(incrementTime, 16))

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
})

export const ScaleIn = memo(function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const TextReveal = memo(function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(" ")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: delay + i * 0.05,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
})

export const MagneticButton = memo(function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  )
})

export const ClipPathReveal = memo(function ClipPathReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const clipPathOrigins = {
    up: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    down: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    left: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    right: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  }

  const clipPathEnds = {
    up: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    down: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    left: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    right: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPathOrigins[direction] }}
      animate={isInView ? { clipPath: clipPathEnds[direction] } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const FloatingElement = memo(function FloatingElement({
  children,
  className = "",
  delay = 0,
  amplitude = 10,
  duration = 3,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  amplitude?: number
  duration?: number
}) {
  const ref = useRef(null)
  
  return (
    <motion.div
      ref={ref}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  return scaleX
}
