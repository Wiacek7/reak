"use client"

import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  Users,
  Headphones,
  Menu,
  X,
  Mic,
  Volume2,
  Radio,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  // Add smooth scroll function with header offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-syne">
      {/* Modern Compact Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/10">
        <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold tracking-tight text-cyan-400">Reak Studios</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-full">
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-t border-cyan-500/10 shadow-2xl">
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Contact
              </button>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-full w-full mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Session
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero with New Studio Image */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-164938-IgyeniR9lFbynVDY56xgPdSsbJXRJM.jpeg"
            alt="Modern Recording Studio Control Room with Purple Lighting"
            fill
            className="object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            priority
          />
          {/* Lighter overlay to show the beautiful studio */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
        </div>

        {/* Text positioned in lower right */}
        <div className="absolute bottom-16 right-8 md:bottom-20 md:right-16 z-10 text-right max-w-lg">
          <div
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              <span className="text-white">WORLD CLASS</span>
              <br />
              <span className="text-cyan-400">AUDIO</span>
            </h1>

            <p className="text-lg font-medium text-slate-200 leading-relaxed">
              Professional recording studio specializing in film audio post-production
            </p>
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: "150+", label: "Projects Completed" },
              { icon: Users, number: "50+", label: "Happy Clients" },
              { icon: Clock, number: "10+", label: "Years Experience" },
              { icon: Headphones, number: "24/7", label: "Studio Access" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</h3>
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Services Section with Gradient Title */}
      <section id="services" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
        {/* Strategic Parallax Background Elements */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 border border-cyan-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-cyan-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Modern Section Header with Gradient Title */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
              <Volume2 className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive audio production services delivered with precision and creativity
            </p>
          </div>

          {/* Featured Service with Parallax */}
          <div className="mb-20">
            <div
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 border border-cyan-500/30"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/30 rounded-2xl mb-6">
                    <Mic className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                      Film Audio Post-Production
                    </span>
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Complete audio post-production services for films including stereo and surround mixing, ADR
                    recording, and sound design that brings your cinematic vision to life.
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">
                  <div
                    className="w-full h-64 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center"
                    style={{
                      transform: `translateY(${scrollY * -0.03}px)`,
                    }}
                  >
                    <Radio className="w-24 h-24 text-cyan-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stereo Mix to Picture",
                desc: "Professional stereo mixing synchronized to visual content",
                icon: "🎵",
              },
              {
                title: "Surround Mix to Picture",
                desc: "Immersive surround sound mixing for cinematic experiences",
                icon: "🔊",
              },
              { title: "ADR Recording", desc: "Automated dialogue replacement with pristine quality", icon: "🎙️" },
              { title: "Voice Over Production", desc: "Complete voice over recording and post-production", icon: "🗣️" },
              { title: "Animation VO", desc: "Specialized voice work for animated content", icon: "🎭" },
              { title: "Music Scoring", desc: "Original music composition and recording", icon: "🎼" },
              { title: "Sound Design", desc: "Bespoke audio elements crafted for your project", icon: "🔧" },
              { title: "Television Mixing", desc: "Long-form content mixing and mastering", icon: "📺" },
              { title: "Audiobook Recording", desc: "Professional audiobook production services", icon: "📚" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group hover:bg-slate-900/70"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern About Section with Gradient Title */}
      <section id="about" className="py-32 px-6 bg-slate-900 relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
                <Headphones className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  About Reak Studios
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                At Reak Studios, we specialize in enhancing and finalizing audio elements for films, ensuring a
                captivating auditory experience for audiences worldwide.
              </p>
              <p className="text-slate-400 mb-12 leading-relaxed">
                Our state-of-the-art facility combines cutting-edge technology with artistic expertise, delivering
                world-class audio production services that bring your creative vision to life.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  "State-of-the-art recording equipment",
                  "Acoustically treated professional studios",
                  "Experienced audio engineers and producers",
                  "Full-service post-production capabilities",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <p className="text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
                  <h4 className="text-3xl font-bold text-cyan-400 mb-2">150+</h4>
                  <p className="text-sm text-slate-400">Projects Completed</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700">
                  <h4 className="text-3xl font-bold text-cyan-400 mb-2">10+</h4>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 border border-cyan-500/30"
                style={{
                  transform: `translateY(${scrollY * -0.05}px)`,
                }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-cyan-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Headphones className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                      Professional Equipment
                    </span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Industry-standard Pro Tools HDX systems, Neumann microphones, and premium monitoring solutions for
                    exceptional audio quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Parallax */}
      <section className="py-20 px-6 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        ></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <blockquote className="text-2xl md:text-3xl font-light italic text-slate-300 mb-8 leading-relaxed">
            "Reak Studios transformed our film's audio landscape. Their attention to detail and creative expertise
            brought our vision to life in ways we never imagined possible."
          </blockquote>
          <div className="text-cyan-400 font-semibold">— Leading Film Director</div>
        </div>
      </section>

      {/* Modern Contact Section with Gradient Title */}
      <section id="contact" className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to bring your audio vision to life? Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Studio Location",
                  content: "8, Kole Osho Way\nAbule Oko Road, Magboro\nOgun State, Nigeria",
                },
                { icon: Phone, title: "Phone", content: "07019246326" },
                { icon: Mail, title: "Email", content: "reakstudios@hotmail.com" },
                { icon: Clock, title: "Studio Hours", content: "Monday - Saturday\n8:00 AM - 6:00 PM" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-800"
              style={{
                transform: `translateY(${scrollY * -0.02}px)`,
              }}
            >
              <h3 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Book Your Session
                </span>
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-slate-300">Service</label>
                  <select className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white">
                    <option>Select a service</option>
                    <option>Film Audio Post-Production</option>
                    <option>Voice Over Recording</option>
                    <option>Music Scoring</option>
                    <option>Sound Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-slate-300">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-16 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold text-cyan-400 mb-6 md:mb-0">Reak Studios</div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">© 2024 Reak Studios. All rights reserved.</p>
              <p className="text-sm text-slate-500">Professional Audio Production • Magboro, Ogun State</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
