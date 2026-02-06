import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Scale,
  Home,
  Shield,
  FileText,
  Users,
  ChevronRight,
  Menu,
  X,
  Check,
  Star,
  ArrowRight,
  Clock,
  Award,
  Globe,
  Heart,
  Building,
  Gavel,
  BookOpen,
  Calendar,
  Send,
} from 'lucide-react'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#advantage', label: 'The Advantage' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Insights' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-champagne-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-navy-900 text-lg">HK</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-white text-lg leading-tight">Hannah Kuhami</p>
              <p className="text-champagne-400 text-xs tracking-wide">Attorney-Broker</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-champagne-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-champagne-500 hover:bg-champagne-400 text-navy-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-champagne-500/25"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900 border-t border-navy-700"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/80 hover:text-champagne-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block bg-champagne-500 text-navy-900 px-5 py-3 rounded-lg font-semibold text-center mt-4"
              >
                Work With Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Using img tag for better responsive focal point control */}
        <img
          src="/images/hero1.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"
        />
        {/* Gradient overlays - adjusted for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60 md:from-navy-900 md:via-navy-900/95 md:to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-navy-900/60 md:via-transparent md:to-navy-900/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-champagne-500/10 border border-champagne-500/30 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8"
          >
            <Scale size={14} className="text-champagne-400" />
            <span className="text-champagne-300 text-xs sm:text-sm font-medium">Dual Licensed Attorney & Broker</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-5 sm:mb-6"
          >
            Don't Just Hire<br />
            <span className="text-gradient">an Agent.</span><br />
            Hire an <span className="italic">Advocate.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-cream-200/80 mb-6 sm:mb-8 leading-relaxed font-light max-w-2xl"
          >
            The negotiation power of an attorney, the local expertise of a broker. Protecting your interests from contract to closing.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8 mb-8 sm:mb-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-champagne-500/10 rounded-xl flex items-center justify-center">
                <Gavel size={18} className="text-champagne-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-white">13+</p>
                <p className="text-cream-300/60 text-xs sm:text-sm">Years Attorney</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-champagne-500/10 rounded-xl flex items-center justify-center">
                <Home size={18} className="text-champagne-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-white">9+</p>
                <p className="text-cream-300/60 text-xs sm:text-sm">Years Broker</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-champagne-500/10 rounded-xl flex items-center justify-center">
                <Globe size={18} className="text-champagne-400 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display font-semibold text-white">4</p>
                <p className="text-cream-300/60 text-xs sm:text-sm">Languages</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-navy-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-champagne-500/30"
            >
              Work with an Attorney-Broker
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
            </a>
            <a
              href="tel:6194196517"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium transition-all"
            >
              <Phone size={18} />
              (619) 419-6517
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-champagne-400 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

// Value Proposition Section - Client Benefits Focus
function ValueProp() {
  const benefits = [
    {
      icon: Shield,
      title: 'Protection at Every Step',
      description: 'From the first offer to final closing, your transaction is reviewed with an attorney\'s eye for risk—catching issues before they become costly problems.',
    },
    {
      icon: Scale,
      title: 'Stronger Negotiations',
      description: 'When the other side knows they\'re dealing with a licensed attorney, they come to the table prepared to be fair. Leverage that works in your favor.',
    },
    {
      icon: FileText,
      title: 'No Costly Surprises',
      description: 'Standard contracts hide risks that most agents miss. Get proactive legal review that saves you from expensive mistakes down the road.',
    },
    {
      icon: Users,
      title: 'One Point of Contact',
      description: 'Skip the back-and-forth between your agent and a separate attorney. Get faster answers, clearer communication, and seamless coordination.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A1628' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-champagne-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            What You Get
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4 sm:mb-6">
            Real Estate Without the <span className="text-champagne-600">Legal Blind Spots</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy-700/70 text-base sm:text-lg max-w-2xl mx-auto">
            Most agents close deals. An attorney-broker protects your future. Here's what that means for you.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-cream-200 hover:border-champagne-300 hover:shadow-xl hover:shadow-champagne-500/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-champagne-100 to-champagne-200 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-champagne-700 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-700/70 leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-champagne-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-champagne-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4">
              Ready for Transactions That Actually <span className="text-gradient">Protect You?</span>
            </h3>
            <p className="text-cream-200/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Whether you're buying your first home or selling an inherited property, get the legal expertise that makes the difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-navy-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-champagne-500/30"
              >
                Schedule a Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:6194196517"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-champagne-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20">
              <img
                src="/images/Gemini_Generated_Image_ow8f10ow8f10ow8f.png"
                alt="Hannah Kuhami - Real Estate Attorney and Broker"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating Card - hidden on very small screens, repositioned on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-6 lg:-right-12 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl shadow-navy-900/10 max-w-[260px] sm:max-w-xs"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-champagne-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-champagne-600 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-display font-semibold text-navy-900 text-base sm:text-lg mb-0.5 sm:mb-1">Dual Licensed</p>
                  <p className="text-slate-500 text-xs sm:text-sm">One of few professionals in San Diego holding both a law degree and broker license.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={staggerContainer} className="lg:pl-8">
            <motion.p variants={fadeUp} className="text-champagne-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              About Hannah
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4 sm:mb-6 leading-tight">
              A Born Negotiator,<br />
              <span className="text-champagne-600">Now Your Advocate</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-3 sm:space-y-4 text-base sm:text-lg text-navy-700/80 leading-relaxed mb-6 sm:mb-8">
              <p>
                Some people negotiate for a living. Hannah started much earlier. As a teenager, she bargained with her parents over curfews so effectively that her father joked she should go to law school.
              </p>
              <p className="font-medium text-navy-900">
                She took his advice.
              </p>
              <p>
                After earning her Juris Doctorate from California Western School of Law and double majoring in Business and Political Science at Cal State San Marcos, Hannah discovered her true passion wasn't just practicing law—it was applying that legal precision to protect clients in one of life's biggest transactions: real estate.
              </p>
              <p>
                Today, with over 13 years as a practicing attorney and 9+ years as a licensed broker, she brings an unmatched combination of legal expertise and market knowledge to every deal. Her philosophy? <em className="text-champagne-600">"Aggressively advocating to achieve the perfect outcome"</em> for every client.
              </p>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-semibold text-navy-900 mb-2 sm:mb-3 flex items-center gap-2">
                <Globe size={14} className="text-champagne-500 sm:w-4 sm:h-4" />
                Languages Spoken
              </p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'Arabic', 'Swedish'].map((lang) => (
                  <span
                    key={lang}
                    className="bg-champagne-50 text-champagne-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-champagne-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-navy-900 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <Scale size={20} className="text-champagne-400 mb-2 sm:mb-3 sm:w-6 sm:h-6" />
                <p className="text-champagne-400 text-[10px] sm:text-xs font-medium tracking-wide mb-0.5 sm:mb-1">CALIFORNIA BAR</p>
                <p className="text-white font-display font-semibold text-sm sm:text-base">#286162</p>
              </div>
              <div className="bg-navy-900 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <Home size={20} className="text-champagne-400 mb-2 sm:mb-3 sm:w-6 sm:h-6" />
                <p className="text-champagne-400 text-[10px] sm:text-xs font-medium tracking-wide mb-0.5 sm:mb-1">DRE LICENSE</p>
                <p className="text-white font-display font-semibold text-sm sm:text-base">#02023639</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Advantage Section
function Advantage() {
  const comparisons = [
    {
      aspect: 'Contract Review',
      standard: 'Relies on standard forms; may miss problematic clauses',
      hannah: 'Identifies and negotiates risky provisions before you sign',
    },
    {
      aspect: 'Legal Disputes',
      standard: 'Refers you to an attorney (additional cost)',
      hannah: 'Handles legal issues directly, saving you time and money',
    },
    {
      aspect: 'Negotiation Power',
      standard: 'Trained in sales tactics',
      hannah: 'Trained in litigation—knows how to win in high-stakes situations',
    },
    {
      aspect: 'Complex Transactions',
      standard: 'May struggle with trusts, probate, or divorce sales',
      hannah: 'Specializes in legally complex real estate situations',
    },
    {
      aspect: 'Risk Protection',
      standard: 'Focused on closing the deal',
      hannah: 'Focused on protecting your interests at every step',
    },
  ]

  return (
    <section id="advantage" className="py-16 sm:py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 border border-champagne-400 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 h-32 sm:h-64 border border-champagne-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-champagne-400 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            The Attorney Advantage
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
            Why Hiring a Lawyer-Broker<br />
            <span className="text-gradient">Saves You Money</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-cream-200/70 text-base sm:text-lg max-w-2xl mx-auto">
            Most agents see the contract as a formality. An attorney-broker sees it as your first line of defense.
          </motion.p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="relative"
        >
          {/* Header */}
          <div className="hidden lg:grid grid-cols-[1fr,1fr,1fr] gap-4 mb-4 px-6">
            <div />
            <p className="text-cream-300/60 text-sm font-medium uppercase tracking-wider">Standard Agent</p>
            <p className="text-champagne-400 text-sm font-medium uppercase tracking-wider">Hannah Kuhami</p>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.aspect}
                variants={fadeUp}
                className="bg-navy-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:grid lg:grid-cols-[1fr,1fr,1fr] lg:gap-6 lg:items-center border border-navy-700/50"
              >
                <div className="mb-3 sm:mb-4 lg:mb-0">
                  <p className="font-display font-semibold text-white text-base sm:text-lg">{item.aspect}</p>
                </div>
                {/* Mobile labels */}
                <div className="mb-3 sm:mb-4 lg:mb-0">
                  <p className="text-red-400/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 lg:hidden">Standard Agent</p>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <X size={18} className="text-red-400 flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                    <p className="text-cream-300/70 text-xs sm:text-sm">{item.standard}</p>
                  </div>
                </div>
                <div>
                  <p className="text-champagne-400/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 lg:hidden">Hannah Kuhami</p>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check size={18} className="text-emerald-400 flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                    <p className="text-cream-100 text-xs sm:text-sm font-medium">{item.hannah}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-champagne-500 hover:bg-champagne-400 text-navy-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-champagne-500/30 w-full sm:w-auto"
          >
            Get the Attorney Advantage
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    {
      icon: Home,
      title: 'Buying & Selling',
      description: 'Whether you\'re purchasing your dream home or maximizing your sale price, get the protection of legal expertise combined with market savvy.',
      features: ['Strategic pricing', 'Contract negotiation', 'Due diligence review'],
    },
    {
      icon: FileText,
      title: 'Trust & Probate Sales',
      description: 'Inherited property comes with legal complexity. As an attorney-broker, Hannah navigates court requirements and title issues seamlessly.',
      features: ['Court confirmation process', 'Heir coordination', 'Legal document preparation'],
      featured: true,
    },
    {
      icon: Heart,
      title: 'Divorce Real Estate',
      description: 'Selling the marital home during divorce requires discretion and legal precision. Hannah mediates between parties to achieve fair outcomes.',
      features: ['Neutral party representation', 'Equitable division guidance', 'Confidential transactions'],
    },
    {
      icon: Building,
      title: 'Property Management',
      description: 'Protect your investment with professional management that understands both landlord-tenant law and property optimization.',
      features: ['Tenant screening', 'Lease preparation', 'Maintenance coordination'],
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-champagne-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Services
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4 sm:mb-6">
            Real Estate, <span className="text-champagne-600">Legally Protected</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-navy-700/70 text-base sm:text-lg max-w-2xl mx-auto">
            From straightforward transactions to the most complex legal situations, every deal receives attorney-level attention.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all hover:shadow-xl ${
                service.featured
                  ? 'bg-navy-900 text-white md:row-span-1'
                  : 'bg-white border border-cream-200 hover:border-champagne-300'
              }`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${
                service.featured
                  ? 'bg-champagne-500/20'
                  : 'bg-champagne-50'
              }`}>
                <service.icon size={24} className={`${service.featured ? 'text-champagne-400' : 'text-champagne-600'} sm:w-7 sm:h-7`} />
              </div>

              <h3 className={`font-display text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 ${
                service.featured ? 'text-white' : 'text-navy-900'
              }`}>
                {service.title}
              </h3>

              <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${
                service.featured ? 'text-cream-200/80' : 'text-navy-700/70'
              }`}>
                {service.description}
              </p>

              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={14} className={`${service.featured ? 'text-champagne-400' : 'text-champagne-600'} sm:w-4 sm:h-4`} />
                    <span className={`text-xs sm:text-sm ${service.featured ? 'text-cream-200' : 'text-navy-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {service.featured && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className="bg-champagne-500 text-navy-900 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wide">
                    Specialty
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Team Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-5 sm:gap-8"
        >
          <div className="flex -space-x-3 sm:-space-x-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 sm:border-4 border-navy-900 overflow-hidden">
              <img
                src="/images/Gemini_Generated_Image_ow8f10ow8f10ow8f.png"
                alt="Hannah Kuhami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-3 sm:border-4 border-navy-900 overflow-hidden">
              <img
                src="/images/Gemini_Generated_Image_u8injqu8injqu8in.png"
                alt="Savanna Kuhami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">
              Team Approach: 2-for-1 Coverage
            </h3>
            <p className="text-cream-200/70 text-sm sm:text-base">
              Hannah often partners with Savanna Kuhami, providing clients with double the availability and responsiveness without double the cost.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-champagne-500 hover:bg-champagne-400 text-navy-900 px-6 py-3 rounded-xl font-semibold transition-all w-full sm:w-auto text-center"
          >
            Meet the Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Blog Section
function Blog() {
  const posts = [
    {
      category: 'Trusts & Probate',
      title: 'Selling Inherited Property in California: A Legal Guide to Avoiding Probate Pitfalls',
      excerpt: 'Inheriting property in California comes with complex legal requirements. Learn how to navigate ISBP sales, court confirmations, and protect yourself from costly mistakes.',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    },
    {
      category: 'Market Analysis',
      title: 'San Diego 2026 Forecast: Why Inventory Shifts Matter for Sellers',
      excerpt: 'Inventory levels are shifting across San Diego County. Here\'s what the data reveals about pricing strategy and timing for sellers in today\'s market.',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    },
    {
      category: 'Legal Insights',
      title: 'The Hidden Risks in Standard Purchase Contracts (And How an Attorney-Broker Spots Them)',
      excerpt: 'Standard forms aren\'t as protective as you think. Discover the clauses that routinely expose buyers and sellers to unnecessary risk.',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    },
    {
      category: 'Divorce Real Estate',
      title: 'Navigating Property Division: How to Sell the Marital Home Without Conflict',
      excerpt: 'Selling property during divorce requires discretion and strategy. Learn how an attorney-broker can help both parties achieve a fair outcome.',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    },
    {
      category: 'California Law',
      title: 'Prop 19 Explained: Transferring Your Tax Base in San Diego County',
      excerpt: 'Prop 19 changed the rules for property tax transfers in California. Here\'s what homeowners over 55 and inherited property recipients need to know.',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&q=80',
    },
  ]

  return (
    <section id="blog" className="py-16 sm:py-24 lg:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div>
            <motion.p variants={fadeUp} className="text-champagne-600 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Insights & Resources
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900">
              Legal Insights for<br />
              <span className="text-champagne-600">Smarter Decisions</span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-champagne-600 transition-colors text-sm sm:text-base"
          >
            View All Articles
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.a>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Featured Post */}
          <motion.article
            variants={scaleIn}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 group cursor-pointer"
          >
            <div className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-navy-900">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-8 lg:p-12">
                <span className="inline-block bg-champagne-500 text-navy-900 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wide mb-3 sm:mb-4 w-fit">
                  {posts[0].category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-4 group-hover:text-champagne-300 transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-cream-200/80 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-cream-300/60 text-xs sm:text-sm">
                  <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Secondary Posts */}
          {posts.slice(1).map((post) => (
            <motion.article
              key={post.title}
              variants={scaleIn}
              className="group cursor-pointer bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cream-200 hover:border-champagne-300 hover:shadow-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-champagne-600 text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-navy-900 mt-1.5 sm:mt-2 mb-2 sm:mb-3 group-hover:text-champagne-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-navy-700/70 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-navy-500 text-xs sm:text-sm">
                  <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne-500/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-champagne-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16"
        >
          {/* Info Side */}
          <motion.div variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-champagne-400 font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Get In Touch
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6">
              Ready to Work with<br />
              <span className="text-gradient">an Attorney-Broker?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream-200/70 text-base sm:text-lg mb-8 sm:mb-10">
              Whether you're buying, selling, or navigating a complex real estate situation, I'm here to protect your interests and achieve the best possible outcome.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <motion.a
                variants={fadeUp}
                href="tel:6194196517"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-champagne-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-champagne-500/20 transition-colors">
                  <Phone size={20} className="text-champagne-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-cream-300/60 text-xs sm:text-sm">Call or Text</p>
                  <p className="text-white font-display text-lg sm:text-xl font-semibold group-hover:text-champagne-400 transition-colors">
                    (619) 419-6517
                  </p>
                </div>
              </motion.a>

              <motion.a
                variants={fadeUp}
                href="mailto:hannah@zealpropertygroup.net"
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-champagne-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-champagne-500/20 transition-colors">
                  <Mail size={20} className="text-champagne-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-cream-300/60 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-display text-base sm:text-xl font-semibold group-hover:text-champagne-400 transition-colors break-all sm:break-normal">
                    hannah@zealpropertygroup.net
                  </p>
                </div>
              </motion.a>

              <motion.div variants={fadeUp} className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-champagne-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <MapPin size={20} className="text-champagne-400 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-cream-300/60 text-xs sm:text-sm">Service Area</p>
                  <p className="text-white font-display text-lg sm:text-xl font-semibold">
                    All of San Diego County
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Brokerage Info */}
            <motion.div
              variants={fadeUp}
              className="bg-navy-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-navy-700/50"
            >
              <p className="text-cream-300/60 text-xs sm:text-sm mb-1 sm:mb-2">Licensed with</p>
              <p className="text-white font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">LPT Realty, Inc.</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Scale size={12} className="text-champagne-400 sm:w-[14px] sm:h-[14px]" />
                  <span className="text-cream-200">CA Bar #286162</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home size={12} className="text-champagne-400 sm:w-[14px] sm:h-[14px]" />
                  <span className="text-cream-200">DRE #02023639</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div variants={fadeUp}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl shadow-navy-950/50"
            >
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-6">
                Send a Message
              </h3>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-navy-700 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-cream-300 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/20 transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-navy-700 mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-cream-300 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/20 transition-all text-sm sm:text-base"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-navy-700 mb-1.5 sm:mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-cream-300 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/20 transition-all text-sm sm:text-base"
                      placeholder="(619) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-navy-700 mb-1.5 sm:mb-2">
                    I'm interested in...
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-cream-300 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/20 transition-all bg-white text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="probate">Trust & Probate Sale</option>
                    <option value="divorce">Divorce Real Estate</option>
                    <option value="management">Property Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-navy-700 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-cream-300 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-500/20 transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell me about your real estate needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm sm:text-base"
                >
                  {submitted ? (
                    <>
                      <Check size={18} className="sm:w-5 sm:h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-navy-500 text-xs sm:text-sm mt-4 sm:mt-6">
                I typically respond within 2-4 hours during business hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-10 sm:py-12 lg:py-16" style={{ backgroundColor: '#050B14' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-champagne-500 rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-navy-900 text-sm sm:text-lg">HK</span>
              </div>
              <div>
                <p className="font-display font-semibold text-white text-base sm:text-lg">Hannah Kuhami</p>
                <p className="text-champagne-400 text-[10px] sm:text-xs">Attorney-Broker</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              The negotiation power of an attorney, the local expertise of a broker. Protecting your interests from contract to closing in San Diego County.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:6194196517" className="text-gray-300 hover:text-champagne-400 transition-colors">
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:hannah@zealpropertygroup.net" className="text-gray-300 hover:text-champagne-400 transition-colors">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['About', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-champagne-400 transition-colors text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Buying & Selling', 'Trust & Probate', 'Divorce Real Estate', 'Property Management'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-champagne-400 transition-colors text-xs sm:text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Hannah Kuhami. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Scale size={12} className="text-champagne-500 sm:w-[14px] sm:h-[14px]" />
                CA Bar #286162
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Home size={12} className="text-champagne-500 sm:w-[14px] sm:h-[14px]" />
                DRE #02023639
              </span>
              <span>LPT Realty, Inc.</span>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] sm:text-xs mt-3 sm:mt-4">
            The information provided on this website does not constitute legal advice. For specific legal questions, please consult directly.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  return (
    <div className="grain-overlay">
      <Navigation />
      <main>
        <Hero />
        <ValueProp />
        <Advantage />
        <Services />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
