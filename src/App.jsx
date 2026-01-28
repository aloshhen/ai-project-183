import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Phone } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#000000"/>
                <rect x="12" y="12" width="16" height="16" rx="2" fill="#FFFFFF"/>
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Home</a>
              <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">About</a>
              <a href="#work" onClick={(e) => smoothScroll(e, 'work')} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Work (6)</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 text-sm">
              <div>
                <div className="text-xs text-gray-500 italic mb-1">(Inquiries)</div>
                <a href="mailto:john@jt-studio.com" className="text-gray-900 hover:text-gray-600 transition-colors">john@jt-studio.com</a>
              </div>
              <div>
                <div className="text-xs text-gray-500 italic mb-1">(Phone)</div>
                <a href="tel:+491234567890" className="text-gray-900 hover:text-gray-600 transition-colors">+491234 56789</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-6 py-8 space-y-6">
                <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="block text-lg font-medium text-gray-900">Home</a>
                <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="block text-lg font-medium text-gray-900">About</a>
                <a href="#work" onClick={(e) => smoothScroll(e, 'work')} className="block text-lg font-medium text-gray-900">Work (6)</a>
                <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="block text-lg font-medium text-gray-900">Contact</a>
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 italic mb-1">(Inquiries)</div>
                    <a href="mailto:john@jt-studio.com" className="text-gray-900">john@jt-studio.com</a>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 italic mb-1">(Phone)</div>
                    <a href="tel:+491234567890" className="text-gray-900">+491234 56789</a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-light text-gray-600 mb-6 tracking-wide">John Taylor</p>
                <h1 className="text-hero-mobile lg:text-hero font-black text-gray-900 mb-8 tracking-tighter">
                  Digital Designer
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                  I help designers and agencies elevate their branding with creative development support.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="John Taylor - Digital Designer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Artistic Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80"
                  alt="Abstract flowers"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </motion.div>

              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <p className="text-lg lg:text-xl text-gray-900 leading-relaxed mb-12">
                  I help brands craft meaningful stories and compelling visuals that deeply resonate with their audience, foster strong connections, build lasting loyalty, and drive sustainable long-term growth.
                </p>

                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">From A to Z</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Full-cycle design solutions from initial concept to final delivery. I handle strategy, design, and implementation with meticulous attention to detail.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Solo or Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Whether working independently or collaborating with your team, I seamlessly integrate to deliver exceptional results that exceed expectations.
                    </p>
                  </div>
                </div>

                <a 
                  href="#about" 
                  className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all group"
                >
                  More about me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="work" className="py-20 lg:py-32 px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Project 1 - Apex Architects */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80"
                    alt="Apex Architects project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Apex Architects
                </h2>
              </motion.article>

              {/* Project 2 - Dionysos Resorts */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                    alt="Dionysos Resorts project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Dionysos Resorts
                </h2>
              </motion.article>

              {/* Project 3 - Argus Eyewear */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
                    alt="Argus Eyewear project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  Argus Eyewear
                </h2>
              </motion.article>
            </div>

            {/* All Work Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <a 
                href="#work" 
                className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:gap-4 transition-all group"
              >
                All work (6)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CONTACT CTA SECTION */}
        <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-900 text-white relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
              alt="Contact background"
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-400 italic mb-6">(Contact)</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                Global presence, global recognition — Contact me to take your next step.
              </h2>
              <a 
                href="mailto:john@jt-studio.com"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all group"
              >
                Contact me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Contacts */}
            <div>
              <div className="mb-6">
                <p className="text-xs text-gray-500 italic mb-2">(Inquiries)</p>
                <a href="mailto:john@jt-studio.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                  john@jt-studio.com
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 italic mb-2">(Phone)</p>
                <a href="tel:+491234567890" className="text-gray-900 hover:text-gray-600 transition-colors">
                  +491234 56789
                </a>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div>
              <nav className="space-y-3">
                <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="block text-gray-900 hover:text-gray-600 transition-colors">Home</a>
                <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="block text-gray-900 hover:text-gray-600 transition-colors">About</a>
                <a href="#work" onClick={(e) => smoothScroll(e, 'work')} className="block text-gray-900 hover:text-gray-600 transition-colors">Work (6)</a>
                <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="block text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
              </nav>
            </div>

            {/* Column 3 - Legal */}
            <div>
              <nav className="space-y-3">
                <a href="#imprint" className="block text-gray-900 hover:text-gray-600 transition-colors">Imprint</a>
                <a href="#privacy" className="block text-gray-900 hover:text-gray-600 transition-colors">Privacy Policy</a>
              </nav>
            </div>

            {/* Column 4 - Additional */}
            <div className="space-y-3">
              <button 
                onClick={scrollToTop}
                className="block text-gray-900 hover:text-gray-600 transition-colors"
              >
                Back to top
              </button>
              <a href="#buy" className="block text-gray-900 hover:text-gray-600 transition-colors">
                You can buy this website.
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            © 2024 John Taylor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App