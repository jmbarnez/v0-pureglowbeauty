"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIChatbot } from "@/components/ai-chatbot"
import { 
  Truck, 
  Globe, 
  Clock, 
  Shield, 
  MapPin, 
  Package,
  CreditCard,
  RefreshCw,
  HelpCircle,
  CheckCircle
} from "lucide-react"

const shippingZones = [
  {
    region: "Europa",
    countries: ["España", "Francia", "Alemania", "Italia", "Portugal", "Países Bajos", "Bélgica", "Austria", "Suiza", "Reino Unido"],
    standardTime: "3-5 días laborables",
    expressTime: "1-2 días laborables",
    freeShippingMin: "75€",
    standardCost: "4,99€",
    expressCost: "9,99€"
  },
  {
    region: "América del Norte",
    countries: ["Estados Unidos", "Canadá", "México"],
    standardTime: "7-10 días laborables",
    expressTime: "3-5 días laborables",
    freeShippingMin: "100€",
    standardCost: "12,99€",
    expressCost: "24,99€"
  },
  {
    region: "América Latina",
    countries: ["Brasil", "Argentina", "Chile", "Colombia", "Perú"],
    standardTime: "10-15 días laborables",
    expressTime: "5-7 días laborables",
    freeShippingMin: "120€",
    standardCost: "14,99€",
    expressCost: "29,99€"
  },
  {
    region: "Asia-Pacífico",
    countries: ["Japón", "Corea del Sur", "Australia", "Singapur", "Hong Kong"],
    standardTime: "10-14 días laborables",
    expressTime: "4-6 días laborables",
    freeShippingMin: "100€",
    standardCost: "14,99€",
    expressCost: "29,99€"
  },
  {
    region: "Oriente Medio",
    countries: ["Emiratos Árabes", "Arabia Saudí", "Qatar", "Kuwait"],
    standardTime: "8-12 días laborables",
    expressTime: "4-6 días laborables",
    freeShippingMin: "100€",
    standardCost: "12,99€",
    expressCost: "24,99€"
  }
]

const features = [
  {
    icon: Globe,
    title: "Envío a +50 Países",
    description: "Llevamos PureGlowBeauty a cualquier rincón del mundo con socios logísticos de confianza."
  },
  {
    icon: Shield,
    title: "Embalaje Seguro",
    description: "Packaging ecológico con protección adicional para que tus productos lleguen en perfectas condiciones."
  },
  {
    icon: Clock,
    title: "Seguimiento en Tiempo Real",
    description: "Rastrea tu pedido en cada paso con notificaciones automáticas por email y SMS."
  },
  {
    icon: RefreshCw,
    title: "Devoluciones Gratuitas",
    description: "30 días para devolver cualquier producto sin coste adicional. Sin preguntas."
  }
]

const faqs = [
  {
    question: "¿Cuánto tarda en procesarse mi pedido?",
    answer: "Los pedidos se procesan en 24-48 horas laborables. Recibirás un email de confirmación con el número de seguimiento una vez que tu paquete haya sido enviado."
  },
  {
    question: "¿Puedo cambiar la dirección de envío después de hacer el pedido?",
    answer: "Sí, puedes modificar la dirección dentro de las primeras 2 horas después de realizar el pedido contactando con nuestro servicio de atención al cliente."
  },
  {
    question: "¿Qué ocurre si mi paquete se pierde o llega dañado?",
    answer: "Todos nuestros envíos están asegurados. Si tu paquete se pierde o llega dañado, contacta con nosotros y te enviaremos un reemplazo sin coste adicional."
  },
  {
    question: "¿Hay impuestos o tasas adicionales para envíos internacionales?",
    answer: "El precio que ves en checkout incluye impuestos para envíos dentro de la UE. Para otros destinos, pueden aplicarse tasas aduaneras locales que corren a cargo del cliente."
  },
  {
    question: "¿Cómo funciona el envío gratuito?",
    answer: "El envío gratuito se aplica automáticamente cuando tu pedido supera el mínimo establecido para tu región. No necesitas código promocional."
  }
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Truck className="w-4 h-4" />
              Envíos Internacionales
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6 text-balance">
              Tu belleza, en cualquier parte del <span className="text-primary">mundo</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enviamos a más de 50 países con los mejores partners logísticos. 
              Disfruta de envío gratuito en pedidos superiores a 75€ para Europa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Zones Table */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">
              Tiempos y costes de envío por región
            </h2>
            <p className="text-muted-foreground">
              Consulta los tiempos estimados de entrega y costes según tu ubicación.
            </p>
          </motion.div>

          <div className="space-y-6">
            {shippingZones.map((zone, index) => (
              <motion.div
                key={zone.region}
                className="bg-card rounded-2xl border border-border overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6 bg-secondary/50 border-b border-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{zone.region}</h3>
                        <p className="text-sm text-muted-foreground">
                          {zone.countries.slice(0, 5).join(", ")}
                          {zone.countries.length > 5 && ` y ${zone.countries.length - 5} más`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-700 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Envío gratis desde {zone.freeShippingMin}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-secondary/30 rounded-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">Envío Estándar</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tiempo estimado:</span>
                        <span className="text-foreground font-medium">{zone.standardTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-muted-foreground">Coste:</span>
                        <span className="text-foreground font-medium">{zone.standardCost}</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Truck className="w-5 h-5 text-primary" />
                        <span className="font-medium text-foreground">Envío Express</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tiempo estimado:</span>
                        <span className="text-foreground font-medium">{zone.expressTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-muted-foreground">Coste:</span>
                        <span className="text-foreground font-medium">{zone.expressCost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">
              Métodos de pago seguros
            </h2>
            <p className="text-muted-foreground">
              Aceptamos múltiples formas de pago con la máxima seguridad y cifrado SSL.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
              <div
                key={method}
                className="flex items-center gap-2 px-6 py-3 bg-card rounded-xl border border-border"
              >
                <CreditCard className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{method}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Todos los pagos están protegidos con cifrado SSL de 256 bits
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground">
              Resolvemos tus dudas sobre envíos y entregas.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-card rounded-xl border border-border p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-background flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-serif font-light text-foreground mb-3">
                  Política de devoluciones sin complicaciones
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tienes <strong className="text-foreground">30 días</strong> desde la recepción para devolver 
                  cualquier producto que no te satisfaga completamente. Sin preguntas, sin costes ocultos.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Etiqueta de devolución prepagada incluida
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reembolso en 5-7 días laborables
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Cambio por otro producto sin coste adicional
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </div>
  )
}
