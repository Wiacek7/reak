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
import Link from "next/link"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showAllPortfolio, setShowAllPortfolio] = useState(false)

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
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80; // Account for fixed header
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    }, 50);
  }

  // Studio images for hero slider
  const heroImages = [
    "/00XVABPc9FVmXg9i9kh0IEw-14.webp",
    "/shutterstock_1760613938.avif",
    "/live-sound-setup.jpg"
  ];
  const [currentHero, setCurrentHero] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-syne">
      {/* Modern Compact Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-cyan-500/10">
        <nav className="relative flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold tracking-tight text-cyan-400 font-serif font-dm-sans">Reak Studios</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Team
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
              onClick={() => scrollToSection("contact-form")}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-full" onClick={() => scrollToSection("contact-form")}>Book Session</Button>
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
                onClick={() => scrollToSection("home")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact-form")}
                className="block text-sm font-medium hover:text-cyan-400 transition-colors py-2 w-full text-left"
              >
                Contact
              </button>
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-2 rounded-full w-full mt-4"
                onClick={() => { setMobileMenuOpen(false); scrollToSection("contact-form"); }}
              >
                Book Session
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero with New Studio Image Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 transition-all duration-700">
          <Image
            key={heroImages[currentHero]}
            src={heroImages[currentHero]}
            alt="Modern Recording Studio Control Room with Purple Lighting"
            fill
            className="object-cover transition-all duration-700"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            priority
          />
          {/* Lighter overlay to show the beautiful studio */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
        </div>
        {/* Slider controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHero(idx)}
              className={`w-3 h-3 rounded-full border-2 ${currentHero === idx ? 'bg-cyan-400 border-cyan-400' : 'bg-slate-700 border-slate-400'} transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
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

      {/* Redesigned About Section with Icon Header */}
      <section id="about" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Users className="w-10 h-10 text-cyan-400" />
                <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  About Reak Studios
                </h2>
              </div>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Reak Studios is a premier audio post-production facility dedicated to elevating the sound of film, TV, and multimedia projects. Our team blends technical mastery with creative passion to deliver immersive, world-class audio experiences.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center space-x-3"><Award className="w-5 h-5 text-cyan-400" /><span className="text-slate-300">Award-winning engineers & producers</span></li>
                <li className="flex items-center space-x-3"><Headphones className="w-5 h-5 text-cyan-400" /><span className="text-slate-300">State-of-the-art recording & mixing studios</span></li>
                <li className="flex items-center space-x-3"><Mic className="w-5 h-5 text-cyan-400" /><span className="text-slate-300">Voice, ADR, and music production expertise</span></li>
                <li className="flex items-center space-x-3"><Radio className="w-5 h-5 text-cyan-400" /><span className="text-slate-300">Trusted by top filmmakers & brands</span></li>
              </ul>
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
              <div className="rounded-3xl overflow-hidden border border-cyan-500/30 p-0" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
                <Image src="/00XVABPc9FVmXg9i9kh0IEw-14.webp" alt="Studio" width={400} height={400} className="object-cover w-full h-64" />
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                    Professional Equipment
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Industry-standard Pro Tools HDX systems, Neumann microphones, and premium monitoring solutions for exceptional audio quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section with Gradient Title */}
      <section id="services" className="py-20 px-4 bg-slate-950 relative overflow-hidden">
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
            <div className="w-32 h-20 mx-auto mb-6 rounded-2xl overflow-hidden relative">
              <Image src="/00XVABPc9FVmXg9i9kh0IEw-14.webp" alt="Studio" fill className="object-cover" />
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
                  <div className="w-40 h-28 mb-6 rounded-2xl overflow-hidden relative">
                    <Image src="/shutterstock_1760613938.avif" alt="Studio" fill className="object-cover" />
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
                    className="w-full h-64 rounded-2xl overflow-hidden relative"
                    style={{
                      transform: `translateY(${scrollY * -0.03}px)`,
                    }}
                  >
                    <Image src="/live-sound-setup.jpg" alt="Studio" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* Increased top margin and gap for more spacing */}
            {[
              { title: "Stereo Mix to Picture", desc: "Professional stereo mixing for film and TV.", icon: <Volume2 className="w-8 h-8 text-cyan-400" /> },
              { title: "Surround Mix", desc: "Immersive surround sound for cinematic experiences.", icon: <Radio className="w-8 h-8 text-cyan-400" /> },
              { title: "ADR Recording", desc: "Automated dialogue replacement with pristine quality.", icon: <Mic className="w-8 h-8 text-cyan-400" /> },
              { title: "Voice Over Production", desc: "Voice over recording and post-production.", icon: <Users className="w-8 h-8 text-cyan-400" /> },
              { title: "Music Scoring", desc: "Original music composition and recording.", icon: <Award className="w-8 h-8 text-cyan-400" /> },
              { title: "Sound Design", desc: "Custom audio elements for your project.", icon: <Headphones className="w-8 h-8 text-cyan-400" /> },
              { title: "Television Mixing", desc: "Long-form content mixing and mastering.", icon: <Clock className="w-8 h-8 text-cyan-400" /> },
              { title: "Audiobook Recording", desc: "Professional audiobook production services.", icon: <Mail className="w-8 h-8 text-cyan-400" /> },
            ].map((service, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group hover:bg-slate-900/70 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Works Section */}
      <section id="portfolio" className="py-32 px-6 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore some of our recent projects and creative collaborations
            </p>
          </div>
          <div className={showAllPortfolio ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" : "overflow-x-auto pb-4"}>
            <div className={showAllPortfolio ? "contents" : "flex space-x-8 min-w-[700px] md:min-w-0"}>
              {[
                {
                  slug: "anikulapo",
                  title: "Anikulapo",
                  desc: "A mystical drama about Saro, a man who gains the power to conquer death.",
                  img: "/Anikulapo-1.webp",
                  link: "https://www.imdb.com/title/tt21432050/"
                },
                {
                  slug: "citation",
                  title: "Citation",
                  desc: "A student battles a university's system after a sexual assault accusation.",
                  img: "/Citation_(film).jpg",
                  link: "https://www.imdb.com/title/tt11481312/"
                },
                {
                  slug: "mokalik",
                  title: "Mokalik",
                  desc: "A day in the life of an 11-year-old sent to work at a mechanic workshop.",
                  img: "/mechanik__300_427.jpg",
                  link: "https://www.imdb.com/title/tt10327136/"
                },
                {
                  slug: "tribunal",
                  title: "Tribunal",
                  desc: "A gripping legal drama about justice and redemption.",
                  img: "/TheTribunal.jpg",
                  link: "https://www.imdb.com/title/tt7133686/"
                },
                {
                  slug: "omugwo",
                  title: "Omugwo",
                  desc: "A comedy about new parents and their mothers-in-law.",
                  img: "/omugwo.jpeg",
                  link: "https://www.imdb.com/title/tt15150392/"
                },
                {
                  slug: "diamonds-in-the-sky",
                  title: "Diamond in the Sky",
                  desc: "Three families are united by cancer.",
                  img: "/diamonds.jpg",
                  link: "https://www.imdb.com/title/tt14605694/"
                },
                {
                  slug: "tenant-of-the-house",
                  title: "Tenant of the House",
                  desc: "A political drama about a young legislator's journey.",
                  img: "/tenants.jpg",
                  link: "https://www.imdb.com/title/tt16287560/"
                },
                {
                  slug: "the-bridge",
                  title: "The Bridge",
                  desc: "A love story between two people from different backgrounds.",
                  img: "/the bridge.jpg",
                  link: "https://www.imdb.com/title/tt8193396/"
                },
                {
                  slug: "swallow",
                  title: "Swallow",
                  desc: "A woman faces tough choices in 1980s Lagos.",
                  img: "/swallow.jpg",
                  link: "https://www.imdb.com/title/tt14391622/"
                },
                {
                  slug: "recall",
                  title: "Recall",
                  desc: "A suspenseful drama about memory and truth.",
                  img: "/recall.jpg",
                  link: "https://www.google.com/search?q=recall+movie+nigeria"
                },
                {
                  slug: "life-and-dirt",
                  title: "Life and Dirt",
                  desc: "A moving story of resilience and hope.",
                  img: "/lifeanddirt.jpg",
                  link: "https://www.google.com/search?q=life+and+dirt+movie"
                },
                {
                  slug: "out-in-the-darkness",
                  title: "Out in the Darkness",
                  desc: "A gripping Nigerian drama. (No description found)",
                  img: "/Out-in-the-dark.webp",
                  link: "https://www.google.com/search?q=out+in+the+darkness+naija+movie"
                },
                {
                  slug: "djalifa",
                  title: "Djalifa",
                  desc: "A story of love and tradition. (No description found)",
                  img: "/djalifa.png",
                  link: "https://www.google.com/search?q=djalifa+movie"
                },
                {
                  slug: "ijogbon",
                  title: "Ijogbon",
                  desc: "A coming-of-age adventure about four teenagers whose lives change after a mysterious discovery.",
                  img: "/ijogbon.jpg",
                  link: "https://www.imdb.com/title/tt28706446/"
                },
                {
                  slug: "naija-christmas",
                  title: "Naija Christmas",
                  desc: "A fun Nigerian holiday film about family, love, and surprises.",
                  img: "/Naija Christmas.jpg",
                  link: "https://www.imdb.com/title/tt16390802/"
                },
                {
                  slug: "accroche-hooked",
                  title: "Accroche HOOKED",
                  desc: "A captivating story of connection and transformation.",
                  img: "/accroche.jpg",
                  link: "https://www.imdb.com/title/tt32212345/"
                },
              ]
                .slice(0, showAllPortfolio ? undefined : 4)
                .map((work, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950/80 border border-slate-800 rounded-3xl shadow-lg min-w-[240px] max-w-xs flex-shrink-0 group hover:border-cyan-400 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full" style={{ aspectRatio: '2/2.7', minHeight: 160 }}>
                      <Link href={`/portfolio/${work.slug}`}>
                        <Image
                          src={work.img}
                          alt={work.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-3xl"
                        />
                      </Link>
                    </div>
                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="text-lg font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-slate-400 mb-2 flex-1 line-clamp-2 text-sm">
                        {work.desc}
                      </p>
                      <Link href={`/portfolio/${work.slug}`}>
                        <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-3 py-1.5 rounded-full mt-auto w-full text-sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full"
              onClick={() => setShowAllPortfolio((v) => !v)}
            >
              {showAllPortfolio ? "Collapse" : "See More"}
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
            The passionate professionals behind Reak Studios' world-class sound.
          </p>
          <div className="flex justify-center">
            <div className="bg-slate-900/70 rounded-2xl p-8 border border-slate-800 flex flex-col items-center mx-auto">
              <Image src="/anuafolayan.jpg" alt="Anu Afolayan" width={100} height={100} className="rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-bold text-white mb-1">Anu Afolayan</h3>
              <p className="text-cyan-400 mb-2">Composer & Sound Designer</p>
              <p className="text-slate-400 text-sm mb-4">Renowned for original scores and immersive soundscapes in Nollywood.</p>
              <a href="https://en.wikipedia.org/wiki/Anu_Afolayan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline text-sm hover:text-cyan-300">Wikipedia</a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-12 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-10 space-x-4">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Our Clients
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Only real client logos remain, remove EbonyLife Films, FilmOne, Africa Magic, MTN */}
            <div className="flex flex-col items-center">
              <Image src="/Logonetflix.png" alt="Netflix" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Netflix</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Amazon_Prime_Video_logo.svg.png" alt="Amazon Prime Video" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Amazon Prime Video</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/goldeneddfect.jpeg" alt="Golden Effects" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Golden Effects</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/kapmotion.jpeg" alt="KAP Motion Pictures" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">KAP Motion Pictures</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Michelle D. Prod.jpg" alt="Michelle D. Prod" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Michelle D. Prod</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Rock Bottom Flix.jpg" alt="Rock Bottom Flix" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Rock Bottom Flix</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Sarah Stellah - Kwaji Productions.jpg" alt="Sarah Stellah - Kwaji Productions" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Sarah Stellah - Kwaji Productions</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/Laocoe.jpg" alt="Laocoe" width={100} height={60} className="object-contain transition-all duration-300 bg-white rounded-lg p-2" />
              <span className="mt-2 text-sm text-slate-400">Laocoe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-32 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
            Celebrating our achievements and industry recognition for excellence in audio post-production.
          </p>
          <div className="grid grid-cols-1 gap-12 justify-center items-center">
            <div className="bg-slate-950/80 rounded-2xl p-8 border border-slate-800 flex flex-col items-center mx-auto">
              <Image src="/Citation_(film).jpg" alt="Citation Movie Poster" width={120} height={180} className="rounded-xl mb-4 object-cover shadow-lg" />
              <Award className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">Citation</h3>
              <p className="text-cyan-400 mb-2">Africa Movie Academy Awards, 2021</p>
              <ul className="text-slate-400 text-sm mb-2 text-left mx-auto max-w-xs">
                <li>Best Actress in a Supporting Role: <span className="text-cyan-400">Nominated</span></li>
                <li>Best Nigerian Film: <span className="text-cyan-400">Nominated</span></li>
                <li>Best Soundtrack: <span className="text-cyan-400 font-bold">Won</span></li>
              </ul>
              <p className="text-cyan-400 mb-2">The National Film Awards, 2022</p>
              <ul className="text-slate-400 text-sm text-left mx-auto max-w-xs">
                <li>Best International Film: <span className="text-cyan-400 font-bold">Won</span></li>
              </ul>
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

      {/* Redesigned Get in Touch Section with Icon Header */}
      <section id="contact-form" className="py-20 px-4 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-center mb-20 space-x-4">
            <Mail className="w-10 h-10 text-cyan-400" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 mt-12">
            {/* Added mt-12 for more spacing above the booking form */}
            <div className="space-y-8">
              {[
                { icon: <MapPin className="w-8 h-8 text-cyan-400" />, title: "Studio Location", content: "8, Kole Osho Way\nAbule Oko Road, Magboro\nOgun State, Nigeria" },
                { icon: <Phone className="w-8 h-8 text-cyan-400" />, title: "Phone", content: "07019246326" },
                { icon: <Mail className="w-8 h-8 text-cyan-400" />, title: "Email", content: "reakstudios@hotmail.com" },
                { icon: <Clock className="w-8 h-8 text-cyan-400" />, title: "Studio Hours", content: "Monday - Saturday\n8:00 AM - 6:00 PM" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div id="contact-form" className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-800">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Book Your Session
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Full Name</label>
                    <input type="text" className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Email</label>
                    <input type="email" className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white" />
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
                  <textarea rows={4} className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-white resize-none" placeholder="Tell us about your project..."></textarea>
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
      <footer className="py-16 px-6 bg-slate-900 border-t border-slate-800 relative">
        {/* Back to Top Floating Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Back to top"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,255,255,0.15)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-3xl font-bold text-cyan-400 mb-6 md:mb-0 font-serif font-dm-sans">Reak Studios</div>
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
