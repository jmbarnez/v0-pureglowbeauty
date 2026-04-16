"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { useStore } from "@/lib/store-context"
import { Leaf, Heart, Globe, Award, Sparkles, Users, Target, Shield } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  const { t } = useStore()

  const values = [
    {
      icon: Leaf,
      title: "100% Vegan",
      description: "Todos nuestros productos están formulados sin ingredientes de origen animal, respetando la vida en todas sus formas."
    },
    {
      icon: Heart,
      title: "Cruelty-Free",
      description: "Nunca testamos en animales. Estamos certificados por Leaping Bunny y PETA."
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description: "Packaging reciclable, ingredientes de comercio justo y huella de carbono neutral."
    },
    {
      icon: Award,
      title: "Dermatológicamente Testado",
      description: "Cada fórmula es probada por dermatólogos para garantizar seguridad y eficacia."
    }
  ]

  const milestones = [
    { year: "2018", title: "El Comienzo", description: "Fundación en Barcelona con la visión de revolucionar la belleza ética." },
    { year: "2019", title: "Primera Colección", description: "Lanzamiento de nuestra línea de labiales veganos, vendiendo 10,000 unidades en el primer mes." },
    { year: "2020", title: "Expansión Europea", description: "Apertura de distribución en 15 países europeos." },
    { year: "2021", title: "Certificación B Corp", description: "Reconocimiento oficial como empresa que equilibra propósito y beneficio." },
    { year: "2022", title: "Innovación en Skincare", description: "Lanzamiento de la tecnología Anti-Age Complex con ingredientes bioactivos." },
    { year: "2023", title: "Global Reach", description: "Presencia en más de 50 países con envío internacional gratuito." },
    { year: "2024", title: "AI Beauty Tech", description: "Implementación de IA para recomendaciones personalizadas de tono de piel." }
  ]

  const team = [
    {
      name: "Elena Martínez",
      role: "Fundadora & CEO",
      bio: "Experta en Comercio Internacional con más de 15 años de experiencia en la industria de la belleza. Graduada en la Universidad de Barcelona.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Laura Sánchez",
      role: "Directora de I+D",
      bio: "Doctora en Química Cosmética. Lidera el desarrollo de fórmulas innovadoras y seguras.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marc Puig",
      role: "Director de Sostenibilidad",
      bio: "Ingeniero ambiental especializado en cadenas de suministro sostenibles y economía circular.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sofia Chen",
      role: "Directora Creativa",
      bio: "Diseñadora con experiencia en marcas de lujo. Define la estética visual de PureGlowBeauty.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ]

  const stats = [
    { number: "2M+", label: "Clientes Satisfechas" },
    { number: "50+", label: "Países" },
    { number: "70+", label: "Productos" },
    { number: "100%", label: "Vegan & Cruelty-Free" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&h=1080&fit=crop"
            alt="PureGlowBeauty laboratory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-6">
              Nuestra Historia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6 leading-tight text-balance">
              Belleza que <span className="text-primary">respeta</span> el planeta
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada en Barcelona en 2018, PureGlowBeauty nació de la convicción de que la belleza 
              de alta gama puede ser ética, sostenible y accesible para todas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-serif font-light text-primary-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=face"
                    alt="Elena Martínez, Fundadora de PureGlowBeauty"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-xl shadow-xl">
                  <p className="text-sm font-medium text-accent-foreground">
                    &ldquo;La belleza verdadera nunca debería costar el sufrimiento de otro ser vivo.&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Elena Martínez, Fundadora</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full mb-4">
                La Fundadora
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6 text-balance">
                De Barcelona al mundo: Una visión global
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Elena Martínez</strong>, experta en Comercio Internacional 
                  y apasionada por la cosmética desde su infancia, fundó PureGlowBeauty en 2018 con una misión clara: 
                  demostrar que el lujo y la ética pueden coexistir.
                </p>
                <p>
                  Tras años trabajando en multinacionales del sector beauty, Elena identificó una brecha en el mercado: 
                  las consumidoras querían productos de alta calidad que respetaran tanto su piel como el medio ambiente, 
                  pero las opciones eran limitadas y poco accesibles.
                </p>
                <p>
                  Con su experiencia en logística internacional y cadenas de suministro, creó una empresa que 
                  combina la <strong className="text-foreground">tradición cosmética mediterránea</strong> con 
                  la <strong className="text-foreground">innovación tecnológica</strong> en skincare, 
                  distribuyendo a más de 50 países con prácticas 100% sostenibles.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Visión Global</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Ética Empresarial</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Innovación Constante</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4 text-balance">
              Principios que nos definen
            </h2>
            <p className="text-muted-foreground">
              Cada decisión que tomamos está guiada por nuestro compromiso inquebrantable 
              con la ética, la sostenibilidad y la excelencia.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full mb-4">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4 text-balance">
              Un viaje de innovación y compromiso
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-medium text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-4 text-balance">
              Las mentes detrás de la magia
            </h2>
            <p className="text-muted-foreground">
              Un equipo diverso y apasionado que trabaja cada día para ofrecerte lo mejor en belleza ética.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-accent/50 text-accent-foreground text-sm rounded-full mb-4">
                Innovación Tecnológica
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-6 text-balance">
                Ciencia al servicio de la belleza
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Anti-Age Complex</h3>
                    <p className="text-sm text-muted-foreground">
                      Nuestra tecnología patentada combina péptidos bioactivos con ácido hialurónico 
                      de bajo peso molecular para una penetración profunda.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">AI Skin-Tone Finder</h3>
                    <p className="text-sm text-muted-foreground">
                      Inteligencia artificial que analiza tu tipo de piel para recomendarte 
                      el tono perfecto de base, corrector y labial.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Ingredientes Globales</h3>
                    <p className="text-sm text-muted-foreground">
                      Seleccionamos los mejores ingredientes de cada rincón del planeta: 
                      aceite de argán de Marruecos, té verde de Japón, karité de Ghana.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop"
                  alt="PureGlowBeauty laboratory and innovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-foreground">Certificación B Corp</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reconocidos por nuestro compromiso con el impacto social y ambiental positivo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary-foreground mb-4 text-balance">
              Únete a la revolución de la belleza consciente
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Descubre productos que cuidan de ti y del planeta. 
              Envío internacional gratuito en pedidos superiores a 75€.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-colors"
              >
                Explorar Productos
              </Link>
              <Link
                href="/shipping"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-primary-foreground font-medium rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
              >
                Info de Envíos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
